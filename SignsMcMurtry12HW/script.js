const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    //Displays everything that the user inputs into the form on the front side of the website
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message").value;

    //Displays the result of the submission
    result.innerHTML = `
    <h3>Form Submission Result:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});