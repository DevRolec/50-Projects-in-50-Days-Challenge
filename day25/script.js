const isRegistered = true;
const hasPaid = false;

console.log(typeof isRegistered);

const age = 7;
const isadult = age >= 18;

console.log(isadult)
//_________________________________
const studentAge = 20;
const has_Paid = false;

if (studentAge >= 18 && has_Paid) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//******************************************* 
// A student qualifies for a certificate if:
// attendance is atleast 80%, project score is 60%*/
//Write a program that determines eligibility...
//
const attendance = 90;
const projectScore = 55;
const isEligible = attendance >= 80 && projectScore >= 60;

console.log(isEligible);
// Type Conversion.. Boolean, Integers, Strings, Float:
const ageText = "20";

const ageNumber = Number(ageText);
console.log(ageNumber);
console.log(typeof ageNumber);

// Trap 1. TYPE COERSION
console.log("10" + 5);

console.log("I love to eat Beans." + " And I also love to eat Bread.")

console.log("10" - 5);

let a = Number("10");
let b = Number("20");
let c = 5;
let d = 2.79;
sum = (a + b)
console.log(sum);
console.log(typeof sum)

//Trap 2. Loose Equality.

console.log(5 == "5"); // allows coersion
console.log(5 === "5"); //compares without converting btw diff data types

