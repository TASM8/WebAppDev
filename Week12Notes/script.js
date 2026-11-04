//select the form element
//This throws user input into console
const form = document.getElementById("contractForm");
//Listen for the submit event
form.addEventListener("submit", (event)=> {
    event.preventDefault(); //this stops the page from reloading when submitting the form
    //Get the input value
    const name=document.getElementById("name").value;
    //In the console, state Hello "username"
    form.innerHTML=`<p>Hello, ${name}! Thanks for your submission.</p>`;


});


//Display data on the front side of the website
// const result=document.getElementById("contactForm");
// result.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const name=document.getElementById("name").value;
//     result.innerHTML=`<p>Hello, ${name}! Thanks for your submission.</p>`;


// });