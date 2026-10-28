
const gradeForm = document.getElementById("gradeForm");
const result = document.getElementById("result");

gradeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document
        .getElementById("studentName")
        .value.trim();

    const scoreInputs = [
        document.getElementById("score1"),
        document.getElementById("score2"),
        document.getElementById("score3")
    ];

    const scores = scoreInputs.map(function(input) {
        return Number(input.value);
    });

    const validScores = scoreInputs.every(function(input) {
        return input.value.trim() !== "";
    }) && scores.every(function(score) {
        return Number.isFinite(score) &&
               score >= 0 &&
               score <= 100;
    });

    if (name === "" || !validScores) {
        result.textContent = "Please enter valid details.";
        return;
    }

    const total = scores[0] + scores[1] + scores[2];

    const average = total / 3;

    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    result.textContent =
        `${name}: Average ${average.toFixed(2)} — Grade ${grade}`;

});
