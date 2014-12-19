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

var blankXPos = blankYPos = "300px"

$ = function(obj) {
	return document.getElementById(obj);
};
$$ = function(selector) {
	return document.querySelectorAll(selector);
};

window.onload = function() {
	// $("start_btn").addEventListener('click', showASCII);
	initialization();
};

function initialization() {
	var xPos = yPos = 0;
	var puzzlePieceList = $$("#puzzlearea div");
	for (var i = 0; i < puzzlePieceList.length; i++) {
		if (i && i % 4 == 0) yPos += 100;
		puzzlePieceList[i].className = "puzzlepiece";
		puzzlePieceList[i].style.left = xPos + "px";
		puzzlePieceList[i].style.top = yPos + "px";
		puzzlePieceList[i].style.backgroundPosition = (-xPos) + "px " + (-yPos) + "px";
		xPos = (xPos + 100) % 400;
		// puzzlePieceList[i].onmouseover =  isMovable;
		puzzlePieceList[i].addEventListener('mouseover', isMovable);
	}
}

function isMovable() {
	var xPos = this.style.left;
	var yPos = this.style.top;
	if (xPos == blankXPos || yPos == blankYPos) {
		this.className += " movablepiece";
		this.addEventListener('click', movePieces);
	} else {
		this.className = "puzzlepiece";
	}
}

function movePieces() {
	// alert(1);
	toBlank(this);
}

function toBlank(obj) {
	obj.style.transition = "all 0.5s";
	var xPos = obj.style.left;
	var yPos = obj.style.top;
	obj.style.left = blankXPos;
	obj.style.top = blankYPos;
	blankXPos = xPos;
	blankYPos = yPos;
}






