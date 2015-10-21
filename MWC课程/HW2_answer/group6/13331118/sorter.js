// in file sort.js
// creat by Junjie Li, 2014-10-26
// email: 287150625@qq.com

window.onload = function(){
    var tables = getAllTables();
    makeAllTableSortable(tables);
}

function getAllTables(){
    var tables = document.getElementsByTagName("table");
    return tables;
}

function makeAllTableSortable(tables){
    for (var i = 0; i < tables.length; i++) {

        // get the first row of each table which is the head
        var heads = tables[i].getElementsByTagName("tr")[0].children;
        for (var j = 0; j < heads.length; j++) {
            heads[j].classList.add("unsort");
            
            // add mySort event to all heads in the table head
            heads[j].addEventListener("click", mySort);
        }
    }

}

function mySort() {

    // store the class name of the head before sort
    var oldClassName;
    if (this.classList.contains("unsort")) {
        oldClassName = "unsort";
    }
    if (this.classList.contains("ascend")) {
        oldClassName = "ascend";
    }
    if (this.classList.contains("descend")) {
        oldClassName = "descend";
    }

    // change the class name to change style of all heads
    var heads = this.parentNode.children;
    for (var i = 0; i < heads.length; i++) {
        heads[i].classList.remove("ascend", "descend");
        heads[i].classList.add("unsort");
    }

    if (oldClassName === "unsort") {
        this.classList.add("ascend");
    }
    if (oldClassName === "ascend") {
        this.classList.add("descend");

    }
    if (oldClassName === "descend") {
        this.classList.add("ascend");
    }

    // sotre which colum the head is
    var current = this.parentNode;
    while (current.tagName !== "TABLE") {
        current = current.parentNode;
    }
    var rows = current.getElementsByTagName("tr");
    var index = this.cellIndex;

    // sort all the rows except the head, ascend by default
    for (var i = 0; i < rows.length-1; i++) {

        // j begin from 1 to ignore the head
        for (var j = 1; j < rows.length-1-i; j++) {

            // lexicographic sorting
            var result = rows[j].children[index].innerHTML.localeCompare(rows[j+1].children[index].innerHTML);

            // inverse the result in case of descend
            if (this.classList.contains("descend")) result = 0 - result;
            if (result > 0) {

                // switch two rows
                var tmp1 = rows[j+1].cloneNode(true);
                var tmp2 = rows[j].cloneNode(true);
                rows[j].parentNode.replaceChild(tmp1, rows[j]);
                rows[j].parentNode.replaceChild(tmp2, rows[j+1]);
            }
        }
    }

    // change the class name to change the style afeter sort
    for (var i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].classList.remove("alternate");
        }
        if (i % 2 === 0 && i !== 0) {
            rows[i].classList.add("alternate");
        }
    }
}
