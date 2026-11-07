const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    //Displays everything that the user inputs into the form on the front side of the website
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message").value;

    //Clearing the previous info entered
    result.innerHTML="";

    //Creates a heading for submission
    const heading=document.createElement("h3");
    heading.textContent="Form Submission Result: ";
    result.appendChild(heading);

    //Shows user's info
    const nameResult=document.createElement("p");
    nameResult.textContent="Name: " + name;
    result.appendChild(nameResult);

    const emailResult=document.createElement("p");
    emailResult.textContent="Email: " + email;
    result.appendChild(emailResult);

    const ageResult = document.createElement("p");
    ageResult.textContent = "Age: " + age;
    result.appendChild(ageResult);

        const messageResult = document.createElement("p");
    messageResult.textContent = "Message: " + message;
    result.appendChild(messageResult);
});

     

//     //Displays the result of the submission
//     result.innerHTML = `
//     <h3>Form Submission Result:</h3>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Age:</strong> ${age}</p>
//     <p><strong>Message:</strong> ${message}</p>
//   `;
// });