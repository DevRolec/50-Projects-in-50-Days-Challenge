
// GET HTML ELEMENTS

const passwordInput =
    document.getElementById("password");

const lengthInput =
    document.getElementById("length");

const lengthValue =
    document.getElementById("lengthValue");

const uppercaseInput =
    document.getElementById("uppercase");

const lowercaseInput =
    document.getElementById("lowercase");

const numbersInput =
    document.getElementById("numbers");

const symbolsInput =
    document.getElementById("symbols");

const generateBtn =
    document.getElementById("generateBtn");

const copyBtn =
    document.getElementById("copyBtn");

const strengthText =
    document.getElementById("strengthText");

const strengthBars =
    document.querySelectorAll(".bar");

const message =
    document.getElementById("message");

// CHARACTER GROUPS

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+?"
};

// UPDATE PASSWORD LENGTH

lengthInput.addEventListener("input", function() {
    lengthValue.textContent = lengthInput.value;
});

// SECURE RANDOM INDEX
// Rejection sampling avoids modulo bias.

function secureRandomIndex(max) {
    if (!Number.isSafeInteger(max) ||
        max <= 0 || max > 4294967296) {
        throw new Error("Invalid character pool size.");
    }

    const range = 4294967296;
    const limit = Math.floor(range / max) * max;

    const randomArray = new Uint32Array(1);
    let randomNumber;

    do {
        crypto.getRandomValues(randomArray);
        randomNumber = randomArray[0];
    } while (randomNumber >= limit);

    return randomNumber % max;
}

// PICK A SECURE RANDOM CHARACTER

function randomCharacter(pool) {
    const index = secureRandomIndex(pool.length);
    return pool[index];
}

// SHUFFLE CHARACTERS SECURELY

function shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = secureRandomIndex(i + 1);

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

// GET SELECTED CHARACTER GROUPS

function getSelectedGroups() {
    const groups = [];

    if (uppercaseInput.checked) {
        groups.push(characters.uppercase);
    }

    if (lowercaseInput.checked) {
        groups.push(characters.lowercase);
    }

    if (numbersInput.checked) {
        groups.push(characters.numbers);
    }

    if (symbolsInput.checked) {
        groups.push(characters.symbols);
    }

    return groups;
}

// GENERATE PASSWORD

function generatePassword() {
    const passwordLength = Number(lengthInput.value);

    const groups = getSelectedGroups();

    if (groups.length === 0) {
        passwordInput.value = "";
        updateStrength(0, 0);

        message.textContent =
            "Select at least one character type.";

        return;
    }

    const allCharacters = groups.join("");

    const passwordArray = [];

    // Guarantee one character from each selected group
    groups.forEach(group => {
        passwordArray.push(randomCharacter(group));
    });

    // Fill the remaining password length
    while (passwordArray.length < passwordLength) {
        passwordArray.push(
            randomCharacter(allCharacters)
        );
    }

    // Shuffle the final password
    shuffleCharacters(passwordArray);

    const password = passwordArray.join("");

    passwordInput.value = password;

    updateStrength(passwordLength, allCharacters.length);

    message.textContent =
        "New password generated successfully!";
}

// PASSWORD STRENGTH ESTIMATE

function updateStrength(length, poolSize) {
    strengthBars.forEach(bar => {
        bar.className = "bar";
    });

    if (length === 0 || poolSize === 0) {
        strengthText.textContent = "—";
        return;
    }

    // Approximate entropy in bits
    const entropy = length * Math.log2(poolSize);

    let level;
    let activeBars;

    if (entropy < 60) {
        level = "Weak";
        activeBars = 1;
    } else if (entropy < 90) {
        level = "Medium";
        activeBars = 2;
    } else {
        level = "Strong";
        activeBars = 3;
    }

    strengthText.textContent = level;

    for (let i = 0; i < activeBars; i++) {
        strengthBars[i].classList.add(
            level.toLowerCase()
        );
    }
}

// COPY PASSWORD

async function copyPassword() {
    const password = passwordInput.value;

    if (!password) {
        message.textContent =
            "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(password);

        message.textContent =
            "Password copied to clipboard!";

    } catch (error) {
        // Fallback for unsupported clipboard access
        passwordInput.focus();
        passwordInput.select();

        message.textContent =
            "Automatic copy unavailable. Press Ctrl+C to copy.";
    }
}

// BUTTON EVENTS

generateBtn.addEventListener(
    "click",
    generatePassword
);

copyBtn.addEventListener(
    "click",
    copyPassword
);

// UPDATE DISPLAY WHEN OPTIONS CHANGE

[
    lengthInput,
    uppercaseInput,
    lowercaseInput,
    numbersInput,
    symbolsInput
].forEach(input => {
    input.addEventListener("change", () => {
        passwordInput.value = "";
        updateStrength(0, 0);
        message.textContent =
            "Settings changed. Generate a new password.";
    });
});

// GENERATE A PASSWORD WHEN PAGE LOADS

generatePassword();
