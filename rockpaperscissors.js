let computerScore = 0;
let playerScore = 0;
let draw = 0;
game();

//computer choice
function getComputerChoice(){
    let string = ['Rock','Paper','Scissors']; // string declaration
    let random = Math.floor(Math.random()*string.length); // selecting an array from string
    return string[random]; // returning string
}

//Single round of Rock paper Scissors
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        console.log('It\'s a Tie');
        draw++;
    }
    else if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'Paper'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'Rock'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }
    else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'Scissors'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }
    else{
        console.log('Type Correctly');
    }
}






//game
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('what\'s your choice');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Computer ${computerScore} : Player ${playerScore}`)
        }
        if(playerScore > computerScore){
            console.log('Player Wins the Round')
        } 
        else{
            console.log('Computer Wins the Round')
        }
}





