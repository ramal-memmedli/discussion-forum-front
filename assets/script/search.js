var searchBtn = document.getElementById('searchBar');
var searchArea = document.getElementById('searchResult');

searchBtn.addEventListener("focus", function(){
    searchArea.classList.toggle("search-area-opened");
});