//Function that requires no parameters
function welcome() {
    console.log("Welcome!");
}

//Accepts the parameters and returns value
function add(a, b) {
    return a + b;
}

//Adding a conditional, depending what the value inputs
function check(number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Zero or Negative";
    }
}

//Creates a loop and calls another function
function table(number, length) {
    for (let i = 1; i <= length; i++) {
        console.log(number + " x " + i + " = " + number * i);
        console.log(check(number * i)); //Nested function
    }
}

//Asks user to input the first and second number along with the table length
let first = Number(prompt("Enter the first number: "));
let second = Number(prompt("Enter the second number: "));
let chosen = Number(prompt("Choose a number for the table: "));

//Runs the function
welcome();

//Adding together all of the numbers and printing total
let answer = add(first, second);
console.log("The total is: " + answer);

//Prints out the final input
table(chosen, 5);