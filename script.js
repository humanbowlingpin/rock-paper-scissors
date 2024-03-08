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
  function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "it's a tie!";
    } else if (playerSelection === "rock") {
      switch (computerSelection) {
        case "paper":
          return "you lose";
        case "scissors":
          return "you win";
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "scissors":
          return "you lose";
        case "rock":
          return "you win";
      }
    } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case "rock":
          return "you lose";
        case "paper":
          return "you win";
      }
    } else {
      return "lose due to not answering properly";
    }
  }
  function playGame() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const computerChoice = getComputerChoice();
      const userInput = prompt("rock or paper or scissors").toLowerCase();
      let result = playOneRound(userInput, computerChoice);
      console.log(result + ", the computer chooses " + computerChoice + ".");
      if (result === "you win") {
        userScore++;
      } else if (result === "you lose") {
        computerScore++;
      }
    }
    if (userScore === computerScore) {
      overallResults.textContent =
        "out of 5 rounds, you and the computer each win " +
        userScore +
        " times. making both of you tie.";
    } else if (userScore > computerScore) {
      overallResults.textContent =
        "out of 5 rounds, you win " +
        userScore +
        " times! The computer wins " +
        computerScore +
        " times, making you the winner of this game.";
    } else {
      overallResults.textContent =
        "out of 5 rounds, you win " +
        userScore +
        " times. The computer wins " +
        computerScore +
        " times, making you the loser of this game.";
    }
  }
  const overallResults = document.querySelector("#overallresults");
  playGame();
  