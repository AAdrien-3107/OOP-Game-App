/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        }

    addPhraseToDisplay() {
    
		const ul = document.querySelector("ul");
        const splitLetter = this.phrase.split('');

		for(let char of splitLetter){
			if(char !== ' '){
				let letterLi = document.createElement('li');
				letterLi.innerHTML = char;
				letterLi.classList.add("letter");
				letterLi.classList.add("hide");
				ul.appendChild(letterLi) ;
				} else {
				let spaceLi = document.createElement('li');
				spaceLi.innerHTML = char;
				spaceLi.className = "space";
				ul.appendChild(spaceLi) ;	
				} 
		}			
       
        return splitLetter ;
    
    }
    
 }

 

 
