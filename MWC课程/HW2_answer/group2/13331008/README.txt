可排序的url：    1.http://www.statsoft.com/textbook/distribution-tables
		2.http://dev.mysql.com/doc/refman/5.0/en/statistics-table.html
		3.http://www.irs.gov/uac/SOI-Tax-Stats-Historic-Table-2

使用一下代码即可排序：

    	tables = document.getElementsByTagName("table");
	for (var i = 0; i < tables.length; i++) {
		var th = tables[i].rows[0].cells;
		tables[i].col = -1; // 用于在table中记录被点击的th，没有则为-1

		for (var j = 0; j < th.length; j++) {
			th[j].tableNum = i; // 记录被点击的th所属的table
			th[j].column = j; // 记录被点击的th
			th[j].clickFlag = 0; // 用于判断点击后是升序还是降序排序

			th[j].onclick = function() {
				var table = this.parentNode.parentNode.parentNode; // 获得被点击的th所属的table
				var tr = table.rows, th = tr[0].cells;

				// 改变表头
				if (this.clickFlag == 0) { // 判断用升序还是降序表头
					if (table.col != -1) { //判断是不是在同一个table中点击
						th[table.col].className = th[table.col].className.replace(" changed1", "");
						th[table.col].className = th[table.col].className.replace(" changed2", "");
						th[table.col].clickFlag = 0; // 去除table中已有表头并将该table中之前被点击列的clickFlag置零
					}
					th[this.column].className += " changed1"; // 使用升序表头
				}
				else {
					th[this.column].className = th[this.column].className.replace(" changed1", " changed2"); // 使用降序表头
				}

				this.clickFlag = 1 - this.clickFlag;
				table.col = this.column;

				// 对每一行进行排序，选择排序，根据clickFlag来确定用升序还是降序排序
				for (var x = 1; x < tr.length - 1; x++) {
					var temp;

					for (var y = x + 1; y < tr.length; y++) {
						if ((this.clickFlag != 0 && tr[x].cells[this.column].innerHTML > tr[y].cells[this.column].innerHTML)
							|| (this.clickFlag == 0 && tr[x].cells[this.column].innerHTML < tr[y].cells[this.column].innerHTML)) {
							temp = tr[x].innerHTML;
							tr[x].innerHTML = tr[y].innerHTML;
							tr[y].innerHTML = temp;
						}
					}
				}
			};
		}
	}