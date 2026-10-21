// Check to see if properly linked: make sure file is linked
console.log("DOM HW loaded");

// 1) Grab your title and main section
const titleEl = document.getElementById("");
const mainEl = document.getElementById("");
// 2) Update the title text
titleEl.textContent = " — Powered by JavaScript";
// WHY: textContent replaces the visible text inside the element safely.

const imgEl = document.getElementById("");
// Swap to a new image and alt text (use any public image URL)
imgEl.src = "";
imgEl.alt = "";
// WHY: Changing attributes lets you swap content without editing HTML.

// Example data structure — use your own keys/values
const items = [
{ name: "", info: "" },
{ name: "", info: "" },
{ name: "", info: "" }
];
// Target the list you created in HTML
const listEl = document.getElementById("");
listEl.innerHTML = ""; // clear existing
// Create and append list items from your data
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});
// WHY: createElement + appendChild builds real nodes (safer than string HTML).

const toggleBtn = document.getElementById("");
// Toggle on the <main> or on document.body — your choice
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("");
});
// WHY: classList.toggle adds the class if missing, removes if present.
// This keeps style logic in CSS, behavior in JS (good separation).

const swapBtn = document.getElementById("");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "";
imgEl.alt = "";
swapped = true; } else {
imgEl.src = "";
imgEl.alt = "";
swapped = false;
}
});
// WHY: This shows conditional logic + DOM attribute updates on a user action.