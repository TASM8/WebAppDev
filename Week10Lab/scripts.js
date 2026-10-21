//Find the element with ID "title"
const title = document.getElementById("title");

//Replaces the text inside
title.textContent = "Hello from Javascript!";

//change color and font style dynamically
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";

//Selects the first element with class "main"
const mainSection = document.querySelector(".main");
//Add a light gray background color
mainSection.style.backgroundColor = "#f0f0f0";

//Selects all <p> elements in the document
const paragraphs = document.querySelectorAll("p");

//Loop through each paragraph and update text + color
paragraphs.forEach((p, i) => {
    p.textContent = `Paragraph ${i + 1}updated by JS`;
    p.style.color = "green";
})

//Create an array of link data
const resources = [
    {text: "CSI", href: "https://www.csi.edu"},
    {text: "MDN Web Docs", href: "https://developer.mozilla.org"},
    {text: "Eloquent Javascript", href: "https://eloquentjavascript.net"}
];

//Select the <ul> where links will go
const list = document.getElementById("links");
//Clear exist list items (if any)
list.innerHTML = "";

//Loop through each resource and build list items
for (const item of resources) {
    const li = document.createElement("li"); //create a <li>
    const a = document.createElement("a"); //create an <a>
    a.textContent = item.text; //set link destination
    a.href = item.href; //set link destination
    a.target = "_blank"; //open in new tab
    li.appendChild(a); //add <a> inside <li>
    list.appendChild(li); //add <li> to the <ul>
}