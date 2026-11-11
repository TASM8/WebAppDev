//Choosing the form and the input data
const demoForm = document.getElementById("demoForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");

//Choosing the error message
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const phoneError = document.getElementById("phoneError");

//The success message
const successMessage = document.getElementById("successMessage");

//Pattern for the expressions
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

//Validating the data entered
function validateUsername() {

    const username = usernameInput.value.trim();

    //Gave a character limit for the username, and a message of the minimum
    if (username === "") {
    usernameError.textContent = "Please enter your username.";
    return false;
    } else if (username.length < 5) {
        usernameError.textContent = "Your name must be at least 5 characters.";
        return false;
    
    } else {
        usernameError.textContent = "";
        return true;
    } 
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (email === '') {
        emailError.textContent = "Please enter email.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

//Adding the age of the user, a minimum
function validateAge() {
    const age = ageInput.value;
    if (age === "") {
        ageError.textContent = "Please enter age.";
        return false;
    
        //Make sure that the user is 18 or older
    } else if (!Number.isFinite(Number(age)) || Number(age) <= 17) {
        ageError.textContent = "Age must be 18 or older.";
        return false;
    } else {
        ageError.textContent = "";
        return true;
    }
}

//Makes sure that a valid number is entered
function validatePhone() {


    const phone = phoneInput.value.trim();

    //Phone data and how to enter it
    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        return false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Use the format 555-123-4567.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

//Checks the name, the user enters in field
usernameInput.addEventListener("blur", () => {
    validateUsername();
});


emailInput.addEventListener("blur", () => {
    validateEmail();
});


ageInput.addEventListener("blur", () => {
    validateAge();
});

phoneInput.addEventListener("blur", () => {
    validatePhone();
});


//Submit Results
demoForm.addEventListener("submit", (event) => {


    event.preventDefault();


    successMessage.textContent = "";

    //Validating all the info entered
    const validateUsername = validateUsername();
    const validateEmail = validateEmail();
    const validateAge = validateAge();
    const validatePhone = validatePhone();


    //Validating results
    if (validateUsername && validateEmail && validateAge && validatePhone) {



        successMessage.textContent = "Form successfully submitted!";


        //Clears when completed
        demoForm.reset();



        usernameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
        phoneError.textContent = "";


    } else {


        successMessage.textContent = "";
    }
});