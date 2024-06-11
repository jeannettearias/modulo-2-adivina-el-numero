'use strict'

// GLOBAL VARIABLES

const inputValue = document.querySelector('.js__input');
const btn = document.querySelector('.js__btn');

// GENERATE THE RANDOM NUMBER (1 - 100) TO BE GUESSED 

function getRandomNumber(max) {
    return parseInt(Math.random() * max);
   

  }

  // FUNCTIONS AND EVENTS

// GET THE VALUE INPUT BY USER 
function getValueFromInput() {

    const input = inputValue.value;

    return parseInt(input);
}

// print random number in console  
function printRandomNumber (number) {
    console.log("Mi número aleatorio es " + number)
} 


// comparison of number obtained vs input by user 
function compareNumberUser (numberByUser, randomNumber) {

    console.log(numberByUser, randomNumber);
    if (numberByUser < 1 || numberByUser > 100) {
        return "El número debe estar entre 1 y 100"
    }

    if (randomNumber === numberByUser) {
        return "Has ganado campeona!!!";
    }
    else if (randomNumber > numberByUser && numberByUser < 100) {
        return "Demasiado bajo";

    }
    else if (randomNumber < numberByUser) {
        return "Demasiado alto";

    }
    
}

    //CLICK BUTTON FUNCTION 
  const handleClickBtn = (ev) => {
    ev.preventDefault();

    let numberByUser = getValueFromInput();

    let randomNumber = getRandomNumber(100)
    
    printRandomNumber(randomNumber);

    let game = compareNumberUser(numberByUser,randomNumber);

    console.log(game);

  };
  
  btn.addEventListener( 'click', handleClickBtn );


// GENERATE ANSWERS TEXTS 




// GENERATE THE NUMBER OF TIME THAT USER HAS TRIED

