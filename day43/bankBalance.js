function createBankAccount() {
    let balance = 50000;

    function deposits(amount) {
        balance += amount;

        return balance;
    }

    function withdraw(amount) {
        if (amount >  balance) {
            return "Insufficient Funds"
        }
        balance -= amount;
        return balance;   
    }

    return {
        deposit, withdraw, getBalance
    };

}

const account = createBankAccount();


console.log(account.getBalance());
console.log(account.deposit(1000));
console.log(account.getBalance());
console.log(account.withdraw(5000));
console.log(account.getBalance());

