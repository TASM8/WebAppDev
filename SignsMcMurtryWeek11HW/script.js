//Find button by its ID
const themeButton=document.getElementById("themeToggle"); //Needed to match the code in html

//Listen for a click event on that button
themeButton.addEventListener("click", () => { //Needed to add addEventListener

    //Add/Remove the "dark" class on body
    document.body.classList.toggle("dark");
    console.log("Theme Changed!");
});

const addBttn=document.getElementById("addItem"); //added item list
const list=document.getElementById("items");
let counter=1; //Keeps track of number of items

addBttn.addEventListener("click", () => {
    //Create a new list item
    const newItem=document.createElement("li");

    //Give it text (Item 1, Item 2, etc...)
    newItem.textContent="Potato" + counter;

    //Add to the list of page
    list.appendChild(newItem);

    counter++; //Increase number
});

//Remove item when clicked directly on a list
list.addEventListener("click", (event) => {
    if(event.target.tagName==="LI") {
        event.target.remove(); //Delete List
    }
});

const keyOutput=document.getElementById("keyOutput");

document.addEventListener("keyup", (event) => {
    keyOutput.textContent="You pressed: " + event.key;
});