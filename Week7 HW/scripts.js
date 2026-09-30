//For loop that counts to a number by a second number, and tells you if the number is even or odd
let num=Number(prompt("Pick a number you want to count to: "));
let num2=Number(prompt("Pick a second number, that we will use to count by: "));
for(let i=0; i<=num; i+=num2){

    if(i%2==0){ //if the number is even, it will display that in the console
        console.log("Number is even: "+i);
    }
    else{ //if the number is odd, it will display that in the console
        console.log("Number is odd: "+i);
    }
}

//While loop that counts down from a number by 5, and displays the count in the console
let num3=Number(prompt("What number to you want to count down from:"));

while(num3>=0){ //while loop that counts down from a number by 5, and displays the count in the console
    console.log("Count down is: "+num3);
    num3 -= 5;
}
