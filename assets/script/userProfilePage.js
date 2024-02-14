var userProfileHeaderResponsive = $("#userProfileHeaderResponsive");
var userProfileHeader = $("#userProfileHeader")

userProfileHeaderResponsive.css("display", "flex")
.hide();

window.addEventListener("scroll", function(){

        if(this.document.documentElement.scrollTop <= 360){
            
            userProfileHeaderResponsive.slideUp('fast');
            userProfileHeader.css({
                visibility: 'visible'
            });
        }

        if(this.document.documentElement.scrollTop > 360){
            userProfileHeader.css({
                visibility: 'hidden'
            });
            userProfileHeaderResponsive.slideDown('fast');
        } 

});

