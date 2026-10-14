function greetUser(){ //name is the parameter of this function
    let name=prompt("What is your name?");
    console.log("Hello, " +name); //prints out a greeting
}

greetUser(); //executes the function, allowing user to enter name

function addNumbers(a,b){ //adding a number function, in this case adding two numbers together
    return (a+b);
}

let total=addNumbers(8,28); //36
console.log("The total is: "+total);

function multiply(x,y){ //muliplying is the function 
    return (x*y);
}

let result=multiply(16,16); //36
console.log(result); 

function calculateArea(length, width){ //finding the area of the numbers that are programmed in
    return (length*width);
}

let area=calculateArea(5,10);
console.log("The area is: "+area); //area would be 50

//In the assignment for the lab it is just wantint to input the name of the user and then add the other numbers already programmed. 