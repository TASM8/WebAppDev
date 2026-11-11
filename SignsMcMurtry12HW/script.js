const form = document.getElementById("form");
const result = document.getElementById("result");

// Prevent the default form submission behavior
form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    //Displays everything that the user inputs into the form on the front side of the website
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value;

    //Clearing the previous info entered
    result.innerHTML="";

    //Creates a heading for submission
    const heading=document.createElement("h3");
    heading.textContent="Form Submission Result: ";
    result.appendChild(heading);

    //Shows user's info, I know that we don't need to add + name etc. 
    // It wasn't working, and the predictive vscode suggested it.
    const nameResult=document.createElement("p");
    nameResult.textContent="Name: " + name;
    result.appendChild(nameResult);

    const emailResult=document.createElement("p");
    emailResult.textContent="Email: " + email;
    result.appendChild(emailResult);

    const ageResult = document.createElement("p");
    ageResult.textContent = "Age: " + age;
    result.appendChild(ageResult);

    const interestResult = document.createElement("p");
    interestResult.textContent = "Volunteer Interest: " + interest;
    result.appendChild(interestResult);

    const messageResult = document.createElement("p");
    messageResult.textContent = "Message: " + message;
    result.appendChild(messageResult);
});

     
//I tried to use this code but something about it was not working.


//     //Displays the result of the submission
//     result.innerHTML = `
//     <h3>Form Submission Result:</h3>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Age:</strong> ${age}</p>
//     <p><strong>Message:</strong> ${message}</p>
//   `;
// });