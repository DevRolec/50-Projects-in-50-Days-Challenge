
// SELECT HTML ELEMENTS

const ageForm = document.getElementById("ageForm");
const ageInput = document.getElementById("age");
const result = document.getElementById("result");


// FUNCTION TO VERIFY AGE

function verifyAge(age) {

    if (!Number.isInteger(age) || age < 0 || age > 120) {
        return "Please enter a valid age.";
    }

    else if (age >= 18) {
        return "Access Granted! You are an adult.";
    }

    else {
        return "Access Denied! You must be 18 or older.";
    }
}


// HANDLE FORM SUBMISSION

ageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const age = Number(ageInput.value);

    // Check for empty input
    if (ageInput.value.trim() === "") {
        result.textContent = "Please enter your age.";
        result.style.color = "orange";
        return;
    }

    const message = verifyAge(age);

    result.textContent = message;

    if (Number.isInteger(age) && age >= 18 && age <= 120) {
        result.style.color = "green";
    }

    else {
        result.style.color = "red";
    }

});
