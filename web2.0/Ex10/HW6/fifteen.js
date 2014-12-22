/*
*    Filename: fifteen.js
*    Description: 1. 完成了基本功能。
*                 2. 结束游戏有提醒，弹窗＋改变拼图块样式（不显示数字）。
*                 3. 拼图块的移动有过渡动画。
*                 4. 能一次移动多个拼图块。
*                 5. 能纪录游戏时间与步数。
*                 6. 能选择不同的背景。
*    Last modified: 2014-12-22 15:58
*
*    Created by Eleven on 2014-12-18
*    Email: eleveneat@gmail.com
*    Copyright (C) 2014 Eleven. All rights reserved.
*/

$ = function(obj) {
	return document.getElementById(obj);
};
$$ = function(selector) {
	return document.querySelectorAll(selector);
};

var blankXPos = blankYPos = "300px" // 空白块的x/y位置
var puzzlePieceList = null; // 存放所有拼图块的数组
var isShuffling = false; // 是否处于洗牌的状态
var playingTimer = null; // 记录游戏中的时间的计数器
var totalTime = totalMoveNum = 0; // 游戏中的时间和步数
var bestTime = bestMoveNum = 1000000; // 最佳的游戏时间和步数

window.onload = function() {
	displayTimeAndStep();
	addSelectBackground();
	initialization();
	BeFinishedStyle();
	$("shufflebutton").addEventListener('click', function() {
		if (isFinish()) initialization();
		clearInterval(playingTimer); // 清除上一次的计时
		$("shufflebutton").disabled = true; // 洗牌时禁止再次按下洗牌按钮
		$("team").disabled = true; // 洗牌时禁止选择背景
		shuffleTimer = setInterval(shuffle, 10); // 开始洗牌
		setTimeout(function() {
			clearInterval(shuffleTimer); // 停止洗牌
			isShuffling = false;
			$("shufflebutton").disabled = false; // 解禁洗牌按钮
			$("team").disabled = false; // 解禁背景选择
			playingTimer = setInterval(countTime, 1000); // 开始计时
		}, 2000);
		$("totalTime").innerHTML = totalTime = 0; // 洗牌会把时间和步数都重置为零
		$("totalMoveNum").innerHTML = totalMoveNum = 0;
	});
	$("team").addEventListener('change', function() {
		initialization();
		BeFinishedStyle();
		blankXPos = blankYPos = "300px";
	});
};

function initialization() { // 初始化所有的拼图块
	var xPos_int = yPos_int = 0;
	puzzlePieceList = $$("#puzzlearea div");
	// picNum = Math.floor(Math.random() * 4); // 随机选择一张背景图
	// alert($("team").value);
	for (var i = 0; i < puzzlePieceList.length; i++) {
		if (puzzlePieceList[i].innerHTML == "")
			puzzlePieceList[i].innerHTML = i + 1;
		puzzlePieceList[i].className = "puzzlepiece";
		puzzlePieceList[i].style.backgroundImage = "url(pic/" + $("team").value + ")";
		puzzlePieceList[i].style.left = xPos_int + "px";
		puzzlePieceList[i].style.top = yPos_int + "px";
		puzzlePieceList[i].style.backgroundPosition = (-xPos_int) + "px " + (-yPos_int) + "px";
		puzzlePieceList[i].style.transitionProperty = "left, top";
		puzzlePieceList[i].style.transitionDuration = "0.5s";
		puzzlePieceList[i].addEventListener('mouseover', isMovable);
		xPos_int = (xPos_int + 100) % 400;
		if ((i + 1) % 4 == 0) yPos_int += 100;
	}
}

function BeFinishedStyle() { // 所有拼图块处于正确位置时的样式（不显示数字），并且取消时间处理器
	for (var i = 0; i < puzzlePieceList.length; i++) {
		puzzlePieceList[i].innerHTML = "";
		puzzlePieceList[i].className = "puzzlepiece";
		puzzlePieceList[i].removeEventListener('mouseover', isMovable);
		puzzlePieceList[i].removeEventListener('click', movePieces);
	}
}

function displayTimeAndStep() { // 在网页上显示游戏中的时间、步数、最佳游戏时间和最佳游戏步数
	$("overall").innerHTML += "Time:  <span id='totalTime'>0</span> s<br>"
						+ "Move:  <span id='totalMoveNum'>0</span><br>"
						+ "The Best Time: <span id='bestTime'>0</span> s<br>"
						+ "The Best Move:  <span id='bestMoveNum'>0</span><br>";
}

