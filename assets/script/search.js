var searchBtn = document.getElementById('searchBar');
var searchArea = document.getElementById('searchResult');

searchBtn.addEventListener("focusin", function(){
    searchArea.classList.add("search-area-opened");
});

searchBtn.addEventListener("focusout", function (){
    searchArea.classList.remove("search-area-opened");
})