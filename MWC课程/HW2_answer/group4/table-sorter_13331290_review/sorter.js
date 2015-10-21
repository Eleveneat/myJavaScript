window.onload = function() {
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}

function getAllTables() {
	return document.getElementsByTagName("table");
}

function makeAllTablesSortable(tables) {
	for (var i = 0; i < tables.length; i++) {
		for (var j = 0; j < tables[i].rows[0].cells.length; j++) {
			tables[i].rows[0].cells[j].addEventListener("click", mySort);
		}
	}
}

function mySort() {
	var i, j, sort_way, new_table = new Array(), col = this.cellIndex,
		tbody = this.parentNode.parentNode.nextSibling.nextSibling;

	for (i = 0; i < this.parentNode.cells.length; i++) {
		if (this.parentNode.cells[i] != this) {
			this.parentNode.cells[i].className += "initial";
		}
	}

	if (this.className == "ascend") {
		this.className = "descend";
		sort_way = -1;
	} else {
		this.className = "ascend"
		sort_way = 1;
	}

	for (i = 0; i < tbody.rows.length; i++) {
		new_table[i] = new Array();
		for (j = 0; j < tbody.rows[i].cells.length; j++) {
			new_table[i][j] = tbody.rows[i].cells[j].innerHTML;
		}
	}

	new_table.sort(function (a, b) {
		return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? sort_way : -1 * sort_way);
	});

	for (i = 0; i < tbody.rows.length; i++) {
		tbody.rows[i].innerHTML = "<td>" + new_table[i].join("</td><td>") + "</td>";
	}
}