function addSelectBackground() { // 在网页上增加背景图片的选择
	$("controls").innerHTML += "<select id='team'><option value='0.jpg'>Liverpool</option>"
						+ "<option value='1.jpg'>Chelsea</option>"
						+ "<option value='2.jpg'>Real Madrid</option>"
						+ "<option value='3.jpg'>Dortmund</option></select>";
}

function isMovable() { // 判断拼图块是否能移动
	var xPos = this.style.left;
	var yPos = this.style.top;
	if (xPos == blankXPos || yPos == blankYPos) { // 如果空白块同行或同列，则拼图块能移动
		this.className = "puzzlepiece movablepiece";
		this.addEventListener('click', movePieces);
	} else {
		this.className = "puzzlepiece";
		this.removeEventListener('click', movePieces);
	}
}

function isFinish() { // 判断是否已完成游戏，即所有拼图块处于正确的位置
	var xPos_int = yPos_int = 0;
	for (var i = 0; i < puzzlePieceList.length; i++) {
		left_int = parseInt(puzzlePieceList[i].style.left);
		top_int = parseInt(puzzlePieceList[i].style.top);
		if (left_int != xPos_int || top_int != yPos_int)
			return false;
		xPos_int = (xPos_int + 100) % 400;
		if ((i + 1) % 4 == 0) yPos_int += 100;
	}
	return true;
}

function movePieces() { // 一次移动一个或多个拼图块
	var xPos_int = parseInt(this.style.left);
	var yPos_int = parseInt(this.style.top);
	var blankXPos_int = parseInt(blankXPos);
	var blankYPos_int = parseInt(blankYPos);
	if (xPos_int == blankXPos_int) { // 拼图块和空白块同列的情况
		var foo = yPos_int > blankYPos_int ? 100 : -100;
		do {
			piece = getPieceByXY(xPos_int, blankYPos_int + foo);
			toBlank(piece);
			blankYPos_int += foo;
		} while (blankYPos_int != yPos_int)
	} else { // 拼图块和空白块同行的情况
		var foo = xPos_int > blankXPos_int ? 100 : -100;
		do {
			piece = getPieceByXY(blankXPos_int + foo, yPos_int);
			toBlank(piece);
			blankXPos_int += foo;
		} while (blankXPos_int != xPos_int)
	}
	if (!isShuffling) {
		totalMoveNum += 1;
		$("totalMoveNum").innerHTML = totalMoveNum;
	}
	if (!isShuffling && isFinish()) { // 如果不处于洗牌状态且所有拼图块位于正确的位置
		BeFinishedStyle();
		if (bestTime > totalTime)
			$("bestTime").innerHTML = bestTime = totalTime;
		if (bestMoveNum > totalMoveNum)
			$("bestMoveNum").innerHTML = bestMoveNum = totalMoveNum;
		clearInterval(playingTimer);
		alert("Victory!");
	}
}

function toBlank(piece) { // 将这个拼图块和空白块的位置互换
	var xPos = piece.style.left;
	var yPos = piece.style.top;
	piece.style.left = blankXPos;
	piece.style.top = blankYPos;
	blankXPos = xPos;
	blankYPos = yPos;
}

function shuffle() { // 将背景图洗牌
	isShuffling = true; // 标志为正在洗牌
	var xPos = yPos = null, randomNum = 0;
	while (xPos != blankXPos && yPos != blankYPos) {
		randomNum = Math.floor(Math.random() * 15);
		var xPos = puzzlePieceList[randomNum].style.left;
		var yPos = puzzlePieceList[randomNum].style.top;
	}
	puzzlePieceList[randomNum].addEventListener('click', movePieces);
	puzzlePieceList[randomNum].click();
	puzzlePieceList[randomNum].removeEventListener('click', movePieces);
}

function getPieceByXY(xPos_int, yPos_int) { // 根据x/y位置得到相对应的拼图块
	for (i = 0; i < puzzlePieceList.length; i++) {
		if (parseInt(puzzlePieceList[i].style.left) == xPos_int &&
			parseInt(puzzlePieceList[i].style.top) == yPos_int)
			return puzzlePieceList[i];
	}
	return null;
}

function countTime() { // 记录且显示游戏进行的时间
	totalTime += 1;
	$("totalTime").innerHTML = totalTime;
}










