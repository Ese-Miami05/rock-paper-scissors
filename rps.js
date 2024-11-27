// Initialize scores and gameWords
let humanScore = 0;
let computerScore = 0;
const gameWords = ["rock", "paper", "scissors"];

// DOM elements
const scoreboardDiv = document.querySelector('.scoreboard');
const resultsDiv = document.querySelector('.results');
const buttons = document.querySelectorAll('button');

// Function to get computer's choice
function getComputerChoice() {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
}

// Function to update the scoreboard
function updateScoreboard() {
  scoreboardDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Function to play a single round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultsDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultsDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  updateScoreboard();
  checkWinner();
}

// Function to check if someone has won the game
function checkWinner() {
  if (humanScore === 5) {
    resultsDiv.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.textContent = "Sorry, you lost the game. Better luck next time!";
    disableButtons();
  }
}

// Function to disable buttons after the game ends
function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

// Event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.id); // Pass the button's ID as the human's choice
  });
});

// Initial display setup
updateScoreboard();
