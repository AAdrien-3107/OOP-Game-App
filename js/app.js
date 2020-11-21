/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

{
let game = "";
const button = document.getElementById("btn__reset");
const buttonKey = document.getElementsByClassName("key");
const mainScreen = document.getElementById("overlay");

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
