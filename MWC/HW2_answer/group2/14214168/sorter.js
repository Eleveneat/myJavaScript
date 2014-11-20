
/*
1.功能还未实现；
2.getData函数里面循环有误，导致不能正确获得表格的二维数组信息；
3.colSort里面x[celIndex]-y[celIndex]这样相减是得不到希望的结果的；
*/


/*********************************************************
 *Date:2014.10.27
 *Author:Panbin
 *********************************************************/
 window.onload = function() {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}
//获取表格所有数据
function getAllTables() {
    return document.getElementsByTagName('table');
}

//表格排序
function makeAllTablesSortable(tables) {
    for (var i = 0; i < tables.length; i++) {
        tableProcess(tables[i]);
    }
}

//单个表格处理
function tableProcess(table) {
    window.eventDeal(table);
    setBackground(table);
}

//背景设置
function setBackground(table){
    for(var i = 1 ; i < table.rows.length ; i++)
    {
        if(i%2 == 0 )
            table.rows[i].style.backgroundColor = "lightgray";
        else
          table.rows[i].style.backgroundColor = "white";
  }
}

//获取数据
function getData(table) {
    var rowArray = []; //二维形式存储表格数据
    var cellArray;
    var rLength = table.rows.length;
    for (var r = 1; r < rLength; r++) {
        cellArray = [];
        for (var c = 0; c < table.rows[r].cells.length; c++)
            cellArray.push(table.rows[r].cells[c].innerText);
        rowArray.push(cellArray);
    }
    return rowArray;
}

//事件处理
function eventDeal(table) {
    var tableData = getData(table); //用于存储单个表格数据
    var tableHead = table.rows[0].cells;
    for (var i = 0; i < tableHead.length; i++) {
        var sortType ;
        tableHead[i].onclick = function(event) {
            var clickTarget = event.target;
            if (sortType == "asc")
                sortType = "desc";
            else
                sortType = "asc"
            //样式改变
            styleChange(table,clickTarget.cellIndex, sortType);
            //排序
            var sorted = colSort(tableData, clickTarget.cellIndex, sortType);
            //数据更新
            writeToTable(table, sorted);
        }
    }
}

//样式变更
function styleChange(table,cellIndex,sortType){
    if(sortType == "asc")
    {
        table.rows[0].cells[cellIndex].style.backgroundImage ="url('descend.png')" ;
        table.rows[0].cells[cellIndex].style.backgroundRepeat = "no-repeat";
        table.rows[0].cells[cellIndex].style.backgroundPosition = "right";
    }
    else{
        table.rows[0].cells[cellIndex].style.backgroundImage = "url('ascend.png')";
        table.rows[0].cells[cellIndex].style.backgroundRepeat = "no-repeat";
    }
}

//数据更新
function writeToTable(table, arr) {
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        for (var j = 0; j < cells.length; j++) {
            cells[j].innerText = arr[i - 1][j];
        }
    }
}

//按列排序
function colSort(array, celIndex, sorttype) {
 if (sorttype == "asc") {
    return array.sort(function(x, y) {
        return x[celIndex].localeCompare(y[celIndex]);
    });
}
else {
    return array.sort(function(x, y) {
        return y[celIndex].localeCompare(x[celIndex]);
    });
}
}
