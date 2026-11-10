//An Object is a collection of RELATED data stored in key-value pairs

let name = "Jennifer";
let age = 19;
let course = "Software Engineering";
let email = "jenniferOgbuefi-example@gmail.com";

const student = {
    name: "Jennifer",
    age : 19,
    course : "Software Engineering",
    email: "jenniferOgbuefi-example@gmail.com"
};
//Dot notation...
console.log(student.name);
console.log(student.course);

//Bracket notation...
console.log(student["name"]);

const laptop = {
    brand: "HP",
    "model name": "EliteBook 840 G7"
};

console.log(laptop.brand);

console.log(laptop["model name"]);
//Practice 1. Brand, model, processor, RAM, storage abd price.

const laptop_sales = {
    brand:"Dell",
    model : "Lattitude 5310",
    processor : "Intel Core i7 13th Gen",
    RAM : "32GB",
    storage : "1024GB SSD",
    price : 700000
}
//update Object Properties
laptop_sales.model = "Precision 5730";

//Delete Properties
delete laptop_sales.RAM;
console.log(laptop_sales.RAM);

//WHat is the difference between an Object and a Map.
const person = new Map();

person.set("name", "Michael");
person.set("score", 85);

console.log(person.get("score"));

//Checking if a Property exists
console.log("brand" in laptop_sales);

//Create an Employee Object, Add a dept property, Increase salary by 15%,
// verify whether the dept exists, delete temporary property

const employee = {
    name: "Michael",
    age: 28,
    position : "Software Developer",
    salary : 150000,
    temporary : "Intern"
}
//2. Add a dept Property
employee.department = "IT";

//3. Increase Salary by 15%
employee.salary = employee.salary * 1.15;

//4. Verify whether the dept exists
console.log(Object.hasOwn(employee, "department"));

//5. Delete Temporary property.
delete employee.temporary;

console.log(employee.temporary);