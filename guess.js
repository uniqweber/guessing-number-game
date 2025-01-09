// const gameNumber = parseInt(Math.random() * 100 + 1);
const gameNumber = 15;
const userForm = document.getElementById("userForm");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const showErr = document.getElementById("error");
const showPevGuess = document.getElementById("previousGuess");
const showUserAttempt = document.getElementById("attempt");
const currentGuessElement = document.createElement("div");
const gameOver = document.getElementById("gameOver");
const userWon = document.getElementById("won");
const hint = document.getElementById("hint");
const startGame = document.getElementById("starGame");

let gameAttempt = 10;
let gameMode = false;
let arr = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameMode = true;
  const currentGuess = userInput.value;
  if (gameMode && currentGuess >= 1 && currentGuess <= 100) {
    showErr.innerText = "";
    userWon.innerText = "";

    winnerCheck(currentGuess);
  } else {
    if (currentGuess <= 0) {
      showErr.innerText = "Enter a number more than 0";
      hint.innerText = "";
      userForm.reset();
    } else if (currentGuess > 100) {
      showErr.innerText = "Enter a number less than 100";
      hint.innerText = "";
      userForm.reset();
    }
  }
});

function winnerCheck(currentGuess) {
  if (currentGuess == gameNumber) {
    gameMode = false;
    hint.innerText = "";
    showErr.innerText = "";
    userWon.innerText = "Congratulations! You Won";
    userInput.setAttribute("disabled", "");
    userInput.classList.add("cursor-not-allowed");
    submitBtn.setAttribute("disabled", "");
    submitBtn.classList.add("cursor-not-allowed");
    startGame.removeAttribute("hidden");
    userForm.reset();
  } else {
    attemptHave(currentGuess);
  }
}

function attemptHave(guess) {
  showPevGuess.innerHTML = "";
  arr.push(guess);
  gameNumber < guess
    ? (hint.innerText = "You Guess TOOO High")
    : (hint.innerText = "You Guess TOOO Low");
  gameAttempt--;
  showUserAttempt.innerText = gameAttempt;
  if (gameAttempt > 0 && gameAttempt <= 10) {
    arr.forEach((item) => {
      const listItem = document.createElement("div");
      listItem.textContent = `${item}`;
      showPevGuess.appendChild(listItem);
    });
    userForm.reset();
  } else {
    userInput.setAttribute("disabled", "");
    submitBtn.setAttribute("disabled", "");
    userInput.classList.add("cursor-not-allowed");
    submitBtn.classList.add("cursor-not-allowed");
    startGame.removeAttribute("hidden");
    gameMode = false;
    showErr.innerText = "Sorry You Lost the game";
    hint.innerText = "";

    userForm.reset();
  }
}

startGame.addEventListener("click", () => {
  userInput.removeAttribute("disabled");
  submitBtn.removeAttribute("disabled");
  userInput.classList.remove("cursor-not-allowed");
  submitBtn.classList.remove("cursor-not-allowed");
  userWon.innerText = "";
  startGame.setAttribute("hidden", "");
});

/* 


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (gameMode && userInput.value > 0 && userInput.value <= 100) {
    if (gameAttempt > 0 && gameAttempt <= 10) {
      gameAttemptCheck(userInput);
    } else {
      showErr.innerText = "You Lost the game!";
    }
  } else {
    if (userInput.value == 0 || userInput.value == "") {
      showErr.innerText = "Enter a number more than 0";
      userForm.reset();
    } else {
      showErr.innerText = "Enter a number less than 100";
      userForm.reset();
    }
  }
});

function gameAttemptCheck(userInput) {
  arr.push(userInput.value);
  gameAttempt--;
  showErr.innerText = "";
  showUserAttempt.innerText = gameAttempt;
  winnerCheck(userInput);
}

function winnerCheck(userInput) {
  if (userInput.value == gameNumber) {
    userWon.innerText == "Congratulation! you Won the game";
  }
}



*/
