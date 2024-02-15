$(document).ready(function () {
    var searchBtn = $('#searchBar');
    var searchArea = $('#searchResult');

    searchBtn.addEventListener("focusin", function () {
        searchArea.classList.add("search-area-opened");
    });

    searchBtn.addEventListener("focusout", function () {
        searchArea.classList.remove("search-area-opened");
    })
})