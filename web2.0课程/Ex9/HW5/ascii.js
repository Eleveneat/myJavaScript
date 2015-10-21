/*
*    Filename: ascii.js
*    Description: 1. 完成基本要求。
*                 2. 完成Turbo加速特性。
*                 3. 完成控制器生效特性。
*                 4. 符合非嵌入式JavaScript。
*    Last modified: 2014-12-16 15:58
*
*    Created by Eleven on 2014-12-15
*    Email: eleveneat@gmail.com
*    Copyright (C) 2014 Eleven. All rights reserved.
*/

var ASCIITimer = null;
var time = 200;
var count = 0;
var originalText = "";

$ = function(obj) {
	return document.getElementById(obj);
};

window.onload = function() {
	addOnclickListener();
	disableControl();
};

// 增加点击事件处理器
function addOnclickListener() {
	$("start_btn").addEventListener('click', showASCII);
	$("stop_btn").addEventListener('click', stopASCII);
	$("small_btn").addEventListener('click', smallFontSize);
	$("medium_btn").addEventListener('click', mediumFontSize);
	$("large_btn").addEventListener('click', largeFontSize);
	$("turbo").addEventListener('click', quickenASCII);
}

// 控制用户能点击的内容
function disableControl() {
	if (ASCIITimer) {
		$("start_btn").disabled = true;
		$("stop_btn").disabled = false;
		$("animation_select").disabled = true;
	} else {
		$("start_btn").disabled = false;
		$("stop_btn").disabled = true;
		$("animation_select").disabled = false;
	}
}

function showASCII() {
	if (!ASCIITimer) {
		originalText = $("displayarea").value; // 存放动画播放前文本框的文本
		var animationStyle = $("animation_select").value;
		if (animationStyle == "Custom") { // 自定义的动画由前四个动画组成而成
			Custom = ANIMATIONS["Exercise"] + "=====\n" 
					+ ANIMATIONS["Juggler"] + "=====\n" 
					+ ANIMATIONS["Bike"] + "=====\n"
					+ ANIMATIONS["Dive"];
			var animationList = Custom.split("=====\n");
		} else {
			var animationList = ANIMATIONS[animationStyle].split("=====\n");
		}
		ASCIITimer = setInterval(intervalASCII, time, animationList, animationList.length);
	}
	disableControl();
}

// 循环播放动画
function intervalASCII(animationList, length) {
	$("displayarea").value = animationList[count];
	count = (count + 1) % length;
}

// 停止播放动画
function stopASCII() {
	if (ASCIITimer) {
		clearInterval(ASCIITimer);
		ASCIITimer = null;
		count = 0;
		$("displayarea").value = originalText; // 重新显示动画播放前文本框的文本
	}
	disableControl();
}

// 改变文本字体大小
function smallFontSize() {
	$("displayarea").className = "smallfontsize_displayarea";
}
function mediumFontSize() {
	$("displayarea").className = "mediumfontsize_displayarea";
}
function largeFontSize() {
	$("displayarea").className = "largefontsize_displayarea";
}

// 调节动画播放速度
function quickenASCII() {
	time = $("turbo").checked ? 50 : 200;
	if (ASCIITimer) {
		clearInterval(ASCIITimer);
		ASCIITimer = null;
		var str = originalText;
		showASCII();
		originalText = str;
	}
}
