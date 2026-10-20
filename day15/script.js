
// SELECT HTML ELEMENTS

const bmiForm = document.getElementById("bmiForm");

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const resultSection = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const bmiMessage = document.getElementById("bmiMessage");
const errorMessage = document.getElementById("errorMessage");

// CALCULATE BMI

function calculateBMI(weight, heightCm) {
    const heightMeters = heightCm / 100;

    return weight / (heightMeters ** 2);
}

// DETERMINE ADULT BMI CATEGORY

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return {
            name: "Underweight",
            className: "underweight",
            message: "Your BMI is below the standard adult healthy-weight range."
        };
    }

    if (bmi < 25) {
        return {
            name: "Healthy weight",
            className: "healthy",
            message: "Your BMI is within the standard adult healthy-weight range."
        };
    }

    if (bmi < 30) {
        return {
            name: "Overweight",
            className: "overweight",
            message: "Your BMI is above the standard adult healthy-weight range."
        };
    }

    return {
        name: "Obesity",
        className: "obesity",
        message: "Your BMI is within the adult obesity screening range."
    };
}

// HANDLE FORM SUBMISSION

bmiForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    errorMessage.textContent = "";

    // VALIDATE INPUTS

    if (
        !weightInput.value ||
        !heightInput.value ||
        !Number.isFinite(weight) ||
        !Number.isFinite(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        errorMessage.textContent =
            "Please enter valid weight and height values.";

        resultSection.hidden = true;
        return;
    }

    // PERFORM CALCULATION

    const bmi = calculateBMI(weight, height);

    if (!Number.isFinite(bmi)) {
        errorMessage.textContent =
            "Unable to calculate BMI. Check your inputs.";

        resultSection.hidden = true;
        return;
    }

    const category = getBMICategory(bmi);

    // DISPLAY RESULTS

    bmiValue.textContent = bmi.toFixed(1);

    bmiCategory.textContent = category.name;

    bmiCategory.className = category.className;

    bmiMessage.textContent = category.message;

    resultSection.hidden = false;
});

// RESET FORM AND RESULTS

bmiForm.addEventListener("reset", function() {
    resultSection.hidden = true;
    errorMessage.textContent = "";
    bmiCategory.className = "";
});
