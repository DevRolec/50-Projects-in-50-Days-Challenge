function createBankAccount() {

    let balance = 50000;

    function deposit(amount) {
        balance += amount;

        return balance;
    }

    function withdraw(amount) {

        if (amount > balance) {
            return "Insufficient funds";
        }

        balance -= amount;

        return balance;
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}

const account = createBankAccount();

console.log(account.getBalance());

console.log(account.deposit(10000));

console.log(account.withdraw(5000));

console.log(account.getBalance());