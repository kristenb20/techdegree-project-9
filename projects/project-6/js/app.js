
//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById("overlay");
const visbilePhrase = document.querySelector('#phrase ul'); //phrase hidden letters
const show = document.getElementsByClassName('show'); // visible letters
const letters = document.getElementsByClassName('letter'); // phrase letters
const liveHearts = document.querySelectorAll('.tries img'); // liveHeart.png image
const title = document.querySelector('.title'); // "Wheel of Success" title
let missed = 0; //Missed guesses


//Phrases
phrases = [
  'come on down',
  'can i buy a vowel',
  'big bucks no wammies',
  'deal or no deal',
  'you are the weakest link goodbye'
];

//Event listener to the “Start Game” button to hide the start screen overlay
startGame.addEventListener("click", () => {
  overlay.style.display = "none";
});


//getRandomPhraseAsArray function
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase.split("");
}

//display random phrase
function addPhraseToDisplay(arr) {
  for (i = 0; i < arr.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = arr[i];
      visbilePhrase.appendChild(listItem);
      if (arr[i] !== " " ) {
        listItem.className = "letter";
      } else {
        listItem.className = "space";
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


//checkLetter function
function checkLetter (guess) {
  let match = null;
  for (i = 0; i < letters.length; i++) {
    if (guess.textContent == letters[i].textContent) {
      letters[i].classList.add("show");
      guess.style.background = '#5ed163';
       match = true;
  }
}
  return match;
}


//Event listener to the keyboard
qwerty.addEventListener( "click", (e) => {
  if(e.target.tagName == 'BUTTON') {
    const clickedLetter = e.target;
    clickedLetter.classList.add("chosen");
    clickedLetter.disabled = 'true';
    const letterFound = checkLetter(clickedLetter);

    if( letterFound === null){
    let currentMissed = missed;
    liveHearts[currentMissed].setAttribute("src", "images/lostHeart.png");
    missed += 1;
    }
  }
  checkWin();
});


//checkWin function
function checkWin() {
  if(show.length === letters.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    title.textContent = 'You won!!';
    startGame.textContent = 'Play again';
  }

  else if (missed >= 5) {
    overlay.style.display = 'flex';
    overlay.className = 'lose';
    title.textContent = 'You lost!!';
    startGame.textContent = 'Play again';
  }
}

window.addEventListener ( "click", (e) => {
    if(e.target.textContent === 'Play again'){
      missed = 0;
      window.location.reload(true);
    }
});
