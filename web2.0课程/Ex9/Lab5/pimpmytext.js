/*
*    Filename: pimpmytext.js
*    Description: Lab5.
*    Last modified: 2014-12-15 19:58
*
*    Created by Eleven on 2014-12-15
*    Email: eleveneat@gmail.com
*    Copyright (C) 2014 Eleven. All rights reserved.
*/

$ = function(obj) {
	return document.getElementById(obj);
}

window.onload = function() {
	//增加事件处理器
	$("BiggerPimpin").addEventListener('click', enlargeFont);
	$("Bling").addEventListener('click', changeFontStyle);
	$("Snoopify").addEventListener('click', upperCaseAndSuffixSentence);
}

//增加字体大小，直接用style是不好的行为，谨记
var fontSize = 12;
function enlargeFont() {
	fontSize += 2;
	$("Text").style.fontSize = fontSize + "pt";
	document.getElementsByTagName("body")[0].style.backgroundImage = "url(hundred-dollar-bill.jpg)";
}

//改变样式
function changeFontStyle() {
	if($("Bling").checked) {
		$("Text").className = "styleText";
	} else {
		$("Text").className = "Text";
	}
}

//在每个句子后面增加后缀"-izzle"。（一个充当文本字符串的句子以句号字符"."结尾）
function upperCaseAndSuffixSentence() {
	var str = $("Text").value;
	var parts = str.toUpperCase().split(".");
	str = parts.join("-izzle.");
	$("Text").value = str;
}
