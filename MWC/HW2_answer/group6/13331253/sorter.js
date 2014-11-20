window.onload = function  () {
	var tables = getAllTables();
	makeAllTablesSortable(tables);

	// body...
}
function getAllTables () {
	var tables = document.getElementsByTagName('table');
	return tables;
	// body...
}
var table_num;
function makeAllTablesSortable (tables) {
	/*var thcount = tables.target.getElementsByTagName('table');*/
	/*alert(thcount.length);*/
	for ( table_num = 0;table_num < tables.length;table_num++) {
		var thead = tables[0].getElementsByTagName('thead');
		var th =thead[0].getElementsByTagName('th');
		var th2 = tables[1].getElementsByTagName('th');
		var tbody = tables[0].getElementsByTagName('tbody');
		var tbody2 = tables[1].getElementsByTagName('tbody');
		var arr = [];
		var len = [];

		var isAsc = true;

		//for (var j = 0;j < th.length;j++) {
			th[0].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[0].rows.length - 1;k++) {
					arr[k] = tables[0].rows[k+1];
					len[k] = tbody[0].rows[k].cells[0].innerHTML.length
					/*alert(tables[0].rows[k+1].innerHTML)
					alert("k");
					alert(tables[0].rows[k+1].cells[0].innerHTML);
					alert(tables[0].rows[k+1].cells[0].innerHTML.length);*/
				}
				/*for (var k = 0;k < tables[0].rows.length - 1;k++ ) {
					if (len[k] < len[k+1]) {
						arr[k] = tbody[0].rows[k+1];
						arr[k+1] = tbody[0].rows[k];
					}
					else {
						arr[k] = tbody[0].rows[k];
						arr[k+1] = tbody[0].rows[k+1];
					}
				}*/
				
				//for(var j = 0; j <  tbody[0].rows.length; j++ ) {
                tbody[0].appendChild(arr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < arr.length; j++ ) {
            			tbody[0].appendChild(arr[0]);

            		}
				isAsc = true;
                //}
			}

			}
			th[1].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[0].rows.length - 1;k++) {
					arr[k] = tables[0].rows[k+1];
					len[k] = tbody[0].rows[k].cells[1].innerHTML.length;
					
				}
	
                tbody[0].appendChild(arr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < arr.length; j++ ) {
            			tbody[0].appendChild(arr[0]);

            		}
				isAsc = true;
 
			}

			}
			th[2].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[0].rows.length - 1;k++) {
					arr[k] = tables[0].rows[k+1];
					len[k] = tbody[0].rows[k].cells[2].innerHTML.length;
					
				}
	
                tbody[0].appendChild(arr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < arr.length; j++ ) {
            			tbody[0].appendChild(arr[0]);

            		}
				isAsc = true;
 
			}

			}



				var brr = [];
					for (var k = 0;k < tables[0].rows.length - 1;k++) {
					brr[k] = tables[1].rows[k+1];
					len[k] = tbody2[0].rows[k].cells[0].innerHTML.length
					
				}

		
			th2[0].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[1].rows.length - 1;k++) {
					brr[k] = tables[1].rows[k+1];
					len[k] = tbody2[0].rows[k].cells[0].innerHTML.length
				
				}
				
                tbody2[0].appendChild(brr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < brr.length; j++ ) {
            			tbody2[0].appendChild(brr[0]);

            		}
				isAsc = true;
                //}
			}

			}
			th2[1].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[0].rows.length - 1;k++) {
					brr[k] = tables[1].rows[k+1];
					len[k] = tbody2[0].rows[k].cells[1].innerHTML.length;
					
				}
	
                tbody[0].appendChild(brr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < brr.length; j++ ) {
            			tbody2[0].appendChild(brr[0]);

            		}
				isAsc = true;
 
			}

			}
			th2[2].onclick = function () {
				if (isAsc) {
				for (var k = 0;k < tables[1].rows.length - 1;k++) {
					brr[k] = tables[1].rows[k+1];
					len[k] = tbody2[0].rows[k].cells[2].innerHTML.length;
					
				}
	
                tbody[0].appendChild(brr[0]);
                isAsc = false;
            }	
            	if(!isAsc) {
            		for (var j = 0; j < brr.length; j++ ) {
            			tbody2[0].appendChild(brr[0]);

            		}
				isAsc = true;
 
			}

			}
		//}
	}







/*	alert(i);
	alert("year");
	alert(thead.length);
	alert(tables.length);
	alert(tables[0]);
	alert(tables[1]);*/
	// body...
}

/*function makeStortable (event) {

	alert("stor");
}*/
