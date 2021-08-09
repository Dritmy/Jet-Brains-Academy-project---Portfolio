let windowPopUp = document.querySelector(".window");
let btn = document.querySelector(".open-window");
let btnClose = document.querySelector(".close-window");
let windowPopUp1 = document.querySelector(".window1");
let btn1 = document.querySelector(".open-window1");
let btnClose1 = document.querySelector(".close-window1");
let menuBtn = document.querySelector(".menu-btn");
let hmb = document.querySelector(".hamburger");
let clsMenu = document.querySelector(".close-menu");

btn.onclick = function() {
  windowPopUp.style.display = "block";
}

btnClose.onclick = function() {
    windowPopUp.style.display = "none";
}

btn1.onclick = function() {
    windowPopUp1.style.display = "block";
}

btnClose1.onclick = function() {
    windowPopUp1.style.display = "none";
}

menuBtn.onclick = function () {
    hmb.style.display = "block";
    menuBtn.style.display = "none";
    clsMenu.style.display = "block";

}

clsMenu.onclick = function () {
    hmb.style.display = "none";
    clsMenu.style.display = "none";
    menuBtn.style.display = "block";
}
