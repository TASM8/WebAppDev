console.log(1===1);
 console.log(1!==1);

 //Ask's for the user's name.
 let username=prompt("Enter Your Name:");

 //Asking the user for a rank number between 1-4, I really over complicated my assignment, so I fixed it.
 let score=Number(prompt("Choose a movie:  1, 2, 3, or 4"));

 //Ask the user for their age.
  let age=Number(prompt("Enter your age:"));

//The code for the ranked numbers when entered.
 if (score===1){
     console.log("The Rocky Horror Picture Show (1975)");

     //Rocky Horror Picture Show is rated R, if the age is less than 17
     // they will be denied.
     // "Shiver with antici— *pause* —pation."
     if (age >=17) {
         console.log("You can watch this movie.");
      } else {
         console.log("You are WAY too young for this movie.");
      }

 } else if(score===2){
     console.log("Galaxy Quest (1999)");

     //Galaxy Quest is rated PG-13, if the age is less that 13
     // they will be denied. 
     // "Never give up, never surrender!"
      if(age >=13) {
         console.log("You can watch this movie.");
      } else {
         console.log("You are too young for this movie.");
      }
  }

else if (score===3){
    console.log("Three Amigos (1986)");

    //Three Amigos is rated PG, if the age is less than 8,
    // warning will pop up.
    //  "You son of a motherless goat!"
      if (age >=8) {
         console.log("You can watch this movie.");
      } else {
         console.log("You may need a parent or guardian.");
      }
  }

 else if (score===4){
    console.log("The Hunchback of Notre Dame (1996)");

      //The Hunchback of Notre Dame is rated G, refresher again.
      //  "I'm free! I'm free! [trips and falls into a pillory] Dang it!"
         if (age >=6) {
      console.log("You can watch this movie.");
      } else {
         console.log("You may need a parent or guardian.")
      }   
 }

  else {
      console.log("Invalid, I kindly asked for 1-4.");
  }

//Ties things together.
 document.body.innerHTML += "<p>Hello" + username.toUpperCase() + "</p>";
