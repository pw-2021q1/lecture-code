"use strict";
async function loadCode(url) {
    const response = await fetch(url);
    if (response.ok) {
        const content = await response.text();
        const codeNode = document.getElementById("code-block");
        if (codeNode) {
            codeNode.textContent = content;
        }
    }
    else {
        throw new Error(response.status.toString());
    }
}
window.addEventListener("load", function () {
    const links = document.getElementsByClassName("code-link");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev) {
            const target = ev.target;
            const url = target.getAttribute("data-href") || "";
            loadCode(url);
        });
    }
});
