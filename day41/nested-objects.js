// An object can contain another object

const studentes = {
    name: "Mercy",
    age: 20,

    address: {
        city: "Aba",
        state: "Abia",
        country: "Nigeria"
    },

    guardian: {
        name: "Mrs Grace Ugo",
        phone: "08000000000"
    },
    sponsor: {
        name: "Megwara Onuma",
        phone: "09000000000"
    }
};
console.log(studentes.guardian.name);

console.log(studentes.sponsor?.name);

//Arrays in an Object...
