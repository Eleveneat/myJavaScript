/*function cleanWhitespace(oEelement) {
	for(var i=0;i<oEelement.childNodes.length;i++){
 		var node=oEelement.childNodes[i];
		if(node.nodeType==3 && !/\S/.test(node.nodeValue)){
			node.parentNode.removeChild(node);
		}
  	}
}
cleanWhitespace();*/








window.onload = function () {
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}

function getAllTables () {
	return document.getElementsByTagName('table');
}

function makeAllTablesSortable (tables) {
	for (var i = tables.length - 1; i >= 0; i--) {
		var table = tables[i];
		//var tbody = table.tBodies[0];
		var tr_array_temp = table.tBodies[0].rows;
		var th_array = table.tHead.rows[0].cells;
		//var ths = table.firstChild.firstChild.childNodes;
		for (var j = th_array.length - 1; j >= 0; j--) {
			th_array[j].isOddTimes = 1;
			var tr_array = new Array;
			for (var k = tr_array_temp.length - 1; k >= 0; k--) {
				tr_array[k] = tr_array_temp[k].toString;
			};
			th_array[j].onclick = toOrder(th_array[j], tr_array);
			//th_array[j].addEventListener('click', toOrder);
		};
	};
}
/*function makeAllTablesSortable (tables) {
	for (var i = tables.length - 1; i >= 0; i--) {
		var table = tables[i];
		var ths = table.firstChild.firstChild.childNodes;
		for (var j = ths.length - 1; j >= 0; j--) {
			ths[j].isOddTimes = 1;
			ths[j].addEventListener('click', toOrder);
		};
	};
}*/

/*function toOrder (event) {
	var thToSort = event.target;
	toSort(thToSort);
	setThCss(thToSort);
	resetAll(thToSort);
	thToSort.isOddTimes = -(thToSort.isOddTimes);
}*/

function toOrder (thToSort, trToSort) {
	//var thToSort = event.target;
	toSort(thToSort, trToSort);
	setThCss(thToSort);
	resetAll(thToSort);
	thToSort.isOddTimes = -(thToSort.isOddTimes);
}

function toSort (thToSort, trToSort) {
	thIndex = thToSort.cellIndex;
	var rowsToSort = trToSort;
	//var rowsToSort = thToSort.parentNode.parentNode.parentNode.tBodies[0].rows;
	//var rowsToSort = thToSort.parentNode.parentNode.nextSibling.childNodes;//检查空白节点防错误
	rowsToSort.sort(sortby);
}
function sortby (a,b) {
			var aChildNode = a.cells[thIndex];
			var bChildNode = b.cells[thIndex];
			if (aChildNode > bChildNode) {
				return event.target.isOddTimes;
			}
			if (aChildNode < bChildNode) {
				return -(event.target.isOddTimes);
			}
		}

function setThCss (thToSetCss) {
	if (thToSetCss.isOddTimes == 1) {
		thToSetCss.className = 'thAsc';
	}
	if (thToSetCss.isOddTimes == -1) {
		thToSetCss.className = 'thDesc';
	}
	//var className = thToSetCss.className;
	//if(className.indexOf('thAsc') < 0) thToSetCss.className += ' thAsc';
}

function resetAll (thToReset) {
	var thsToReset = thToReset.parentNode.childNodes;
	for (var i = thsToReset.length - 1; i >= 0, i != thsToReset[i].isOddTimes; i--) {
		thsToReset[i].isOddTimes = 1;
		thsToReset[i].className = '';
	};
}


/*function toOrder (event) {
	var ascOrDesc = event.target.isOddTimes;
	toAscOrDescOrder(event.target);
}*/



/*function toOrder (event) {
	var ascOrDesc = event.target.isOddTimes;
	toAscOrDescOrder(event.target);
}

function toAscOrDescOrder (thToSort) {
	var thIndex = thToSort.cellIndex;
	var rowsToSort = thToSort.parentNode.parentNode.nextSibling.childNodes;//检查空白节点防错误
	rowsToSort.sort(function (a,b) {
			var aChildNode = a.childNodes[thIndex];
			var bChildNode = b.childNodes[thIndex];
			if (aChildNode > bChildNode) {
				return event.target.isOddTimes;
			}
			if (aChildNode < bChildNode) {
				return -(event.target.isOddTimes);
			}
		}
	);
}*/


/*
function toOrder (event) {
	if (isOddTimes == true) {
		toAscendingOrder(event.target);
	} else {
		toDescendingOrder(event.target);
	}
}

function toAscendingOrder (thToSort) {
	var thIndex = thToSort.cellIndex;
	var rowsToSort = thToSort.parentNode.parentNode.nextSibling.childNodes;//检查空白节点防错误
	rowsToSort.sort(function (a,b) {
			var aChildNode = a.childNodes[thIndex];
			var bChildNode = b.childNodes[thIndex];
			if (aChildNode > bChildNode) {
				return 1;
			}
			if (aChildNode < bChildNode) {
				return -1;
			}
		}
	);
}

function toDescendingOrder (argument) {

}*/