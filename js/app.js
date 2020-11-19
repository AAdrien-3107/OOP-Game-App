/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase}`);
});
game.getRandomPhrase();
*/



//const game = new Game();
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game = '';
const button = document.getElementById('btn__reset');
const buttonKey = document.getElementsByClassName("key");
const mainScreen = document.getElementById('overlay');


button.addEventListener('click', function(){

    
    game = new Game()
    game.startGame()  
})

for(let button of buttonKey){
    button.addEventListener('click', function(){	    
    game.handleInteraction(button) }	)};
    	
