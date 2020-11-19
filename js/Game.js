/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor () {
        this.phrase = phrase;
        this.missedGuess = 0 ;
        this.activePhrase = null;

    }
    phrases = [
        {phrase : 'Life is like a box of chocolate'},
        {phrase : 'There is no trying'},
        {phrase : 'May the force be with you'},
        {phrase : 'You have to see the matrix for yourself'},
        {phrase : 'You talking to me'}
     ];
    

    getRandomPhrase() {
            
            let randomQuote = Math.floor(Math.random() * 5);
            return game.phrases[randomQuote];        
    };
     startGame(){
         const overLay = document.getElementById('overlay');
         overLay.style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         let phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
     }

   
     handleInteraction(buttonKey){
        let phrase = new Phrase(this.activePhrase.phrase);
        phrase.activePhrase = phrase;
        if(buttonKey){
            buttonKey.disabled = true  	
            if(phrase.checkLetter(buttonKey.innerHTML)){
                    buttonKey.className = "chosen";
                    phrase.showMatchedLetter(buttonKey.innerHTML);
                        if(game.checkForWin()){                  	   	 
                            game.gameOver()}
            }else{
                buttonKey.className = "wrong";
                game.removeLife()
                console.log("wrong letter ");}
       }
    }
    checkForWin(){
        const ul = document.querySelector("ul")
        if(ul.innerHTML.includes(`<li class="letter hide"`)){
        return false}		
        else{return true}
    }
    removeLife(){	    	
        let li = document.querySelectorAll('#scoreboard img')	    		
           this.missedGuess ++
        if(this.missedGuess < 5){
            li[5 - this.missedGuess].src = "images/lostHeart.png"}
        else if(this.missedGuess === 5){
            this.gameOver()
        }
    }
    gameOver(){
        const mainScreen = document.getElementById('overlay')
        mainScreen.style.display = "inherit"
        const h1 = document.getElementById('game-over-message')                             
        if(this.missedGuess === 5){                 
           h1.innerHTML = `Sorry, you lost! Better luck next time.`
           button.innerHTML = "Try again"
           mainScreen.className = 'loss'  
           game.resetGame()}            	
       else if(this.missedGuess < 5){
           h1.innerHTML = `Congratulations, You won! The quote was
           <br><p class= "end-quote">"${game.activePhrase.phrase.toUpperCase()}"</p>`
           button.innerHTML = "Play again"          	
           mainScreen.className = 'win'           
           game.resetGame()
       }
    }
    resetGame(){
        button.addEventListener("click", function(){
      let li = document.querySelectorAll('#scoreboard img')
      for(let i = 0; i < li.length; i++){
          li[i].src = "images/liveHeart.png"}
      const wrongButton = document.querySelectorAll('.wrong')
      for(let i = 0; i < wrongButton.length; i++){
            wrongButton[i].className = "key"
            wrongButton[i].disabled = false}
      const chosenButton = document.querySelectorAll('.chosen')
      for(let i = 0; i < chosenButton.length; i++){
            chosenButton[i].className = "key"
            chosenButton[i].disabled = false}          
      const ul = document.querySelector("ul")
      const list = ul.querySelectorAll("li")
      for(let x = 0; x < list.length; x++){
            ul.removeChild(list[x])}
            game.activePhrase.addPhraseToDisplay() })          								
      }
  }

