var hamburgerBtn = document.getElementById('hamburgerMenuBtn');
var hamburgerSpan = document.getElementsByClassName('hamburgerSpan');
var mobileNavbar = document.getElementById('mobileNavbar');
var darkLayer = document.getElementById('darkLayer');

hamburgerBtn.addEventListener("click", function(){
    for (let i = 0; i < hamburgerSpan.length; i++) {
        hamburgerSpan[i].classList.toggle('hamburgerSpanAnimated');
    }

    mobileNavbar.classList.toggle('mobile-navbar-open');
    darkLayer.classList.toggle('dark-layer-opened');
});

darkLayer.addEventListener("click", function(){
    if(mobileNavbar.classList.contains('mobile-navbar-open')){
        mobileNavbar.classList.remove('mobile-navbar-open');
        darkLayer.classList.remove('dark-layer-opened');
        for (let i = 0; i < hamburgerSpan.length; i++) {
            if(hamburgerSpan[i].classList.contains('hamburgerSpanAnimated')){
                hamburgerSpan[i].classList.remove('hamburgerSpanAnimated');
            }
        }
    }
});