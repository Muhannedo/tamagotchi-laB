/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepinss: 0,
};

/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomState = document.getElementById("boredom-stat");
const hungerState = document.getElementById("hunger-stat");
const sleepinessState = document.getElementById("sleepiness-stat");

const playButton = document.getElementById("play");
const feedButton = document.getElementById("feed");
const sleepButton = document.getElementById("sleep");

const gameMessageElement = document.getElementById("message");
const resetButtonElement = document.getElementById("restart");

/*-------------------------------- Functions --------------------------------*/

function playButtonClick() {
  state.boredom = 0;
  render();
};

function feedButtonnClick() {
  state.hunger = 0;
  render();
};

function sleepButtonClick() {
  state.sleepinss = 0;
  render();
};

function init() {
  gameOver = false;
  resetButtonElement.classList.add("hidden");
  gameMessageElement.classList.add("hidden");
  state.boredom = 0;
  state.hunger = 0;
  state.sleepinss = 0;

  timer = setInterval(runGame, 2000);
  render();
};

function runGame() {
  updateStates();
  checkGameOver();
  render();
};

function render() {
  boredomState.textContent = state.boredom;
  hungerState.textContent = state.hunger;
  sleepinessState.textContent = state.sleepinss;

  if (gameOver) {
    clearInterval(timer); // Stop the timer when the game is over
    gameMessageElement.textContent = "Game Over!";
    gameMessageElement.classList.remove("hidden");
    resetButtonElement.classList.remove("hidden"); // Show the reset button
  }
};

function updateStates() {
  state.boredom += Math.floor(Math.random() * 4);
  state.hunger += Math.floor(Math.random() * 4);
  state.sleepinss += Math.floor(Math.random() * 4);
};

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepinss >= 10) {
    gameOver = true;
  }
};

/*----------------------------- Event Listeners -----------------------------*/

init();
playButton.addEventListener("click", playButtonClick);
feedButton.addEventListener("click", feedButtonnClick);
sleepButton.addEventListener("click", sleepButtonClick);
resetButtonElement.addEventListener("click", init);
