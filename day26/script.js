console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(("0")));

const isRegistered = false;

if (isRegistered) {
    console.log("Student is Registered");
}

//Type 4. Number("") becomes 0

console.log(Number(""));

const amount = Number(" ");

if (amount >= 0) {
    console.log("valid amount")
}
//NaN : Not a Number
const gameResult = Number("Jennifer");

console.log(gameResult);

console.log(NaN === NaN);
console.log(Number.isFinite(gameResult));

//type 6. parseInt() and parseFloat()

console.log(parseInt("25years", 10));
console.log(parseFloat("10.75kg"));
console.log(parseInt("45Jennifer"));

//type 7. JS Decimals and equality

console.log(0.1 + 0.2 === 0.3);

const resultnum = 0.1 + 0.2;

const isClose = Math.abs(resultnum - 0.3) < 1e-10;

console.log(isClose);