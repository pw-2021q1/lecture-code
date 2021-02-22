
type NullableHTMLElement = HTMLElement | null

let dieImage1: NullableHTMLElement
let dieImage2: NullableHTMLElement
let dieImage3: NullableHTMLElement
let dieImage4: NullableHTMLElement

function start() {
    document.getElementById("rollButton")?.addEventListener("click", rollDice)
    dieImage1 = document.getElementById("die1")
    dieImage2 = document.getElementById("die2")
    dieImage3 = document.getElementById("die3")
    dieImage4 = document.getElementById("die4")
}

function rollDice() {
    setImage(dieImage1)
    setImage(dieImage2)
    setImage(dieImage3)
    setImage(dieImage4)
}

function setImage(dieImage: NullableHTMLElement) {
    let dieValue = Math.floor(Math.random() * 6 + 1)

    dieImage?.setAttribute("src", `img/die${dieValue}.png`)
    dieImage?.setAttribute("alt", `die image with ${dieValue} spot(s)`)
}

window.addEventListener("load", start)