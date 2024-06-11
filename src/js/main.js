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

    console.log(input);

    return parseInt(input);
}


    //CLICK BUTTON FUNCTION 
  const handleClickBtn = (ev) => {
    ev.preventDefault();

    getValueFromInput();

  };
  
  btn.addEventListener( 'click', handleClickBtn );


// GENERATE ANSWERS TEXTS 




// GENERATE THE NUMBER OF TIME THAT USER HAS TRIED

