// Variables
let country = "Kenya";
let animals = ["Lion", "Elephant", "Rhino", "Buffalo", "Leopard"];
let numSpecies = animals.length;

// Conditionals
let safariStatus;
if (numSpecies > 3) {
  safariStatus = "Kenya is rich in wildlife!";
} else {
  safariStatus = "There are only a few animals listed.";
}

// Display result
document.getElementById("basics-output").textContent =
  `Country: ${country}, Species listed: ${numSpecies}. ${safariStatus}`;


// Part 2: Functions

// Function 1: Format animal name
function formatAnimalName(name) {
  return name.toUpperCase();
}

function showFormattedAnimal() {
  let animal = "cheetah";
  let formatted = formatAnimalName(animal);
  document.getElementById("function-output").textContent =
    `Formatted Animal: ${formatted}`;
}

// Function 2: Calculate total animals
function totalAnimals(list) {
  return `There are ${list.length} animals in the list.`;
}


// Part 3: Loops
// Loop 1: For loop to list animals
function listAnimals() {
  let list = document.getElementById("animal-list");
  list.innerHTML = ""; // clear previous list
  for (let i = 0; i < animals.length; i++) {
    let li = document.createElement("li");
    li.textContent = animals[i];
    list.appendChild(li);
  }
}

// Loop 2: Countdown (while loop)
function countdownSafari() {
  let count = 5;
  let result = "";
  while (count > 0) {
    result += `Safari starts in ${count}... `;
    count--;
  }
  result += "Go!";
  document.getElementById("countdown").textContent = result;
}


// Part 4: DOM Manipulation

// DOM 1: Toggle info paragraph
function toggleInfo() {
  let info = document.getElementById("kenya-info");
  console.log(info.classList.value)
  if (info.classList.value === "hidden"){
    info.classList.add("show");
    info.classList.remove("hidden");
  }
  else{
    info.classList.add("hidden");
    info.classList.remove("show");
  }
}

// DOM 2: Add new animal dynamically
function addAnimal() {
  let newAnimal = prompt("Enter a new animal found in Kenya:");
  if (newAnimal) {
    let div = document.getElementById("new-animals");
    let p = document.createElement("p");
    p.textContent = `🐾 ${newAnimal}`;
    div.appendChild(p);
  }
}

// Using a function inside DOM manipulation
document.body.onload = function () {
  let footer = document.createElement("footer");
  footer.textContent = totalAnimals(animals);
  document.body.appendChild(footer);
};
