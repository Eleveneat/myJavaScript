window.onload = function() {
    // document.getElementsByTagName("th").addEventListener("click", makeAllTablesSortable, true);
    for (var i = 0; i < document.getElementsByTagName("th").length; ++i)
        document.getElementsByTagName("th")[i].onclick = makeAllTablesSortable();

}

function getAllTables() {
    var table = [];
    table.push(document.getElementById("todo"));
    table.push(document.getElementById("staff"));
    var x = document.getElementsByClassName("alternate");
    x[0].style.backgroundColor = "rgb(160,160,160)";
    x[1].style.backgroundColor = "rgb(160,160,160)";
    for (var u = 0; u < table.length; u++) {
        var temp = table[u].getElementsByTagName("tbody");
        var arr1 = temp[0].getElementsByTagName("tr")
        for (var j = 0; j < arr1.length; j++) {
            y = arr1[j].getElementsByTagName("td");
            for (var i = 0; i < y.length; i++) {
                y[i].style.border = "1px rgb(88,88,88) solid";
            }
        }
    }
    return table;
}
var count = [];
for (var i = 0; i < 6; i++)
count[i] = 1;
function makeAllTablesSortable() {
    var arr = getAllTables();
    var thead = [],
        tbody = [], temp1, temp3, temp4, va, temp5, v, g, temp, str = [], td = [], td1 = [], tr = [], th = [], th1 = [], tr1 = [], t, t1;

        td1 = document.getElementsByTagName("td");
        th1 = document.getElementsByTagName("th");

        for (g = 0; g < th1.length; g++)
            th[g] = th1[g].innerHTML;

        for (v = 0; v < td1.length; td++)
            td[0] = td1[v].innerHTML;

            if (i >= 0 && i <= 5) {
                temp1 = i;
                for (va = 0; va < 3; va++) {
                    if (temp1 > 3)
                        t = temp1 + 6;
                    else
                        t = temp1
                    str[va] = td[t + 3 * va];
                }
                if (count[temp1 - 1] == 1) {
                    th1[temp1].style.backgroundImage = "url('ascend.png')";
                    count[temp1 - 1] = 0;
                    str.sort();
                } else {
                    th1[i].style.backgroundImage = "url('descend.png')";
                    str.reverse();
                }
                th1[temp1].style.backgroundPosition = "bottom right";
                th1[temp1].style.backgroundColor = "#6699FF";
                 for (temp3 = 0; temp3 < str.length; temp3++) {
                    for (temp4 = 0; temp4 < str.length; temp4++) {
                        if (temp1 > 3)
                            t1 = temp1 + 6;
                        else
                            t1 = temp1;
                        if (str[temp3] == td[3 * temp4 + t1]) {
                            for (temp5 = 0; temp5 < str.length; temp5++) {
                                var str1 = td[3 * temp4 + t1].innerHTML;
                                td1[t1 + 3 * temp1 ].innerHTML = td1[t1].innerHTML;
                                td1[t1].innerHTML = str1;

                                str1 = td[3 * temp4 + t1 + 1].innerHTML;
                                td1[t1 + 3 * temp1 + 1].innerHTML = td1[t1 + 1].innerHTML;
                                td1[t1 + 1].innerHTML = str1;

                                str1 = td[3 * temp4 + t1 + 2].innerHTML;
                                td1[t1 + 3 * temp1 + 2].innerHTML = td1[t1].innerHTML;
                                td1[t1 + 2].innerHTML = str1;
                                
                            }
                        }
                    }
                }
            }
        }
