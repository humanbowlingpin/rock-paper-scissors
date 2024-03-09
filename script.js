function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
    default:
      console.log("error generating");
  }
}
let computerChoice;
function playOneRound(playerSelection) {
  computerChoice = getComputerChoice();
  if (playerSelection === computerChoice) {
    return "it's a tie!";
  } else if (playerSelection === "rock") {
    switch (computerChoice) {
      case "paper":
        return "you lose";
      case "scissors":
        return "you win";
    }
  } else if (playerSelection === "paper") {
    switch (computerChoice) {
      case "scissors":
        return "you lose";
      case "rock":
        return "you win";
    }
  } else if (playerSelection === "scissors") {
    switch (computerChoice) {
      case "rock":
        return "you lose";
      case "paper":
        return "you win";
    }
  } else {
    return "lose due to not answering properly";
  }
}
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function generateFiveTurnResult(oneroundResult) {
  if (oneroundResult === "you win") {
    userScore++;
  } else if (oneroundResult === "you lose") {
    computerScore++;
  } else {
    tieScore++;
  }
  if (userScore + computerScore + tieScore == 5) {
    const fiveTurnResult = document.createElement("h3");
    resultsList.appendChild(fiveTurnResult);

    if (userScore === computerScore) {
      fiveTurnResult.textContent =
        "out of 5 rounds, you and the computer each win " +
        userScore +
        " times. making both of you tie.";
    } else if (userScore > computerScore) {
      fiveTurnResult.textContent =
        "out of 5 rounds, you win " +
        userScore +
        " times! The computer wins " +
        computerScore +
        " times, making you the winner of this game.";
    } else {
      fiveTurnResult.textContent =
        "out of 5 rounds, you win " +
        userScore +
        " times. The computer wins " +
        computerScore +
        " times, making you the loser of this game.";
    }
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
  }
}

const buttons = document.querySelectorAll(".btn");
const deleteButton = document.querySelector(".delete-button");

const resultsList = document.querySelector(".result-list");
let playerSelection;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.classList[1];

    const result = document.createElement("p");
    resultsList.appendChild(result);
    const oneroundResult = playOneRound(playerSelection);
    result.textContent =
      oneroundResult + ", the computer chooses " + computerChoice + ".";
    generateFiveTurnResult(oneroundResult);
  });
});

deleteButton.addEventListener("click", () => {
  resultsList.innerHTML = "";
  userScore = 0;
  computerScore = 0;
  tieScore = 0;
});
