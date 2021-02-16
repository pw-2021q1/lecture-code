function askConfirmation() {
    alert("Are you sure?")
}

window.addEventListener("load", function () {
    document.getElementById("ok-button")
        .addEventListener("click", askConfirmation);
});