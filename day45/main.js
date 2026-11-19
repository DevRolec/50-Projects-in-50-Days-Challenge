const boxes = document.querySelectorAll(".box");

function makeBlack() {
    boxes.forEach(box => {
        box.classList.add("black");
    });
}

function restoreColors() {
    boxes.forEach(box => {
        box.classList.remove("black");
    });
}