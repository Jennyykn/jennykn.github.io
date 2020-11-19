
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

window.addEventListener("scroll", function () {
    let navBar = document.getElementById("navBar");
    
    let stickyNavi = navBar.offsetTop;

    if (window.pageYOffset >= stickyNavi) {
        navBar.classList.add("stickyNav");
    } 
    if (window.pageYOffset <= stickyNavi) {
        navBar.classList.remove("stickyNav");
    }
});

