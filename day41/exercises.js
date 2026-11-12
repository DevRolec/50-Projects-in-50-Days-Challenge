//Arrays of Objects...

const candidates = [
    {
        id: 1,
        name: "Jennifer",
        course: "Software Engineering"
    }, 
    {
        id: 2,
        name: "Michael",
        course: "Software Engineering"
    },
    {
        id: 3,
        name: "Mercy",
        course: "Cyber Security"
    },
    {
        id: 4,
        name: "Dubem",
        course: "Data Analytics"
    },
    {
        id: 5,
        name: "Praise",
        course: "Software Engineering"
    }
];

//Looping through objects of array
for (const candidate of candidates){
    console.log(candidate.name, candidate.course);
}

//Searching through objects
const candidate = candidates.find(s => s.id === 4);

console.log(candidate);

//Filtering through objects...
const softwareStudents = candidates.filter(
    candidate => candidate.course === "Software Engineering"
);

console.table(softwareStudents);
// Extracting property values of Objects in an Array...
const names = candidates.map(candidate => candidate.name);
console.table(names);


//Looping through Object Properties...
const persons = {
    name: "David",
    age: 18,
    course: "Python",
    skills: {
        indoor: "Table Tennis",
        outdoor: "racing"
    }
};

for (const key in persons) {
    if (Object.hasOwn(persons, key)) {
        console.log(key, persons[key]);
    }
}

persons.level = "Intermediate";
//Object.keys()
console.log(Object.keys(persons));

//Object.values()
console.table(Object.values(persons));

//Object.entries()
for (const [key, value] of Object.entries(persons)) {
    console.log(`${key}: ${value}`)
}

//DESTRUCTURING AND SPREAD SYNTAX...................
//Object Destructuring
const people = {
    name: "Jennifer",
    age: 19,
    sex: "Female",
    
}



