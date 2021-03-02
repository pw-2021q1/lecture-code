"use strict";
function loadCode(url) {
    fetch(url)
        .then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw new Error(response.status.toString());
    })
        .then(function (text) {
        var preNode = document.getElementById("code-block");
        if (preNode) {
            preNode.textContent = text;
        }
    })
        .catch(function (reason) { return console.error("Failed to load code file"); });
}
window.addEventListener("load", function () {
    var links = document.getElementsByClassName("code-link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev) {
            var target = ev.target;
            var url = target.getAttribute("data-href") || "";
            loadCode(url);
        });
    }
});
