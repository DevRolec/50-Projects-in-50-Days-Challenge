function cube(n) {
    return n ** 3;
}

console.log(cube(6));

function studentDetails(name, age, course){
    console.log(name, age, course);
}

studentDetails("Mercy", 19, "Software Engineering")
//#Default Parameters:
function welcome(name = "Guest"){
    console.log("Hello !", name);
}

welcome();

function greetMate(name = "Course Mate") {
    console.log("Hello and welcome to our class ", name);

}
greetMate("Michael Oduduwa");

function registerStudent({name, age, course }){
    console.log(name, age, course);
}

registerStudent({
    course: "Cybersecurity",
    name: "Grace",
    age : 20
});
//Global Variables
let school = "Jenga Tech Academy";

function showSchool(){
    console.log(school);
}
showSchool();
