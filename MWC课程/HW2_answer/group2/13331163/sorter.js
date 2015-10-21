/*
功能都已经实现，主要是对样式修改提出了两点建议：

1.当js涉及到到样式修改时，最好在css文件来定义一个样式，然后通过修改元素的class属性来修改样式；
2.偶数和奇数行的样式最好通过css选择器（nth-child(2n)）来实现。
*/


function changeTableLineColor(oTable) {
	var oTbody = oTable.getElementsByTagName("tbody")[0];
	var aTr = oTbody.getElementsByTagName("tr");
	for (var i = 0; i < aTr.length; i++) {
		if (i % 2 == 1) {
			aTr[i].className = "colorGray";
		} else {
			aTr[i].className = '';
		}
	}
}

// 改变表头, col表示被点击的th的位置
function changeTableHead(oTable, col) {
	// var oThead = oTable.getElementsByTagName("thead")[0];
	// var oTr = oThead.getElementsByTagName("tr")[0];
	// var aTh = oTr.getElementsByTagName("th");
	var aTh = oTable.getElementsByTagName("th");

	if (aTh[col].sortTime == 0) {
		for (var i = 0; i < aTh.length; i++) {
			if (i != col) {
				aTh[i].style.background = "#000099";
				aTh[i].sortTime = 0;
			}
		}
		aTh[col].style.background = "#99CCFF url(ascend.png) no-repeat right";
		aTh[col].sortTime = 1;
	} else if (aTh[col].sortTime == 1) {
		aTh[col].style.background = "#99CCFF url(descend.png) no-repeat right";
		aTh[col].sortTime = 2;
	} else if (aTh[col].sortTime == 2) {
		aTh[col].style.background = "#99CCFF url(ascend.png) no-repeat right";
		aTh[col].sortTime = 1;
	}
}


//  排序时的比较函数
function greater(first, second) {
	return first > second;
}

function less(first, second) {
	return first < second;
}

//  排序时的交换函数
// function swap(first, second) {
// 	var temp = first;
// 	first = second;
// 	second = temp;
// }

// 排序算法-冒泡排序
function mySort(aTr, col, cmp) {
	var arr = new Array();
	var arrTemp;
	for (var i = 0; i < aTr.length; i++) {
		arrTemp = aTr[i].getElementsByTagName("td");
		arr.push(arrTemp[col].innerHTML);
	}

	for (var i = arr.length - 1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (cmp(arr[j], arr[j+1])) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				temp = aTr[j].innerHTML;
				aTr[j].innerHTML = aTr[j+1].innerHTML;
				aTr[j+1].innerHTML = temp;
			}
		}
	}

}

// col表示排序时的比较列
function sortTable(oTable, itself) {
	var col = itself.index;

	var oTbody = oTable.getElementsByTagName("tbody")[0];
	var aTr = oTbody.getElementsByTagName("tr");

	if (itself.sortTime == 1) {
		mySort(aTr, itself.index, greater);
	} else if (itself.sortTime == 2) {
		mySort(aTr, itself.index, less);
	}
}

// 使table可排序化
function setSortableTable(oTable) {
	// var oThead = oTable.getElementsByTagName("thead")[0];
	// var aTh = oThead.getElementsByTagName("tr")[0].getElementsByTagName("th");
	var aTh = oTable.getElementsByTagName("th");
	for (var i = 0; i < aTh.length; i++) {
		aTh[i].sortTime = 0;
		aTh[i].index = i;
		aTh[i].onclick = function() {
			// alert(this.innerHTML);
			changeTableHead(oTable, this.index);
			sortTable(oTable, this);
			// changeTableLineColor(oTable);
		}
	}
}

function getAllTables() {
	return document.getElementsByTagName("table");
}

function makeAllTablesSortable(tables) {
	for (var i = 0; i < tables.length; i++) {
		// 改变table行的颜色
		changeTableLineColor(tables[i]);
		// 使table可排序
		setSortableTable(tables[i]);
	}
};

window.onload = function() {
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}
