$ = function(obj) {
	return document.getElementById(obj);
};
$$ = function(selector) {
	return document.querySelectorAll(selector);
};

var gamestart = false;

window.onload = function() {
	boundaries = $$("#maze .boundary");

	$("start").onmouseover = function(e) {
		if (!gamestart) {
			gamestart = true;
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].style.backgroundColor = "#eeeeee";
			}
		}
		e.stopPropagation();
	};

	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = function(e) {
			if (gamestart) {
				gamestart = false;
				for (var i = 0; i < boundaries.length; i++) {
					boundaries[i].style.backgroundColor = "red";
				}
				alert("You lost!");
			}
			e.stopPropagation();
		};
	}

	$("end").onmouseover = function(e) {
		if (gamestart) {
			gamestart = false;
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].style.backgroundColor = "green";
			}
			alert("You Win!");
		}
		e.stopPropagation();
	};

	$$("body")[0].onmouseover = function() {
		if (gamestart) {
			gamestart = false;
			for (var i = 0; i < boundaries.length; i++) {
				boundaries[i].style.backgroundColor = "red";
			}
		}
	};

	$("maze").onmouseover = function(e) {
		e.stopPropagation();
	};
};