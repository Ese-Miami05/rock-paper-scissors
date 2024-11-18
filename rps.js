function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;
    let gameWords = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return gameWords[Math.floor(Math.random() * gameWords.length)];
    }
    
    function getHumanChoice(){
        let humanChoice = prompt("rock, paper or scissors? pick one!").toLowerCase();
        for(let i =0; i < gameWords.length; i++){
            if(humanChoice === gameWords[i]){
                return humanChoice;
            } 
             } 
                return "Please choose the correct word!";
             
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "invalid") {
            alert("Invalid choice. You lose this round.");
            computerScore++;
            return;
        }

        if (humanChoice === computerChoice) {
            alert(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            alert(`You win this round! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            alert(`You lose this round! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 1; i <= 5; i++) {
        alert(`Round ${i}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        alert(`Current Scores: Human: ${humanScore}, Computer: ${computerScore}\n`);
    }
    
    // Declare the winner
    if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        alert("Sorry, you lost the game. Better luck next time!");
    } else {
        alert("It's a tie game! Well played!");
    }
}

// Start the game
playGame();

