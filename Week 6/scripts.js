// //comparison operators
// //=== strict equal
// // !== not equal

 console.log(1==1);
 console.log(1!==1);

 let username=prompt("What is your name?");

 let score=Number(prompt("Enter the percentage (0-100"));
 if (score>89){
     console.log("You've got an A");
 }
 else if(score>79){
     console.log("You have a B");
 }

else if (score>69){
    console.log("You got a C");
 }
 else if (score>59){
    console.log("You got a D");
 }
 else if (score>0){
    console.log("You got a F");
 }

 else{
    console.log("You have a mediorce grade");
 }



 let age=Number(prompt("Enter your age"));
 let isMember=true;90
 if(age>=18){
    if(isMember){
        console.log("Adult member benefits applied");
    }
    else{
        console.log("Adult, but no membership");
    }
}else{
    console.log("Minor");
}

 document.body.innerhtml += "<p>Hello" + username.toUpperCase() + "</p>";

