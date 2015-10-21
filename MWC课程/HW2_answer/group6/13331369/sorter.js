window.onload = function() {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}

function getAllTables() {
    var table = document.getElementsByTagName("table");
    return table;
}

function makeAllTablesSortable(table) {

    th = document.getElementsByTagName("th");

    th[0].onclick = function() {
        sortTable(0);
    }
    th[1].onclick = function() {
        sortTable(1);
    }
    th[2].onclick = function() {
        sortTable(2);
    }
    th[3].onclick = function() {
        sortTable(3);
    }
    th[4].onclick = function() {
        sortTable(4);
    }
    th[5].onclick = function() {
        sortTable(5);
    }
}

//get which order i can do
var count = [1, 1, 1, 1, 1, 1],
    mem = -1;

function sortTable(col) {

    var thead = [],
        tbody = [],
        temp1, temp3, temp4, va, temp5;
    var v, g, temp, str = [],
        str2 = [],
        td = [],
        td1 = [],
        tr = [],
        th = [],
        th1 = [],
        tr1 = [],
        t, t1;

    td1 = document.getElementsByTagName("td");
    th1 = document.getElementsByTagName("th");
    for (g = 0; g < th1.length; g++)
        th[g] = th1[g].innerHTML;


    for (v = 0; v < td1.length; v++)
        td[v] = td1[v].innerHTML;

    temp1 = col;

    for (va = 0; va < 3; va++) {
        if (temp1 >= 3)
            t = temp1 + 6;
        else
            t = temp1
        str[va] = td[t + 3 * va];
    }

    if (count[temp1] == 1) {
        th1[temp1].style.background = "no-repeat right url('ascend.png')";
        count[temp1] = 0;
        str.sort();
    } else {
        th1[temp1].style.background = "no-repeat right url('descend.png')";
        count[temp1] = 1;
        str.reverse();
    }

    th1[temp1].style.backgroundPosition = "bottom right";
    th1[temp1].style.backgroundColor = "#6699FF";

    if (mem != -1 && mem != temp1)
        th1[mem].style.background = "blue";
    mem = temp1;

    for (temp3 = 0; temp3 < str.length; temp3++) {
        for (temp4 = 0; temp4 < 3; temp4++) {
            if (temp1 >= 3)
                t1 = temp1 + 6;
            else
                t1 = temp1;
            if (str[temp3] == td1[3 * temp4 + t1].innerHTML) {
                var temp7 = 3 * temp3 + t1 - t1 % 3;
                var temp8 = 3 * temp4 + t1 - t1 % 3;

                var str1 = td1[temp8].innerHTML;
                td1[temp8].innerHTML = td1[temp7].innerHTML;
                td1[temp7].innerHTML = str1;

                str1 = td1[temp8 + 1].innerHTML;
                td1[temp8 + 1].innerHTML = td1[temp7 + 1].innerHTML;
                td1[temp7 + 1].innerHTML = str1;

                str1 = td1[temp8 + 2].innerHTML;
                td1[temp8 + 2].innerHTML = td1[temp7 + 2].innerHTML;
                td1[temp7 + 2].innerHTML = str1;
            }
        }
    }
}