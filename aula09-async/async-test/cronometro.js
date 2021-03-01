"use strict"

let timeElapsed = 0
let timerId = 0

function formatTime(time) {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(time % 3600 / 60)
    const seconds = time % 60

    return `${hours}:${minutes}:${seconds}`
}

function setUpTimer() {
    const timerText = document.getElementById("time-elapsed")

    document.getElementById("start-pause").addEventListener("click", function () {
        if (timerId > 0) {
            clearInterval(timerId)
            timerId = 0
        } else {
            timerId = setInterval(function () {
                timeElapsed++

                timerText.textContent = formatTime(timeElapsed)
            }, 1000)
        }
    })

    // document.getElementById("reset").addEventListener("click", function () {
    //     alert("You blocked the thread")
    // })
}

window.onload = setUpTimer


/**
 * Exercicios
 * 
 * 1. Implemente a funcao do reset button
 * 2. Formatar os numeros apropriadamente (00:00:00)
 * 3. Usar o clock do sistema ao invés de um contador, para melhorar a precisao
 *    da contagem de tempo
 */