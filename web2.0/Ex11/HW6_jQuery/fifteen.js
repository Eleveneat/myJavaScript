$(document).ready(function(){
	var blankXPos = blankYPos = "300px", var puzzlePieceList = null, var isShuffling = false;
	initialization(); BeFinishedStyle();
	$("#shufflebutton").click(function() {
		if (isFinish()) initialization();
		$("#shufflebutton").attr("disabled", true); // 洗牌时禁止再次按下洗牌按钮
		shuffleTimer = setInterval(shuffle, 10); // 开始洗牌
		setTimeout(function() {
			clearInterval(shuffleTimer); // 停止洗牌
			isShuffling = false;
			$("#shufflebutton").attr("disabled", false); // 解禁洗牌按钮
		}, 2000);
	});
	function initialization() { // 初始化所有的拼图块
		var xPos_int = yPos_int = 0;
		puzzlePieceList = $("#puzzlearea div");
		for (var i = 0; i < puzzlePieceList.length; i++) {
			if ($(puzzlePieceList[i]).text() == "")
				$(puzzlePieceList[i]).text(i+1);
			$(puzzlePieceList[i]).attr("class", "puzzlepiece");
			$(puzzlePieceList[i]).css({"background-image" : "url(pic/1.jpg)",
									"left" : xPos_int + "px", "top" : yPos_int + "px",
									"background-position" : (-xPos_int) + "px " + (-yPos_int) + "px",
									"transition-property" : "left, top", "transition-duration" : "0.5s"});
			$(puzzlePieceList[i]).mouseover(isMovable);
			xPos_int = (xPos_int + 100) % 400;
			if ((i + 1) % 4 == 0) yPos_int += 100;
		}
	}
	function BeFinishedStyle() { // 所有拼图块处于正确位置时的样式（不显示数字），并且取消时间处理器
		for (var i = 0; i < puzzlePieceList.length; i++) {
			$(puzzlePieceList[i]).text("");
			$(puzzlePieceList[i]).attr("class", "puzzlepiece");
			$(puzzlePieceList[i]).unbind('mouseover', isMovable);
			$(puzzlePieceList[i]).unbind('click', movePieces);
		}
	}
	function isMovable() { // 判断拼图块是否能移动
		var xPos = this.style.left, yPos = this.style.top;
		$(this).unbind('click', movePieces);
		if (xPos == blankXPos || yPos == blankYPos) { // 如果空白块同行或同列，则拼图块能移动
			$(this).attr("class", "puzzlepiece movablepiece");
			$(this).click(movePieces);
		} else {
			$(this).attr("class", "puzzlepiece");
		}
	}
	function isFinish() { // 判断是否已完成游戏，即所有拼图块处于正确的位置
		var xPos_int = yPos_int = 0;
		for (var i = 0; i < puzzlePieceList.length; i++) {
			left_int = parseInt($(puzzlePieceList[i]).css("left"));
			top_int = parseInt($(puzzlePieceList[i]).css("top"));
			if (left_int != xPos_int || top_int != yPos_int) return false;
			xPos_int = (xPos_int + 100) % 400;
			if ((i + 1) % 4 == 0) yPos_int += 100;
		}
		return true;
	}
	function movePieces() { // 一次移动一个或多个拼图块
		var xPos_int = parseInt(this.style.left), yPos_int = parseInt(this.style.top);
		var blankXPos_int = parseInt(blankXPos), blankYPos_int = parseInt(blankYPos);
		if (xPos_int == blankXPos_int) { // 拼图块和空白块同列的情况
			var foo = yPos_int > blankYPos_int ? 100 : -100;
			do {
				piece = getPieceByXY(xPos_int, blankYPos_int + foo);
				toBlank(piece); blankYPos_int += foo;
			} while (blankYPos_int != yPos_int)
		} else { // 拼图块和空白块同行的情况
			var foo = xPos_int > blankXPos_int ? 100 : -100;
			do {
				piece = getPieceByXY(blankXPos_int + foo, yPos_int);
				toBlank(piece); blankXPos_int += foo;
			} while (blankXPos_int != xPos_int)
		}
		if (!isShuffling) // 如果不处于洗牌状态
			if (isFinish()) // 如果所有拼图块位于正确的位置，游戏结束
				BeFinishedStyle(); alert("Victory!");
	}
	function toBlank(piece) { // 将这个拼图块和空白块的位置互换
		var xPos = piece.style.left, yPos = piece.style.top;
		$(piece).css("left", blankXPos); $(piece).css("top", blankYPos);
		blankXPos = xPos; blankYPos = yPos;
	}
	function shuffle() { // 将背景图洗牌
		isShuffling = true; var xPos = yPos = null, randomNum = 0;
		while (xPos != blankXPos && yPos != blankYPos) {
			randomNum = Math.floor(Math.random() * 15);
			var xPos = puzzlePieceList[randomNum].style.left;
			var yPos = puzzlePieceList[randomNum].style.top;
		}
		$(puzzlePieceList[randomNum]).click(movePieces); puzzlePieceList[randomNum].click();
		$(puzzlePieceList[randomNum]).unbind('click', movePieces);
	}
	function getPieceByXY(xPos_int, yPos_int) { // 根据x/y位置得到相对应的拼图块
		for (i = 0; i < puzzlePieceList.length; i++)
			if (parseInt(puzzlePieceList[i].style.left) == xPos_int &&
				parseInt(puzzlePieceList[i].style.top) == yPos_int) return puzzlePieceList[i];
		return null;
	}
});