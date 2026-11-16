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

console.log(account.deposit(100000));

console.log(account.withdraw(100000));

console.log(account.getBalance());

console.log("//////////////////////////////////////////////////////////");

function createPinSystem(initialPin) {

    let pin = initialPin;

    return {
        verifyPin(inputPin) {
            return inputPin === pin;
        },

        changePin(oldPin, newPin) {
            if (oldPin !== pin) {
                return "Incorrect Old Pin";
            }
            if (!/^\d{4}$/.test(String(newPin))) {
                return "Pin must contain exactly 4 digits.";
            }

            pin = String(newPin);

            return "Pin changed successfully";
        }
    };
}

const security = createPinSystem("1234");

console.log(security.verifyPin("1234"));
console.log(security.changePin("1234", "5678"));
console.log(security.verifyPin("1234"));
console.log(security.changePin("5678", "1234"));
console.log(security.changePin("1234", "5678"));
console.log(security.verifyPin("5678"));


