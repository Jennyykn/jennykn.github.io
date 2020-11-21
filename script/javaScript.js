
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
    let infoTop = document.getElementById("navFix").offsetTop;

    if (window.pageYOffset >= stickyNavi) {
        navBar.classList.add("stickyNav");
    } 
    if (window.pageYOffset <= infoTop) {
        navBar.classList.remove("stickyNav");
    }
});


