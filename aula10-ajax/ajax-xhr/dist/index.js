"use strict";
function loadCode(url) {
    // instantiate the XHR object
    var xhr = new XMLHttpRequest();
    // success callback
    xhr.onload = function () {
        var codeNode = document.getElementById("code-block");
        if (codeNode) {
            codeNode.textContent = xhr.responseText;
        }
    };
    // error callback
    xhr.onerror = function () {
        console.error("Failed to load code file");
        alert("Failed to load file");
    };
    // open connection
    xhr.open("GET", url);
    // send data
    xhr.send();
}
function main() {
    var links = document.getElementsByClassName("code-link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev) {
            var node = ev.target;
            var url = node.getAttribute("data-href") || "";
            loadCode(url);
        });
    }
}
window.addEventListener("load", main);
