/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * js */



class Game {
    
    phrases = [
        { phrase: "Life is like a box of chocolate" },
        { phrase: "There is no trying" },
        { phrase: "May the force be with you" },
        { phrase: "You have to see the matrix for yourself" },
        { phrase: "You talking to me" },
      ];

    constructor() {
    this.phrase = phrase;
    this.missedGuess = 0;
    this.activePhrase = null;
  }
  

  /* Method generate a random number and assign it to one of the class in my obj 
  and returns only the value of the prop phrase. */
  getRandomPhrase() {
    let randomQuote = Math.floor(Math.random() * 5);
    //console.log(phrases[randomQuote].phrase);
    console.log(this.hi);
    return this.phrases[randomQuote].phrase;
  }

  // This methode generate a phrase from the getRandomPhrase() and displays it on the sceen.
  startGame() {
    const overLay = document.getElementById("overlay");
    overLay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    let phrase = new Phrase(this.activePhrase);
    console.log(phrase);
    phrase.addPhraseToDisplay();
  }

  /* This methode checkes the input with each char on the phrase then shows on the UI the matched and unmatched char
  and check is the game is over by wining or no more life. */
  handleInteraction(buttonKey) {
    let phrase = new Phrase(this.activePhrase);
    phrase.activePhrase = phrase;
    if (buttonKey) {
      buttonKey.disabled = true;
      if (phrase.checkLetter(buttonKey.innerHTML)) {
        buttonKey.className = "chosen";
        phrase.showMatchedLetter(buttonKey.innerHTML);
        if (this.checkForWin()) {
          this.gameOver();
        }
      } else {
        buttonKey.className = "wrong";
        this.removeLife();
      }
    }
  }



  //Methode checks if the li contain the value "letter hide" if it does then the game continues or else the game is done and the player wins.
  checkForWin() {
    const ul = document.querySelector("ul");
    if (ul.innerHTML.includes(`<li class="letter hide"`)) {
      return false;
    } else {
      return true;
    }
  }

  //Methode removes imges for each missedGuess.
  removeLife() {
    let li = document.querySelectorAll("#scoreboard img");
    this.missedGuess++;
    if (this.missedGuess < 5) {
      li[5 - this.missedGuess].src = "images/lostHeart.png";
    } else if (this.missedGuess === 5) {
      this.gameOver();
    }
  }

  //Methode tell if the player wins or lose and calls the resetGame() if the player press the button.
  gameOver() {
    const mainScreen = document.getElementById("overlay");
    mainScreen.style.display = "inherit";
    const h1 = document.getElementById("game-over-message");
    if (this.missedGuess === 5) {
      h1.innerHTML = `Sorry, you lost! Better luck next time.`;
      button.innerHTML = "Try again";
      mainScreen.className = "loss";
      this.resetGame();
    } else if (this.missedGuess < 5) {
      h1.innerHTML = `Congratulations, You won! The quote was
           <br><p class= "end-quote">"${this.activePhrase.toUpperCase()}"</p>`; //changed from game to this, removed phrase
      button.innerHTML = "Play again";
      mainScreen.className = "win";
      this.resetGame();
    }
  }

    //Methode reset all the value and generate a new phrase.
    resetGame() {
    //button.addEventListener("click", function () { //not needed
      let li = document.querySelectorAll("#scoreboard img");
      for (let i = 0; i < li.length; i++) {
        li[i].src = "images/liveHeart.png";
      }
      const wrongButton = document.querySelectorAll(".wrong");
      for (let i = 0; i < wrongButton.length; i++) {
        wrongButton[i].className = "key";
        wrongButton[i].disabled = false;
      }
      const chosenButton = document.querySelectorAll(".chosen");
      for (let i = 0; i < chosenButton.length; i++) {
        chosenButton[i].className = "key";
        chosenButton[i].disabled = false;
      }
      const ul = document.querySelector("ul");
      const list = ul.querySelectorAll("li");
      for (let x = 0; x < list.length; x++) {
        ul.removeChild(list[x]);
      }
      
      console.log("called");
  }
}
