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

console.log(getHumanChoice());

