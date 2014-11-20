window.onload = function() {
    var tables = getAllTables();
    makeAllTablesSortable(tables);
}

function getAllTables() {
    return document.getElementsByTagName("table");
}

function makeAllTablesSortable(tables) {
    for (var i = 0; i < tables.length; i++) {
        var ths = tables[i].getElementsByTagName("th");
        for (var j = 0; j < ths.length; j++) {
            ths[j].addEventListener("click", mySort);
        }
    }
}

function mySort() {
    var Itable, Icol;
    var ths = this.parentNode.children;
    for (var i = 0; i < ths.length; i++) {
        if (this == ths[i]) {
            Icol = i;
        }
    }
    var Itable = this.parentNode.parentNode.parentNode;
    sortTable(Itable, Icol);
    titleBackground(Itable, Icol);
}

function sortTable(Itable, Icol) {
    var tbody = Itable.tBodies[0];
    var tr = tbody.rows;

    var trValue = new Array();
    for (var i=0; i<tr.length; i++ ) {
        trValue[i] = tr[i];
    }

    if (tbody.sortCol == Icol) {
        trValue.reverse();
    } else {
        trValue.sort(function(tr1, tr2) {
            var value1 = tr1.cells[Icol].innerHTML;
            var value2 = tr2.cells[Icol].innerHTML;
            return value1.localeCompare(value2);
        });
    }  
    var fragment = document.createDocumentFragment();
    for (var i=0; i<trValue.length; i++ ) {
        fragment.appendChild(trValue[i]);
        if (i%2 == 1) {
            trValue[i].className = "alternate";
        } else {
            trValue[i].className = "";
        }
    }
    tbody.appendChild(fragment);
    tbody.sortCol = Icol;
}

function titleBackground(Itable, Icol) {
    var ths = Itable.getElementsByTagName("th");
    for (var i = 0; i < ths.length; i++) {
        if (i == Icol) {
            if (ths[i].id == ""||ths[i].id == "downSort") {
                ths[i].id = "upSort";
            } else if (ths[i].id == "upSort") {
                ths[i].id = "downSort";
            }
        } else {
            ths[i].id = "";
        }
    }
}
