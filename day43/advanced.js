//Variable Shadowing happens when an inner scope declares 
// a variable with the same name as one in an outer scope.
const balance = 100000;

function displayBalance() {
    const balance = 50000;

    console.log(balance);
}

displayBalance();

console.log(balance);

console.log("EXAMPLES   ================================");
let fruit = "Apple";

function eatFruit() {
    let fruit = "Banana";
    console.log(fruit);
}
eatFruit();

console.log(fruit);

let userName = "Guest";

function greet(userName) {
    console.log("Hello, "+ userName);
}
greet("Mercy");

console.log(userName);
console.log(" ================================");

var score = 50;

if (true) {
    var score = 100;
    console.log(score);
}

console.log(score);

//Illegal shadowing
var status = "Active";

if (true) {
    var status = "Inactive";
}
//////////////////////////////////////""
let num = 50;
function a() {
    let num = 15;
    console.log(num);
}
a();
console.log(num);

function outerFunction() {
    let message = "Welcome to Jenga Tech";


    function innerFunction() {
        console.log(message);
    }

    return innerFunction;

}

const myFunction = outerFunction();
myFunction();