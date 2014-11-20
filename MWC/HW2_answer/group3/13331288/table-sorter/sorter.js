window_onload = false;
function sort_by_col(table_ID, col_num) {
    var table_element = document.getElementById(table_ID).tBodies[0].rows[0].cells[col_num];
    alert(getType(table_element.firstChild.nodeValue));
    return function comp (data1, data2) {
        value1 = convert(data1.cells[col_num].firstChild.nodeValue, getType(data1.cells[col_num].firstChild.nodeValue));
        value2 = convert(data2.cells[col_num].firstChild.nodeValue, getType(data2.cells[col_num].firstChild.nodeValue));
        if (value1 < value2) {
            return  -1;
        } else if  (value1 > value2) {
            return  1;
        } else {
            return  0;
        }
    }
}
function sorter (tableID, col_num) {

    if (!window_onload) {
        onload();
    }

    var new_table = new Array;
    var table = document.getElementById(tableID);
    var table_col = table.tBodies[0].rows;          //  取得当前表格所有列
    var table_title = table.tHead.rows[0].cells;          //  取得表头

    for (var i = 0; i < table_col.length; i++)          //  用一个新数组装载当前列
        new_table[i] = table_col[i];

    if (old_table && (old_table == tableID&&col_num == old_col)) {          //  判断之前是不是已经倒过序
        new_table.reverse();
        if (table_title[col_num].className == "descend")          //  如果已经倒过就变为升序
            table_title[col_num].className = "ascend";
        else table_title[col_num].className = "descend";
    }
    else {
        new_table.sort(sort_by_col(tableID, col_num));          //  反之就是降序
        table_title[col_num].className = "ascend";
    }

    for (var i = 0; i < table_title.length; i++) {          //  取消高亮
        if (i == col_num) continue;
        table_title[i].className = "";
    }

    var frag = document.createDocumentFragment();
    for (var i = 0; i < new_table.length; i++) {          //  重新设置颜色
        if (i%2) new_table[i].style.backgroundColor = '#ccc';
        else new_table[i].style.backgroundColor = '#fff';
        frag.appendChild(new_table[i]);
    }
    table.tBodies[0].appendChild(frag);
    old_table = tableID;
    old_col = col_num;
}

function makeAllTableSortable(tables) {          //  获取被点击的表格ID与列数
        document.onclick = function(e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName.toLowerCase() === "th") {
                var colIdx = target.cellIndex;
                var tableID = target.parentNode.parentNode.parentNode.id;
                sorter(tableID, colIdx);
            }
        }
}

function getAllTables() {
    var tables = document.getElementsByTagName("table");
    old_table = null;          //  记录之前排序的tableID
    old_col = null;          //  记录之前排序的table的column
    color_reset(tables);          //  调整颜色，一行白一行灰
    window_onload = true;
}
window.onload = function onload() {
    window_onload = true;
    var tables = getAllTables();
    makeAllTableSortable(tables);
}

function color_reset(tables) {
    for (var i = 0; i < tables.length; i++) {
        var r = tables[i].tBodies[0].rows;
        for (var j = 0; j < r.length; j++)
            if (j%2) r[j].style.backgroundColor = '#ccc';
            else r[j].style.backgroundColor = '#fff';
    }
}

function getType(v) {
    var t;
    //return ((t = typeof(v)) == "object"? v == null && "null" || Object.prototype.toString.call(v).slice(8, -1):t).toLowerCase();
    if (v.indexOf("/") == -1 && parseInt(v)) return "int";
    t = new Date(Date.parse(v));
    if (t == "Invalid Date") return "string";
    else return "date";
}

function convert(value, dataType) {
    switch (dataType) {
        case "int":
            return parseInt(value);
        case "date":
            return new Date(Date.parse(value));
        default:
            return value.toString();
    }
}
