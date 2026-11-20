//Events are actions OCURRING in the browser.
// .addEventListener()
const button = document.querySelector("#clickButton");

button.addEventListener("click", function (){
    alert("Button Was Clicked 👆");
});

button.addEventListener("click", ()=> {
    console.log("Hello from an arrow function.")
});

function greetUser() {
    console.log("Welcome to Jenga Tech!");
}

button.addEventListener("click", greetUser);
//Common DOM Events...
// Click, dblclick, mouseover, mouseout, mouseenter, mouseleave, mousedown, mouseup
const box = document.querySelector(".box");

box.addEventListener("mouseenter", ()=> {
    box.style.backgroundColor = "orange";
    box.style.color = "black";
});

box.addEventListener("mouseleave", ()=> {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});
//INPUT EVENTS...
const username = document.querySelector("#username");
const output = document.querySelector("#output");

username.addEventListener("input", ()=> {
    output.textContent = username.value;
    output.style.fontWeight = 900;
    output.style.color =  "red";
});

//Change Events
const course = document.querySelector("#course");
const selectedCourse = document.querySelector("#selectedCourse");

course.addEventListener("change", ()=> {
    selectedCourse.textContent = `You selected: ${course.value}`;
});

// Submit Event;
const form = document.querySelector("#registrationForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form Submitted!");
});








// const addArrow = (a, b) => {
//     return a + b;
// };


// const addShort = (a, b) => a + b;

// const square = x => x * x;
// const cube = x => x * x * x;

// const greet = (name) => `Hello!, ${name}`;
// const makeUser = (user, age) => ({
//     name: user, age: age
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

// const doubled = numbers.map(n => n * 2);
// const evens = numbers.filter(n => n % 2 === 0);
// const sum = numbers.reduce((acc, n) => acc + n, 0);


// const timer = {
//     seconds : 0, 
//     intervalId: null,
//     start() {
//         this.intervalId = setInterval(() => {
//             this.seconds++;
//             console.log(this.seconds);
//             if (this.seconds === 5) this.stop();
//         }, 1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         console.log("Counter Stopped");
//     }

// };



//timer.start();
// console.log(sum);
// console.log(doubled);
// console.log(evens);
// console.log(makeUser("Jennifer", 19));
// console.log(greet("Nnamani"));
// console.log(addShort(23, 34));
// console.log(square(4));
// console.log(cube(4));


