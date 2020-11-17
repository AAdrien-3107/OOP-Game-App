/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor () {
        this.phrase = phrase;


    }
    phrases = [
        {phrase : 'Life is like a box of chocolate'},
        {phrase : 'There is no trying'},
        {phrase : 'May the force be with you'},
        {phrase : 'You have to see the matrix for yourself'},
        {phrase : 'You talking to me'}
     ];
    missedGuess = 0 ;
    activePhrase = null;

    getRandomPhrase() {
            
            let randomQuote = Math.floor(Math.random() * 5);
            return game.phrases[randomQuote];        
    };
     startGame(){
         const overLay = document.getElementById('overlay');
         overLay.style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         var phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
     }

   
  
    

}