//What is a function?
//reusable block of code designed to performa specific task

// function greetUser(){
//     console.log("Hello There");
// }

// greetUser(); //calls (executes) the function

//Function Structure
// Keyword, function: tells JS we're defining a function
// Name, identify the function
//Parameters, Variables inside the parentheses that receive data
//Body, The code between {}

//Parameter and Argument
//Parameter: Placeholders when defining a function
//Argument: Actual value when calling it

// function greet(name){ //name is a parameter
//     console.log("Hello "+name);
// }
// greet("Sebastian"); //Sebastian is an argument


//Function that will add two numbers together
//Then Console the total

// function addNumbers(a,b){
//     return (a+b);
// }

// let total=addNumbers(4,6);
// console.log("The total is: "+total);

// //Return sends a vlaue back to where the function was called 
// //console.log() just prints it

// //Return is like your function handing you back a note with the answer written on it
// //console.log is your funtion yelling the answer out loud, we hear it but can't use it again

// function multiply(x,y){
//     return (x*y);
// }

// let result=multiply(15,15);
// console.log(result); //225

//Create a function that will count to 5 by 1s

// function countToFive(n){
//     for(let i=1; i<=n; i++){
//         console.log(i);
//     }
// }

// countToFive(5);

//Nested Functions
//Function can call another function inside of it
// function square(num){
//     return num*num;
// }

// function printSquare(num){
//     console.log("Square is: "+ square(num));
// }

// printSquare(6); //36


// //greets the user, asks for their name, then prints it
// function username(){
//     let name=prompt("What is your name?");
//     console.log("Welcome, "+name);
// }

// username();