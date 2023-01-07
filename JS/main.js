var burgerIcon = document.getElementById("burgerIcon"), burgerIconSpans = Array.from(burgerIcon.children), overlayDiv = document.getElementById("overlay"), ulNavBar = document.getElementById("navBar"), ulNavBarChilderen = Array.from(ulNavBar.children);
if (document.body.clientWidth <= 770) {
    ulNavBar.setAttribute("style", "height:".concat(document.body.clientHeight, "px;"));
    overlayDiv.setAttribute("style", "height:".concat(document.body.clientHeight, "px;"));
    ulNavBarChilderen.forEach(function (li) {
        li.onclick = function () {
            openAndCloseNavBar();
        };
    });
}
window.onresize = function () {
    if (document.body.clientWidth <= 770) {
        ulNavBar.setAttribute("style", "height:".concat(document.body.clientHeight, "px;"));
        ulNavBarChilderen.forEach(function (li) {
            li.onclick = function () {
                openAndCloseNavBar();
            };
        });
    }
    else {
        ulNavBar.setAttribute("style", "height:auto;");
        ulNavBarChilderen.forEach(function (li) {
            li.setAttribute("style", "pointer-events: none;");
        });
    }
};
burgerIcon.onclick = openAndCloseNavBar;
function openAndCloseNavBar() {
    burgerIconSpans.forEach(function (span) {
        span.classList.toggle("go-center");
    });
    burgerIconSpans[1].classList.toggle("noOpacity");
    burgerIconSpans[0].classList.toggle("FirstRotate");
    burgerIconSpans[2].classList.toggle("lastRotate");
    overlayDiv.classList.toggle("block");
    ulNavBar.classList.toggle("block");
}
