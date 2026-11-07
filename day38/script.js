//STRUCTURE OF LESSON:
// for Loop --- Repeat instructions a known number of time...
//while loop --- Repeat instructions while a condition remains true...
//do...while Loop --- Executes instructions atleast Once...
// break and continue --- Controlling loop execution...
//Loops inside functions --- Build reusable systems...
//**************************************************************/
//for Loop:
function countNumber() {
    for (let i = 6; 
        i <= 10;
        i++
    ) {
        console.log(i)
    }
}
countNumber();

//while Loop:
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--;
    }

    console.log("Countdown Complete!");
}

countDown(6);

//Combining Functions / Conditions and Loops
function checkStudentScores(score) {
    for (let i = 0; i < score.length; i++) {
        if (score[i] >= 70){
            console.log("Excellent!!");
        }else if (score[i] >= 50) {
            console.log("Pass!!");
        }else {
            console.log("Fail");
        }
    }
}

checkStudentScores([87, 98, 67, 48, 65]);

//Loops are programming structures that executes a block of code repeatedly 
//while a specified condition is satisfied.
console.log("Welcome to Jenga Tech!");
console.log("Welcome to Jenga Tech!");
console.log("Welcome to Jenga Tech!");
console.log("Welcome to Jenga Tech!");
console.log("Welcome to Jenga Tech!");

for (let i = 1; i <= 5; i++) {
    console.log("Welcome to Jenga Tech Ltd !")
}

for (let i = 3; i <= 7; i++) {
    console.log(i);
}

for (let i = 10; i >= 5; i--){
    console.log(i);
}

for (let i = 2; i <= 20; i += 2){
    console.log(i);
}
//THE WHILE EXPLAINED>>>
let number = 4;

while (number <= 5) {
    console.log(number);
    number++
}
//Timer:
function countdown(seconds) {
    while (seconds > 0) {
        console.log(seconds);
        seconds--;
    }

    console.log("Time is Up!!!!!!!");
}

countdown(5);
/// Savings Target:::::::::::::::::::::::::::::::::::
function savingsTracker(target , weeklySavings){
    if (target <= 0 || weeklySavings <= 0){
        return "Invalid Savings Details";
    }
    let totalSaving = 0;
    let weeks = 0;

    while (totalSaving < target) {
        totalSaving += weeklySavings;
        weeks++;

        console.log(`Week ${weeks}:  ₦${totalSaving} `);
    }

    return `Target reached in ${weeks} weeks`;
}

console.log(savingsTracker(100000 , 5000));

//Do   while Loop...
let rep = 10;

do {
    console.log("Do while Loop!");
} while (rep < 5);

// Menu system: Do while Loop
let choice = 3;

do {
    if (choice === 1) {
        console.log("You will eat Eba");
    } else if (choice === 2) {
        console.log("You will eat Beans");
    } else {
        console.log("Eat Swallow");
    }

    choice ++;
} while (choice <= 1);








