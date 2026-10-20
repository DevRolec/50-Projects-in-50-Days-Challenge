
// SELECT HTML ELEMENTS

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

const statusText = document.getElementById("status");
const lapList = document.getElementById("lapList");
const lapCount = document.getElementById("lapCount");
const emptyMessage = document.getElementById("emptyMessage");


// STOPWATCH VARIABLES

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

let laps = [];


// FORMAT TIME

function formatTime(milliseconds) {

    const hours = Math.floor(milliseconds / 3600000);

    const minutes = Math.floor(
        (milliseconds % 3600000) / 60000
    );

    const seconds = Math.floor(
        (milliseconds % 60000) / 1000
    );

    const centiseconds = Math.floor(
        (milliseconds % 1000) / 10
    );

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const cs = String(centiseconds).padStart(2, "0");

    return `${hh}:${mm}:${ss}.${cs}`;
}


// GET CURRENT ELAPSED TIME

function getElapsedTime() {

    if (isRunning) {
        return elapsedTime + (performance.now() - startTime);
    }

    return elapsedTime;
}


// UPDATE STOPWATCH DISPLAY

function updateDisplay() {

    display.textContent = formatTime(getElapsedTime());
}


// START STOPWATCH

function startStopwatch() {

    if (isRunning) {
        return;
    }

    startTime = performance.now();

    isRunning = true;

    timerInterval = setInterval(updateDisplay, 10);

    startBtn.textContent = "Pause";
    lapBtn.disabled = false;
    statusText.textContent = "Stopwatch running...";

    updateDisplay();
}


// PAUSE STOPWATCH

function pauseStopwatch() {

    if (!isRunning) {
        return;
    }

    elapsedTime = getElapsedTime();

    isRunning = false;

    clearInterval(timerInterval);
    timerInterval = null;

    startBtn.textContent = "Resume";
    lapBtn.disabled = true;
    statusText.textContent = "Stopwatch paused";

    updateDisplay();
}


// RESET STOPWATCH

function resetStopwatch() {

    clearInterval(timerInterval);

    timerInterval = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    laps = [];

    display.textContent = "00:00:00.00";

    startBtn.textContent = "Start";
    lapBtn.disabled = true;

    statusText.textContent = "Ready";

    lapList.innerHTML = "";
    lapCount.textContent = "0 laps";
    emptyMessage.hidden = false;
}


// RECORD LAP TIME

function recordLap() {

    if (!isRunning) {
        return;
    }

    const currentTime = getElapsedTime();

    const lap = {
        number: laps.length + 1,
        time: currentTime
    };

    laps.push(lap);

    displayLaps();
}


// DISPLAY LAP HISTORY

function displayLaps() {

    lapList.innerHTML = "";

    // Show newest lap first
    const reversedLaps = [...laps].reverse();

    reversedLaps.forEach(function(lap) {

        const listItem = document.createElement("li");
        listItem.className = "lap-item";

        const lapNumber = document.createElement("span");
        lapNumber.className = "lap-number";
        lapNumber.textContent = `Lap ${lap.number}`;

        const lapTime = document.createElement("span");
        lapTime.className = "lap-time";
        lapTime.textContent = formatTime(lap.time);

        listItem.appendChild(lapNumber);
        listItem.appendChild(lapTime);

        lapList.appendChild(listItem);

    });

    lapCount.textContent =
        `${laps.length} ${laps.length === 1 ? "lap" : "laps"}`;

    emptyMessage.hidden = laps.length > 0;
}


// BUTTON EVENT LISTENERS

startBtn.addEventListener("click", function() {

    if (isRunning) {
        pauseStopwatch();
    } else {
        startStopwatch();
    }

});

lapBtn.addEventListener("click", recordLap);

resetBtn.addEventListener("click", resetStopwatch);
