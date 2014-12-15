/*
*    Filename: ascii.js
*    Description: HW5.
*    Last modified: 2014-12-15 21:04
*
*    Created by Eleven on 2014-12-15
*    Email: eleveneat@gmail.com
*    Copyright (C) 2014 Eleven. All rights reserved.
*/

$ = function(obj) {
	return document.getElementById(obj);
};

window.onload = function() {
	//增加事件处理器
	$("Start").addEventListener('click', showASCII);
	$("Stop").addEventListener('click', stopASCII);
};

var timer = null;
var count = 0;
var originalText = "";
function showASCII() {
	if (!timer) {
		originalText = $("displayarea").value; // 存放动画播放前文本框的文本
		var animationStyle = $("Animation").value;
		var animationList = ANIMATIONS[animationStyle].split("=====\n");
		timer = setInterval(intervalASCII, 150, animationList, animationList.length);
	}
}

// 循环播放动画
function intervalASCII(animationList, length) {
	$("displayarea").value = animationList[count];
	count = (count + 1) % length;
}

function stopASCII() {
	if (timer) {
		clearInterval(timer);
		timer = null;
		count = 0;
		$("displayarea").value = originalText; // 重新显示动画播放前文本框的文本
	}
}