"use strict";
let burgerIcon = document.getElementById("burgerIcon"), burgerIconSpans = Array.from(burgerIcon.children), overlayDiv = document.getElementById("overlay"), ulNavBar = document.getElementById("navBar"), ulNavBarChilderen = Array.from(ulNavBar.children);
if (window.innerWidth <= 770) {
    ulNavBar.setAttribute("style", `height:${document.body.clientHeight}px;`);
    overlayDiv.setAttribute("style", `height:${document.body.clientHeight}px;`);
    ulNavBarChilderen.forEach((li) => {
        li.onclick = openAndCloseNavBar;
    });
}
window.onresize = function () {
    if (window.innerWidth <= 770) {
        ulNavBar.setAttribute("style", `height:${document.body.clientHeight}px;`);
        overlayDiv.setAttribute("style", `height:${document.body.clientHeight}px;`);
        ulNavBarChilderen.forEach((li) => {
            li.onclick = openAndCloseNavBar;
        });
    }
    else {
        ulNavBar.setAttribute("style", `height:auto;`);
        ulNavBarChilderen.forEach((li) => {
            li.setAttribute("style", "pointer-events: none;");
        });
    }
};
burgerIcon.onclick = openAndCloseNavBar;
function openAndCloseNavBar() {
    burgerIconSpans.forEach(span => {
        span.classList.toggle("go-center");
    });
    burgerIconSpans[1].classList.toggle("noOpacity");
    burgerIconSpans[0].classList.toggle("FirstRotate");
    burgerIconSpans[2].classList.toggle("lastRotate");
    overlayDiv.classList.toggle("d-block");
    ulNavBar.classList.toggle("d-flex");
}
