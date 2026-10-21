console.log("Linked");

//DOM and Basic Manipulation
//What is the DOM?
//Document Object Model, this is how the browser repressents your webpage in memory
//HTML elements becomes a JS object that we can access, change, or delete
//JS to change text, images, colors, classes, etc. This occurs after the web page fully loads


//Change text content with JS
//We are going to find the HTML Element via its ID attribute
const title=document.getElementById("title");
//document, represents the whole webpage loaded in the browser
//.getElementByID("title"), finds the element in the html with the exact ID
//Const, means that the variable reference won't change,
//it will always point to the same DOM element

title.textContent="Welcome to my Webpage!"
//.textContent accesses or changes the text inside the element

//Selecting Elements
//getElementbyID, selects one element by its ID                 document.getElementByID("title")

//querySelector, Selects the first match(ID, Class, tag)        document.querySelector(".main")

//querySelectorAll(), Returns a Nodelist of all matches         document.querySelectorAll("p")

//QuerySelector
const mainSection=document.querySelector(".main");
mainSection.style.backgroundColor="brown";

//QuerySelectorAll
const paragraphs=document.querySelectorAll("p");
//Loop through all p elements anf change their text
paragraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1} modified by querySelectorAll()`;
    para.style.color = "blue";
});



//Adding interactivity with Event Listeners
//Select Button
const button=document.getElementById("toggle");
//Listen for a button click
button.addEventListener("click",() =>{
    //toggle the highlight class on the body
    document.body.classList.toggle("highlight");

});
