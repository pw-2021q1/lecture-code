function loadCode(url: string) {
    fetch(url)
        .then((response: Response) => {
            if (response.ok) {
                return response.text()
            }
            throw new Error(response.status.toString())
        })
        .then(text => {
            const preNode = document.getElementById("code-block")

            if (preNode) {
                preNode.textContent = text
            }
        })
        .catch(reason => console.error("Failed to load code file"))

}

window.addEventListener("load", function () {
    const links = document.getElementsByClassName("code-link")

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev: Event) {
            const target = ev.target as HTMLAnchorElement
            const url = target.getAttribute("data-href") || ""

            loadCode(url)
        })
    }
})