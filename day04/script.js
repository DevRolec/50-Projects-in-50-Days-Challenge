const screen = document.getElementById("screen");

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        if (screen.value === "") {
            return;
        }

        let result = eval(screen.value);

        screen.value = result;
    } catch (error) {
        screen.value = "Error";
    }
}