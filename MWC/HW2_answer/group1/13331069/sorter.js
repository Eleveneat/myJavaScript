function Sort(_trs, _col) {
	for (var k = 0; k < _trs.length - 1; k++) {
		for (var i = 0; i < _trs.length - 1; i++) {
			var _tds = new Array();
			for (var j = 0; j <= _trs.length - 1; j++) {
				var tds = _trs[j].getElementsByTagName("td");
				_tds.push(tds[_col]);
			}
			if (_tds[i].innerHTML > _tds[i+1].innerHTML) {
				var temp = _trs[i].innerHTML;
				_trs[i].innerHTML = _trs[i+1].innerHTML;
				_trs[i+1].innerHTML = temp;
			}
		}
	}
}
function Sort2(_trs, _col) {
	for (var k = 0; k < _trs.length - 1; k++) {
		for (var i = 0; i < _trs.length - 1; i++) {
			var _tds = new Array();
			for (var j = 0; j <= _trs.length - 1; j++) {
				var tds = _trs[j].getElementsByTagName("td");
				_tds.push(tds[_col]);
			}
			if (_tds[i].innerHTML < _tds[i+1].innerHTML) {
				var temp = _trs[i].innerHTML;
				_trs[i].innerHTML = _trs[i+1].innerHTML;
				_trs[i+1].innerHTML = temp;
			}
		}
	}
}
function Backgroundchange(_th) {
	_th.className = "colorrise";
}
function Backgroundchange2(_th) {
	_th.className = "colordown";
}
function Colorrecover() {
	var _th = document.getElementsByTagName("th");
	for (var i = _th.length - 1; i >= 0; i--) {
		_th[i].className = "origincolor";
	}
}
function getAllTables() {
	var table = document.getElementsByTagName("table");
	return table;
}
function makeAllTablesSortable(_table) {
	for (var i = _table.length - 1; i >= 0; i--) {
		makeTable(_table[i]);
	}
}
function makeTable(_table_) {
		var ths = _table_.getElementsByTagName("th");
		var tb = _table_.getElementsByTagName("tbody");
		var trs = tb[0].getElementsByTagName("tr");
		for (var k = ths.length - 1; k >= 0; k--) {
			ths[k].col = k;
			ths[k].clicktime = 0;
			ths[k].onclick = function() {
				this.clicktime++;
				Colorrecover();
				if(this.clicktime%2 == 1) {
					Backgroundchange(this);
					Sort(trs,this.col);
				} else {
					Backgroundchange2(this);
					Sort2(trs,this.col);
				}
			}
		}
}
window.onload = function(){
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}