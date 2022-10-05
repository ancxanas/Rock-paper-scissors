let playerScore = 0;
let computerScore = 0;
game();

function playRound(playerSelection, computerSelection) {    // plays a single round and updates score
    console.log("What is your choice?")
    console.log("Player selects " + playerSelection)
    console.log("Computer selects " + computerSelection)
    switch(playerSelection){
        case "Rock":
            switch(computerSelection){
                case "Rock":
                    console.log("Tie")
                    break;
                case "Paper":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
                case "Scissors":
                    console.log("Player wins round");
                    playerScore++;
                    break;
                }
            break;
        case "Paper":
            switch(computerSelection){
                case "Rock":
                    console.log("Player wins round")
                    playerScore++
                    break;
                case "Paper":
                    console.log("Tie");
                    break;
                case "Scissors":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
            }    
        break;
        case "Scissors":
            switch(computerSelection){
                case "Rock":
                    console.log("Computer wins round")
                    computerScore++;
                    break;
                case "Paper":
                    console.log("Player wins round");
                    playerScore++;
                    break;
                case "Scissors":
                    console.log("Tie");
                    break;
            }
        break;
    }
    console.log("Computer score " + computerScore);
    console.log("Player score " + playerScore);
}

function computerPlay() {  // computer selects rock, paper or scissors at random  
    let max = 4;
    let min = 1;
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    switch(randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        }
}

function game() {  // main game function plays 5 rounds and returns winner 
    for(let i = 1; i <= 5; i++) {
        console.log("Round #" + i)
        const playerSelection = "Rock"
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    console.log("Game over")
    if(playerScore > computerScore) {
        console.log("Player Wins")
    } else if (playerScore == computerScore) {
        console.log("Tie")
    } else {
        console.log("Computer Wins");
    }
}
