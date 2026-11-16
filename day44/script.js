//Setting up Your first DOM project:
const heading = document.querySelector("h1");

console.log(heading);
console.log(document.title);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);

//Change the TItle
document.title = "Jenga Tech DOM Class";
//twitch the Styling...

document.body.style.backgroundColor = "grey";

const head = document.getElementById("heading");

console.log(head);
const students = document.getElementsByClassName("student");
console.log(students);
console.log(students[0]);
//Loops
for (let student of students) {
    console.log(student.textContent);
}

//Get elements by Tagname... Id... ClassName...

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);