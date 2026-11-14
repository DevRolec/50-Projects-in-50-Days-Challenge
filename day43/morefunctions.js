//Scopes determines where variables and funfriton can be accessed in a JS prog
//Global scope:
const bankNames = "Jenga Tech Bank";

function displayBank() {
    console.log(bankNames);
}


displayBank();
console.log(bankNames);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Function Scope
function createAccount() {
    const accountNumber =  "JT001";
    const balance = 50000;

    console.log(accountNumber);
    console.log(balance);

}

createAccount();

// Block Scope...

if (true) {
    let balance = 50000;
    const accountName = "Jennifer";

    console.log(balance);
}

for (let i =0; i < 3; i++) {
    console.log(i);
}

//Understanding var...
if (true) {
    var accountBalance = 10000000;
}

console.log(accountBalance);

if (true) {
    var savings = 50000;
    var current = 1000000;
}

console.log(current);
console.log(savings);

//Lexical Scope and Scope-Chain

const bankNamez = "Jenga Tech Bank";

function bankInformation() {
    const branch = "Aba";
    const cashier = "Racheal";

    function displayDetails() {
        const security = "Henry";

        console.log(bankNamez);
        console.log(branch);
        console.log(cashier);
        console.log(security);


    }
    displayDetails();
}

bankInformation();

//Function CHain...
// Current scope => Outer => Global Scope
