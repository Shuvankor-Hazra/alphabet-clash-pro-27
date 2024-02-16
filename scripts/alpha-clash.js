// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");
//     const playGroundSection = document.getElementById("play-ground");
//     playGroundSection.classList.remove("hidden");
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  if(playerPressed === "Escape"){
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    console.log("win");
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    // ------------------------------------------
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    // ------------------------------------------
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("loss");
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
    // ------------------------------------------
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
//   console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
