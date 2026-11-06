//Debugging Exercises
const price = 5000;
const quantity = 3;
const total = price + quantity;

console.log(total);
//Exercise B

const isAdmin = "false"
if (isAdmin) {
    console.log("Admin access Granted");
}

//...
const age = "";
const numericAge = Number(age);

if (numericAge >= 0) {
    console.log("Valid age");
}
// Make 10 if, else and else-if Functions... with JS.
// What arrow functions are and how to write arrow functions.
// if --- Executes code when condition is true
//else if --- checks another condition if the previous condition is false.
//else --- Executes when none of the previous conditions is true.


//1.
function checkSomething(value){
    if (value > 10){
        return "Greater than 10";
    } else if (value === 10) {
        return "Equal to 10";
    } else {
        return "Less than 10";
    }
}

console.log(checkSomething(4));

//2.
function classifyAge(age) {
    if (age < 0 || !Number.isFinite(age)) {
        return "Invalid Age";
    } else if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 60) {
        return "Adult";
    } else {
        return "Senior";
    }
}

console.log(classifyAge(5));

//3.
function checkNumber(number) {
    if (!Number.isFinite(number)) {
        return "Invalid Number";
    } else if (number > 0) {
        return "Positive Number";
    } else if (number < 0) {
        return "Negative Number";
    } else {
        return "Zero.";
    }
}

console.log(checkNumber(0));

//4.
function calculateElectricityBill(units) {
    let rate;
    if (!Number.isFinite(units) || units < 0) {
        return "Invalid Electricity Units.";
    } else if (units <= 100) {
        rate = 50;
    } else if (units <= 200) {
        rate = 75;
    } else {
        rate = 100;
    }

    const bill = units * rate;

    return `Electricity Bill: ₦${bill}`;
}
console.log(calculateElectricityBill(45));

//5.
function calculateDiscount(amount) {
    let discountRate;

    if (!Number.isFinite(amount) || amount < 0) {
        return "Invalid purchase amount";
    } else if (amount >= 100000) {
        discountRate = 0.20;
    } else if (amount >= 50000) {
        discountRate = 0.10;
    } else if (amount >= 20000) {
        discountRate = 0.05;
    } else {
        discountRate = 0;
    }

    const discount = amount * discountRate;
    const finalPrice = amount - discount;

    return `Final Price: ₦${finalPrice}`;
}

console.log(calculateDiscount(15000));