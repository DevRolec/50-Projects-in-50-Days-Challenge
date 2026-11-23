// Form properties and methods
//Input types and Constants, Error and Success Mesages, FormData API,Build a complete Registration FOrm
//Different Input Types.
//text, number, date, checkbox, email, password, tel,radio, file, url, search, hidden

const fullname = document.querySelector("#fullname");

console.log(fullname.value);
console.log("I like to code");

fullname.value = "Stanley";
console.log(fullname.value);

//PASSWORD INPUTS -----
const password = document.querySelector("#passworded");

const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", ()=> {
    if (password.type === "password") {
        password.type = "text";

        togglePassword.textContent = "Hide Password";
    } else {
        password.type = "password";

        togglePassword.textContent = "Show Password";
    }
});


const age = document.querySelector("#age");

console.log(typeof age.value)

const tel = document.querySelector("#tel");

console.log(typeof tel.value);

const selectMode = document.querySelector(
    'input[name="studyMode"]:checked'
);

console.log(selectMode?.value);