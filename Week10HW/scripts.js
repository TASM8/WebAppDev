// Check to see if properly linked: make sure file is linked
console.log("DOM HW loaded");

// Select the page elements that JavaScript will update
const titleEl = document.getElementById("adventureTitle");
const mainEl = document.getElementById("adventureMain");
const listEl = document.getElementById("questList");
const imageEl = document.getElementById("adventureImage");

// Select the first matching intro paragraph
const introEl = document.querySelector(".adventureIntro");

// Select all adventure buttons
const buttons = document.querySelectorAll(".adventure-button");

// Set the type on each button
buttons.forEach((button) => {
    button.setAttribute("type", "button");
});

// Update the title and intro
titleEl.textContent = "D&D Adventure Guide — Powered by JavaScript";
introEl.textContent =
    "Greetings, adventurer! Your next legendary quest awaits.";

// Quests options
const quests = [
    {
        name: "The Dragon's Hoard",
        info: "Travel to the mountains and uncover a legendary treasure."
    },
    {
        name: "The Lost Spellbook",
        info: "Search an ancient library for a wizard's missing spellbook."
    },
    {
        name: "The Cursed Forest",
        info: "Investigate a mysterious curse affecting a nearby village."
    },
    {
        name: "The Goblin King's Challenge",
        info: "Negotiate with a goblin king to restore peace."
    },
    {
        name: "The Forgotten Dungeon",
        info: "Explore a hidden dungeon filled with secrets and puzzles."
    }
];

// Randomize list
listEl.innerHTML = "";

quests.forEach((quest) => {
    const listItem = document.createElement("li");

    listItem.classList.add("quest-item");
    listItem.textContent = `${quest.name} — ${quest.info}`;

    listEl.appendChild(listItem);
});

// Highlight toggle
const highlightButton = document.getElementById("highlightButton");

// Click and remove
highlightButton.addEventListener("click", () => {
    mainEl.classList.toggle("quest-highlight");
});

// Button changes the adventure image
const imageButton = document.getElementById("imageButton");

// Keeps track of pictures
let imageChanged = false;

// Changes pictures
imageButton.addEventListener("click", () => {
    if (imageChanged === false) {
        imageEl.src =
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80";

        imageEl.alt = "A peaceful forest surrounded by trees";

        imageChanged = true;
    } else {
        imageEl.src =
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80";

        imageEl.alt = "A mysterious forest waiting to be explored";

        imageChanged = false;
    }
});

// Night mode
const darkModeButton = document.getElementById("darkModeButton");

// Night mode main
darkModeButton.addEventListener("click", () => {
    mainEl.classList.toggle("night-mode");
});

// DOM
const messageEl = document.getElementById("adventurerMessage");

// Change the text and color using JavaScript
messageEl.textContent =
    "Brave adventurer, your story begins here!";

messageEl.style.color = "#8b4513";

console.log("Adventure quests have been added to the page.");
