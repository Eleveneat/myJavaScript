/*
作业所要求的功能还没全部完成，只完成了排序，表头颜色和图标的更改还没实现，而且
点击排序的时候，没能做到奇数行保持白色，偶数行保持浅灰色，但程序优点是模块划分
清晰，且有一定的注释
*/
window.onload = function() {
  var tables = getAllTables();
  makeAllTablesSortable(tables);
}  // 总的入口；


 function getAllTables() {  //获得表
  var tabless = document.getElementsByTagName('table');
  return tabless;
 }

function makeAllTablesSortable(table) {  //对表进行操作；
	var thread1 = document.getElementById('todo');
	var thread2 = document.getElementById('staff');
	/*var tr1 = thread1[0];*/
	var th1 = thread1.getElementsByTagName('th');
	var th2 = thread2.getElementsByTagName('th');
	var button1 = th1[0];
	var button2 = th1[1];
	var button3 = th1[2];
	var button4 = th2[0];
	var button5 = th2[1];
	var button6 = th2[2];

    button1.onclick = function() {
      sortTable('todo', 0, 'date');
    }
    button2.onclick = function() {
    	sortTable('todo', 1, 'date');
    }
    button3.onclick = function() {
      sortTable('todo', 2, 'date');
    }
    button4.onclick = function() {
    	sortTable('staff', 0, 'date');
    }
    button5.onclick = function() {
    	sortTable('staff', 1, 'date');
    }
    button6.onclick = function() {
    	sortTable('staff', 2, 'date');
    }
}

function sortTable(sTableId, iCol, sDataType) {
    var oTable = document.getElementById(sTableId);
    var oTBody = oTable.tBodies[0];
    var colRows = oTBody.rows;
    var aTRs = new Array();      //这里的操作是为了取得数据 
    for(var i = 0; i < colRows .length; i++)
    {
         aTRs[i] = colRows[i];     //将tr依次放入数组中;
    }
   if(oTable.sortCol == iCol) {
         aTRs.reverse();
    }
    else {
         aTRs.sort(getSortFunction(iCol, sDataType));     //排序,确定排序顺序。
    }

   
    var oFragement = document.createDocumentFragment();
    for(var i = 0; i < aTRs.length; i++)
    {
         oFragement.appendChild(aTRs[i]);
    }
    oTBody.appendChild(oFragement);    //进行修改
    oTable.sortCol = iCol;   //记住当前列,这个可以用来判断是对数组进行反向排序还是重新按列排;
}


function getSortFunction(iCol, sDataType)  //进行比较 
{
    return function compareTRs(oTR1, oTR2){
       var vValue1, vValue2;
       if(oTR1.cells[iCol].getAttribute("value"))
       {
            vValue1 = convert(oTR1.cells[iCol].getAttribute("value"), sDataType);
            vValue2 = convert(oTR2.cells[iCol].getAttribute("value"), sDataType);
       }
       else
       {
            vValue1 = convert(oTR1.cells[iCol].firstChild.nodeValue, sDataType)
            vValue2 = convert(oTR2.cells[iCol].firstChild.nodeValue, sDataType)
       }
       if(vValue1 < vValue2)
       {
            return -1;
       }
       else if(vValue1 > vValue2)
       {
            return 1;
       }
       else
       {
            return 0;
       }
    }
}
function convert(sValue, sDataType)   //确定类型。其实对于这个作业可省的，因为全部都是date;
{
    switch(sDataType)
    {
          case "int":
             return parseInt(sValue);
          case "float":
             return parseFloat(sValue);
          case "date":
             return new Date(Date.parse(sValue));
          default:
             return sValue.toString();
    } 
}
