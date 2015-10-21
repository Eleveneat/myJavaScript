
/*
功能都已经实现，个人觉得完成的挺好，暂时没有什么建议。
*/
/*
FileName: sorter.js;
Author: linyiting;
For MWC Homework2
改进：
    （1） 对表格的排序状态，使用了更加有效的记录方法；
    （2） 对排序算法进行了简化；
    （3） 优化了代码结构，由于使用了更加有效的方法，代码量有大大减少.
*/

window.onload = function() {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}

function getAllTables() {
    var aTables = document.getElementsByTagName('table');
    return aTables;
}

function makeAllTablesSortable(aTables) {

    for (var i = 0; i < aTables.length; i++)
        sortTable(aTables[i]);

}

function sortTable(oTable) {

    var aTh = oTable.getElementsByTagName('th');

    for (var i = 0; i < aTh.length; i++) {

        aTh[i].onclick = function () {

            for (var j = 0; j < aTh.length; j++) {
               //oTable的第i个th的点击后，获取该th的索引值index
                if (this == aTh[j]) {
                    var index = j;
                    var aRows = [];
                    //获取该table的tbody所有的行,将其存储在aRows[]中
                    for(var count = 0; count < oTable.tBodies[0].rows.length; count++)
                        aRows[count] = oTable.tBodies[0].rows[count];

                    //对aRows[]数组进行排序，使用数组的sort方法
                    aRows.sort(function(row1, row2) {
                        var str1 = row1.cells[index].innerHTML;
                        var str2 = row2.cells[index].innerHTML;
                        var current = aTh[index].className;

                        if (current == '' || current == 'descend.png') {
                            return str1.localeCompare(str2);
                        } else {
                            return str2.localeCompare(str1);
                        }
                    });

                    //将aRows[]的添加为oTable.tBodies[0]子节点，添加时会自动将原有节点删除
                    for(var count = 0; count < aRows.length; count++)
                        oTable.tBodies[0].appendChild(aRows[count]);

                    //设置oTable第index列列头的外观
                    setThstyle(oTable, index);
                }
            }
        }
    }
}

//改变oTable第index列列头的外观
function setThstyle(oTable, index) {

    var aTh = oTable.getElementsByTagName('th');
    for (var i = 0; i < aTh.length; i++) {
        if (i == index) {
            if (aTh[i].className == '' || aTh[i].className == 'descend-style')
                aTh[index].className = 'ascend-style';
            else
                aTh[index].className = 'descend-style';
        } else {
            aTh[i].className = '';
        }
    }

}
