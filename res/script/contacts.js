function submitState() {
    var checkbox = document.getElementById("checkbox");
    var submit = document.getElementById("submit");

    if (checkbox.checked) {
        submit.style.pointerEvents = "auto";
    } else {
        submit.style.pointerEvents = "none";
    }
}

function message() {
    var checkbox = document.getElementById("checkbox");

    if (checkbox.checked) {
        alert("Message submitted")
    }
}