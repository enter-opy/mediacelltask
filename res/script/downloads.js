function downloadState() {
    var checkbox = document.getElementById("checkbox");
    var link0 = document.getElementById("link0");
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");

    if (checkbox.checked) {
        link0.style.pointerEvents = "auto";
        link1.style.pointerEvents = "auto";
        link2.style.pointerEvents = "auto";
        link3.style.pointerEvents = "auto";
        link4.style.pointerEvents = "auto";
    } else {
        link0.style.pointerEvents = "none";
        link1.style.pointerEvents = "none";
        link2.style.pointerEvents = "none";
        link3.style.pointerEvents = "none";
        link4.style.pointerEvents = "none";
    }
}