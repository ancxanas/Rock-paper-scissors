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
    }
    else if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'Paper'){
            return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'Rock'){
            return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'Scissors'){
            return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else{
        return('Type Correctly');
    }
}
//Player & Computer Choice
const playerSelection = prompt('Choice?');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
