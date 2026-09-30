//comparison operators

//document.body.innerHTML += "<p>The score you have is a " + score + " </p>";
//Iwant the website to ask the user for their name, and then display "Hello, [name]!"
// let username=prompt("What is your name?");
// document.body.innerHTML += "<p>Hello, " + username.toUpperCase() + </h>
// + "!</p>";

//Why use loops?
//Repeat code multiple times without duplicating code

//The WHILE LOOP
// while(condition){
    //code to run repeatedly, if condition is true
    //Infinite loops, make sure something inside changes the condition


//basic program that is going to count from 1-5, and will display it via console
// let count=0 //this is our starting point, inialize loop control variable
// while(count<=5){ //checks condition, if true everthing in brackets run
//     console.log("Count is "+count);
//     count++; //increment to avoid infinite loop
// }

//FOR LOOP
//for(initialization; condition; final-expression){
    //repeated code
//}

// for(let i=1; i<=5;i++){
//     console.log("i is: "+i);

// }

//let i=1, is our starting point
//i<=5, means to stop when greater than 5
//i++, we are counting by 1
//Why FOR is cleaner: ALL loop logic is in one line, easier to read in Sebastian's opinion


//program that lets the user pick what number to count to 
// let num=Number(prompt("Pick a number: "));
// for(let i=1; i<=num; i++){
//     console.log(i);
// }



//classic triangle loop pattern
// let triangle="";
// for(let line=1;line<=7;line++){
//     triangle+="*";
//     console.log(triangle);
// }

//starts the count at 1 and will count to 10, displaying the count in the console
let count=1;
while(count<=10){
    console.log("Count is "+count);
    count++;
}

//lets the user pick number to count to, and will display the count in the console
let num=Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i);
}

//it is the classic triangle Loop pattern, but uses # symbol instead if * symbol. Repeats the code 7 times into a triangle shape
let triangle="";
for(let line=1;line<=7;line++){
    triangle+="#";
    console.log(triangle);
}

