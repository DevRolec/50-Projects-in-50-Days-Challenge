//Understanding How Professional Developers
//  Structure Programs Using Advanced Functions
//### BANKING APPLICATION ###

//A function is a renewable Block of Code
let price1 = 5000;
let quantity1 = 6;

let total = price1 * quantity1;

console.log(total);
let price2 = 2000;
let quantity2 = 5;

let total2 = price2 * quantity2;

console.log(total2);

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

function calculateTotal(price, quantity){
    return price * quantity;
}

console.log(calculateTotal(5000, 6));
console.log(calculateTotal(345, 600));
console.log(calculateTotal(500, 1));
console.log(calculateTotal(15000, 2));
console.log(calculateTotal(7500, 1));
console.log(calculateTotal(4500, 1));
console.log(calculateTotal(5000, 3));
console.log(calculateTotal(50, 24));
console.log(calculateTotal(1500, 4));

//Function Declaration
function greet() {
    console.log("Welcome to Jenga");
}

greet();

//Function Expression
const greets = function(){
    console.log("Welcome!");
}

greets();

//Arrow Functions
const greet1 = () => {
    console.log("Hello! Students!!");
};

greet1();

const add = (a, b) => {
    return a + b;
};

console.log(add(12, 23));

const add1 = (a, b) => a + b ;

console.log(add(12, 23));





