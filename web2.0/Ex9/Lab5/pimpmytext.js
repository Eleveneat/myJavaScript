$ = function(obj) {
	return document.getElementById(obj);
}

window.onload = function() {
	// alert("1");
	$("BiggerPimpin").onclick = enlargeFont;
	$("Bling").addEventListener('click', changeFontStyle);
	$("Snoopify").addEventListener('click', upperCaseAndSuffixSentence);
}

var fontSize = 12;
function enlargeFont() {
	fontSize += 2;
	$("Text").style.fontSize = fontSize + "pt";
	document.getElementsByTagName("body")[0].style.backgroundImage = "url(hundred-dollar-bill.jpg)";
}

function changeFontStyle() {
	if($("Bling").checked) {
		$("Text").className = "styleText";
	} else {
		$("Text").className = "Text";
	}
}

function upperCaseAndSuffixSentence() {
	var str = $("Text").value;
	var parts = str.toUpperCase().split(".");
	str = parts.join("-izzle.");
	$("Text").value = str;
}