let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMorelinks");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show Less <b>-</b>";
    }else{
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}