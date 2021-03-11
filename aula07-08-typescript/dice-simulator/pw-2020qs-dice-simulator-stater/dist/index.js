"use strict";
var dieImage1;
var dieImage2;
var dieImage3;
var dieImage4;
function start() {
    var _a;
    (_a = document.getElementById("rollButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", rollDice);
    dieImage1 = document.getElementById("die1");
    dieImage2 = document.getElementById("die2");
    dieImage3 = document.getElementById("die3");
    dieImage4 = document.getElementById("die4");
}
function rollDice() {
    setImage(dieImage1);
    setImage(dieImage2);
    setImage(dieImage3);
    setImage(dieImage4);
}
function setImage(dieImage) {
    var dieValue = Math.floor(Math.random() * 6 + 1);
    dieImage === null || dieImage === void 0 ? void 0 : dieImage.setAttribute("src", "img/die" + dieValue + ".png");
    dieImage === null || dieImage === void 0 ? void 0 : dieImage.setAttribute("alt", "die image with " + dieValue + " spot(s)");
}
window.addEventListener("load", start);
