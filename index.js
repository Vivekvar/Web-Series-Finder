var input = document.getElementById("input-text");
var mainContentIndian = document.getElementById("all-data-indian");
var seriesNameIndian = mainContentIndian.getElementsByTagName('p');
var mainContentOther = document.getElementById("all-data-other")
var seriesNameOther = mainContentOther.getElementsByTagName('p');

function getParent(ele, parentClass = "web-series") {
    var e = ele;
    while (!e.classList.contains(parentClass)) {
        e = e.parentElement;
    }
    return e;
}

function search() {
    var toSearch = input.value.toUpperCase();

    for (var i = 0; i < seriesNameIndian.length; i++) {
        var currentSeries = seriesNameIndian[i].innerText;
        var currentAccordian = getParent(seriesNameIndian[i]);
        if (currentSeries.toUpperCase().indexOf(toSearch) > -1) {
            currentAccordian.style.display = "block";
        } else {
            currentAccordian.style.display = "none";
        }
    }

    for (var i = 0; i < seriesNameOther.length; i++) {
        var currentSeries = seriesNameOther[i].innerText;
        var currentAccordian = getParent(seriesNameOther[i]);
        if (currentSeries.toUpperCase().indexOf(toSearch) > -1) {
            currentAccordian.style.display = "block";
        } else {
            currentAccordian.style.display = "none";
        }
    }
}