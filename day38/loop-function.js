//Arrays stores multiple values in a single variable:
const scores = [87, 98, 78, 67, 98];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

const students = [
    "Jennifer", "Michael", "Mercy", "Victory", "Praise"
];

for (const student of students) {
    console.log(student);
}
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

const student101 = {
    name: "Jennifer", age: 18, course: "Software Engineering"
};

for (const key in student101) {
    console.log(key, student101[key]);
}

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
function calculateAverage(scores){
    if (scores.length === 0) {
        return 0;
    }
    let total = 0;

for (const score of scores){
    total += score;
}

return total / scores.length;
}

console.log(calculateAverage([87, 68, 90, 56, 74]))
//Your Challenge:::::Create an array of 10 student scores and write functions to:
//1. Calculate the total score
//2. Find the Highest score
//3. Find the lowest score
//4. Count students who scored at least 50.

function factorial(number) {
    if (!Number.isFinite(number) || number < 0 || number >10) {
        return "Enter an integer from 0 to 10";
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
        }
    return result;
}

console.log(factorial(8));

//Vowels ; AEIOU...
function countVowels(vowels){
    let count = 0;

    for (const letter of vowels.toLowerCase()){
        if ("bcdfghjklmnpqrstvwxyz".includes(letter)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Kelvin DeBruyne"));
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

function reverseText(text) {
    let reversed = "";

    for (let i = text.length -1; i>= 0; i--){
        reversed += text[i];
    }
    return reversed;
}

console.log(reverseText("Jenga"));

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
function Largest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}

console.log(Largest([45, 98, 200, 86, 956, 78]));


