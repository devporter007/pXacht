$(document).ready(function () {
    addEventListenerForCheckboxTogglePasswordVisibility()
});

function addEventListenerForCheckboxTogglePasswordVisibility() {
    var checkbox = document.getElementById("bod");
    if (checkbox !== null) {
        checkbox.addEventListener('click', f);
    }
}

function f(){
    alert("JS LOADED");
}