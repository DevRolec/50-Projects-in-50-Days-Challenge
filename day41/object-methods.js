//A function stored in a property
const students = {
    name: "Michael",
    course : "Software Engineering",

    introduce : function (){
        return `My name is ${this.name}`;
    }
};

console.log(students.introduce());
//....deposit / withdrawal logic

const account = {
    owner : "Michael",
    balance: 50000,

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            return "Invalid Amount";
        }

        this.balance += amount;

        return this.balance;
    },

    withdraw(amount) {
         if (!Number.isFinite(amount) || amount <= 0) {
            return "Invalid Amount";
        }

        if (amount > this.balance) {
            return "Insufficient Funds.... Hustle Harder 😅"
        }

        this.balance -= amount;

        return this.balance;
    }

};

console.log(account.deposit(2000000));
console.log(account.withdraw(1300000));
