//Arrays, Array Methods, Object & Properties.
//Array is a Data Structure that stores an ordered collection of values inside one variable.
let student1 = "Michael";
let student2 = "Jennifer";
let student3 = "Mercy";
let student4 = "David";

console.log(student1, student2, student3, student4);


const fruits = ["Apple", "Banana", "Orange"];
const scores = [80,90,57,87];
const attendance = [true, false, true];
const mixed = ["Jennifer", 18, true, 0.45];

console.log(mixed[3])
//.length property in arrays.
const courses = [
    "Javascript",
    "Python",
    "HTML",
    "CSS",
    "SQL"
]

console.log(courses.length);
console.log(courses[courses.length -5]);
//4 Methods of Array Manipulation
// "Push", "Pop", "Unshift", Shift.

const students = [
    "Jennifer", "Mercy", "Michael", "David"
];

students.push("Roland");

students.push("David", "Frankline");

//.pop() removes the last element of the array.

students.pop();
console.log(students);

students.pop();
console.log(students);

//.unshift() .shift()
students.unshift("Vannessa");
console.log(students);

students.shift("Jennifer");
console.log(students);

//.indexOf(), .includes(), .slice(), .splice()

console.log(students.indexOf("Mercy")); 



