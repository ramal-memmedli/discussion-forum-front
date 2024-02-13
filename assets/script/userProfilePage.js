var userProfileHeader = document.getElementById("userProfileHeader");

window.addEventListener("scroll", function(){
    if(userProfileHeader.classList.contains("resposive-user-profile-header")){
        if(this.document.documentElement.scrollTop <= 100){
            userProfileHeader.classList.remove("resposive-user-profile-header")
            console.log("cixarildi")
        }
    }else {
        if(this.document.documentElement.scrollTop > 100){
            userProfileHeader.classList.add("resposive-user-profile-header")
            console.log("elave olundu")
        } 
    }
});