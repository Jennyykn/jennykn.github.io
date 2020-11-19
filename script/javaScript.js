window.onscroll = function() {scrollPage()};

function scrollPage() {
    let navBar = document.getElementById("navBar");


    let stickyNavi = navBar.offsetTop;


    if (window.pageYOffset >= stickyNavi) {
        navBar.classList.add("stickyNav");
    } 
    if (window.pageYOffset <= stickyNavi) {
        navBar.classList.remove("stickyNav");
    }
}

