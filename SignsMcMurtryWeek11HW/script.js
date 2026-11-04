//Find button by its ID
const themeButton=document.getElementById("themeToggle"); //Needed to match the code in html

//Listen for a click event on that button, meanings that it knows when you click something
themeButton.addEventListener("click", () => { //Needed to add addEventListener

    //Add/Remove the dark class on body
    document.body.classList.toggle("dark");
    console.log("Theme Changed!");
});

const addBttn=document.getElementById("addItem"); //added item list
const list=document.getElementById("items");
let counter=1; //Keeps track of number of items

addBttn.addEventListener("click", () => {
    //Creates a new list
    const newItem=document.createElement("li");

    //Description about each item 
    newItem.textContent="Potato" + counter;

    //Adds a new item to the list
    list.appendChild(newItem);

    counter++; //Increase number by 1
});

//Removes item when you directly click on a list
list.addEventListener("click", (event) => {
    if(event.target.tagName==="LI") {
        event.target.remove(); //Delete List
    }
});

const keyOutput=document.getElementById("keyOutput");

document.addEventListener("keyup", (event) => { //Says what key you hit
    keyOutput.textContent="You pressed: " + event.key;
});