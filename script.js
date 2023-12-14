// DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

  let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
currentStep = e.target.id === "next" ? ++ currentStep : --currentStep
console.log(currentStep)
}

// add click even listener
buttons.forEach(button => {
    button.addEventListener("click", updateSteps);
})