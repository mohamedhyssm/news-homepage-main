let burgerIcon = document.getElementById("burgerIcon") as HTMLDivElement,
  burgerIconSpans: Element[] = Array.from(burgerIcon.children),
  overlayDiv = document.getElementById("overlay") as HTMLDivElement,
  ulNavBar = document.getElementById("navBar") as HTMLElement,
  ulNavBarChilderen: Element[] = Array.from(ulNavBar.children);

if (document.body.clientWidth <= 770) {
  ulNavBar.setAttribute("style", `height:${document.body.clientHeight}px;`);
  overlayDiv.setAttribute("style", `height:${document.body.clientHeight}px;`)
  ulNavBarChilderen.forEach( (li) => {
    (li as HTMLLIElement).onclick = function () {
      openAndCloseNavBar()
    }
  })
}

window.onresize = function () {
  if (document.body.clientWidth <= 770) {
    ulNavBar.setAttribute("style", `height:${document.body.clientHeight}px;`);
    ulNavBarChilderen.forEach( (li) => {
      (li as HTMLLIElement).onclick = function () {
        openAndCloseNavBar()
      }
    })
  } else {
    ulNavBar.setAttribute("style", `height:auto;`);
    ulNavBarChilderen.forEach( (li) => {
      (li as HTMLLIElement).setAttribute("style", "pointer-events: none;")
    })
  }
}

burgerIcon.onclick = openAndCloseNavBar;

function openAndCloseNavBar() {
  burgerIconSpans.forEach(span => {
    span.classList.toggle("go-center")
  });
  burgerIconSpans[1].classList.toggle("noOpacity");
  burgerIconSpans[0].classList.toggle("FirstRotate");
  burgerIconSpans[2].classList.toggle("lastRotate");
  overlayDiv.classList.toggle("block");
  ulNavBar.classList.toggle("block");
}