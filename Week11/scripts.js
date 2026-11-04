console.log("linked")

const clickBttn=document.getElementById("clickBttn");

clickBttn.addEventListener("click",()=> { //When you click a new window opens to alert the user
    alert("Wow, I see you like to follow orders from a button, pathetic...");
});

const dblBttn=document.getElementById("dblBttn");

dblBttn.addEventListener("dblclick",()=> {
    dblBttn.textContent="Ow! Be careful with your clicks!"; //When user double clicks this pops up on button
});

const hoverText=document.getElementById("hoverText"); //When over the text it changes color
hoverText.addEventListener("mouseover", ()=> {
    hoverText.style.color="white";
});

hoverText.addEventListener("mouseout", ()=> { //Changes color of text when hovered
    hoverText.style.color="Grey"
});

const k = document.getElementById("k"); //Tells user what key they are entering

document.addEventListener("keydown", function (event) {
    document.getElementById("demo").innerHTML = "You pressed: " + event.key //Part of the code for the user interface with const k
});

// const textInput=document.getElementById("textInput"); //Allows user to enter any key and it will find the right one
// textInput.addEventListener("input", ()=> {
//     console.log("User entered:", textInput.value);
// });

const changeBttn=document.getElementById("changeBttn");

changeBttn.addEventListener("click",()=> {
    alert("You are perfect the way you are!");
});
