function factorial(n) {
if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Enter a non-negative integer");
}

if (n === 0 || n === 1){
    return 1;
}

return n * factorial(n-1);
}

console.log(factorial(19));

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//A closure allows functions to retain access to variables from the surrounding scope, 
//even after the outer function is returned.
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());



//Student Result Management System.
function calculateAverage(scores){
    if (scores.length === 0) {
        return 0;
    }

    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total / scores.length;
}

// Determine Student Grade.
function getGrade(score) {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";

    return "F";
}
// Determine Pass or Fail
function checkStatus(average) {
    return average >= 50 ? "PASS" : "FAIL";
}

//Generate Report

function generateReport(name, scores){
    const average = calculateAverage(scores);
    const grade = getGrade(average);
    const status = checkStatus(average);

    console.log("STUDENT RESULT SYSTEM");
    console.log("_____________________________");
    console.log("Name: ", name);
    console.log("Scores: ", scores);
    console.log("Average: ", average.toFixed(2));
    console.log("Grade: ", grade);
    console.log("Status: ", status);
}

generateReport("Michael Igwebuike: ", [78, 87, 94, 68, 88]);