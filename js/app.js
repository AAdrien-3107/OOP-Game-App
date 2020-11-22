/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.getElementById("btn__reset");
const buttonKey = document.getElementsByClassName("key");
const mainScreen = document.getElementById("overlay");

{// Scope the global variable for security.
let game = "";


button.addEventListener("click", function () {
  game = new Game();
  game.startGame();
});

for (let button of buttonKey) {
  button.addEventListener("click", function () {
    game.handleInteraction(button);
  });
}
}
