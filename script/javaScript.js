
function navFunc() {
    let navBar = document.getElementById("navBar");
    let personInfo = document.getElementById("personalInfo");
    let favBooks = document.getElementById("favBooks");
    let haiku = document.getElementById("haiku");
    let interests = document.getElementById("interests");
    let schedule = document.getElementById("schedule");
    
    if (!navBar.classList.contains("stickyNav")) {
        personInfo.style.cssText = "padding-top: 100px; margin-top: -100px";
        favBooks.style.cssText = "padding-top: 100px; margin-top: -100px";
        haiku.style.cssText = "padding-top: 100px; margin-top: -100px";
        interests.style.cssText = "padding-top: 100px; margin-top: -100px";
        schedule.style.cssText = "padding-top: 100px; margin-top: -100px";
    
    } else {
        personInfo.style.cssText = "padding-top: 40px; margin-top: -40px";
        favBooks.style.cssText = "padding-top: 40px; margin-top: -40px";
        haiku.style.cssText = "padding-top: 40px; margin-top: -40px";
        interests.style.cssText = "padding-top: 40px; margin-top: -40px";
        schedule.style.cssText = "padding-top: 40px; margin-top: -40px";
    }
}

function modalView() {
    let modalMode = document.getElementById("viewPic");
    let image = document.getElementById("topPic");
    let modalCont = document.getElementById("modalCont");
    modalMode.style.display = "block";
    modalCont.src = image.src;
}

function closeClick() {
    document.getElementById("viewPic").style.display = "none";
}

window.onclick = function(x) {
    let modalMode = document.getElementById("viewPic");
    
    if(x.target == modalMode) {
        modalMode.style.display = "none";
    }
}

window.addEventListener("scroll", function () {
    let navBar = document.getElementById("navBar");
    let stickyNavi = navBar.offsetTop;
    let infoTop = document.getElementById("personalInfo").offsetTop;

    if (window.pageYOffset >= stickyNavi) {
        navBar.classList.add("stickyNav");
    } 
    if (window.pageYOffset <= infoTop) {
        navBar.classList.remove("stickyNav");
    }
});


