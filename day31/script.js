//Advanced functions...
//Callback function: fx passed to another fx so that
//  the receiving fx can use it.
function processUser(name, callback) {
    callback(name);
}

function sayHello(name) {
    console.log("Hello! My name is " + name);
}

processUser("Philip", sayHello);

//Higher Order functions receives functions as arguments
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(number){
    return number * number;
});

console.log(squares);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const scores = [46, 67,82,54, 90, 52];

const passed = scores.filter(score => score >= 70);

console.log(passed);