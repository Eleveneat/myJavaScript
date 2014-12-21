/*
*    Filename: fifteen.js
*    Description: 1. 
*                 2. 
*                 3. 
*                 4. 
*    Last modified: 2014-12-18 15:58
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
var picList = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]; // 存放图片名称的数组

window.onload = function() {
	initialization();
	$("shufflebutton").addEventListener('click', function() {
		timer = setInterval(shuffle,10);
		setTimeout(function(){clearInterval(timer);}, 3000);
	});
};

function initialization() {
	var xPos_int = yPos_int = 0;
	puzzlePieceList = $$("#puzzlearea div");
	picNum = Math.floor(Math.random() * 4);
	for (var i = 0; i < puzzlePieceList.length; i++) {
		puzzlePieceList[i].className = "puzzlepiece";
		puzzlePieceList[i].style.left = xPos_int + "px";
		puzzlePieceList[i].style.backgroundImage = "url(pic/" + picList[picNum] + ")";
		puzzlePieceList[i].style.top = yPos_int + "px";
		puzzlePieceList[i].style.backgroundPosition = (-xPos_int) + "px " + (-yPos_int) + "px";
		puzzlePieceList[i].style.transitionProperty = "left, top";
		puzzlePieceList[i].style.transitionDuration = "0.5s";
		puzzlePieceList[i].addEventListener('mouseover', isMovable);
		xPos_int = (xPos_int + 100) % 400;
		if ((i + 1) % 4 == 0) yPos_int += 100;
	}
}

function isMovable() { // 判断拼图块是否能移动
	var xPos = this.style.left;
	var yPos = this.style.top;
	if (xPos == blankXPos || yPos == blankYPos) { // 拼图块能移动，因为和空白块同行或同列
		this.className += " movablepiece";
		this.addEventListener('click', movePieces);
	} else {
		this.className = "puzzlepiece";
		this.removeEventListener('click', movePieces);
	}
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
	isFinish();
}
function isFinish() {

}

function toBlank(piece) { // 将这个拼图块和空白块的位置互换
	var xPos = piece.style.left;
	var yPos = piece.style.top;
	piece.style.left = blankXPos;
	piece.style.top = blankYPos;
	blankXPos = xPos;
	blankYPos = yPos;
}

function getPieceByXY(xPos_int, yPos_int) { // 根据x/y位置得到相对应的拼图块
	for (i = 0; i < puzzlePieceList.length; i++) {
		if (parseInt(puzzlePieceList[i].style.left) == xPos_int &&
			parseInt(puzzlePieceList[i].style.top) == yPos_int)
			return puzzlePieceList[i];
	}
	return null;
}

// var selectNum = 0;
function shuffle() {
	var xPos = yPos = null, randomNum = 0;
	while (xPos != blankXPos && yPos != blankYPos) {
		randomNum = Math.floor(Math.random() * 15);
		var xPos = puzzlePieceList[randomNum].style.left;
		var yPos = puzzlePieceList[randomNum].style.top;
	}
	// selectNum = randomNum;
	puzzlePieceList[randomNum].addEventListener('click', movePieces);
	puzzlePieceList[randomNum].click();
	puzzlePieceList[randomNum].removeEventListener('click', movePieces);
}













