function loadCode(url: string) {
    // instantiate the XHR object
    const xhr = new XMLHttpRequest()

    // success callback
    xhr.onload = function () {
        const codeNode = document.getElementById("code-block")

        if (codeNode) {
            codeNode.textContent = xhr.responseText
        }
    }
    // error callback
    xhr.onerror = function () {
        console.error("Failed to load code file")
        alert("Failed to load file")
    }

    // open connection
    xhr.open("GET", url)
    // send data
    xhr.send()
}


function main() {
    const links = document.getElementsByClassName("code-link")

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev: Event) {
            const node = ev.target as HTMLAnchorElement
            const url = node.getAttribute("data-href") || ""

            loadCode(url)
        })
    }
}

window.addEventListener("load", main)