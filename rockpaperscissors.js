//computer choice
function getComputerChoice(){
    let string = ['Rock','Paper','Scissors']; // string declaration
    let random = Math.floor(Math.random()*string.length); // selecting an array from string
    return string[random]; // returning string
}
//Single round of Rock paper Scissors
function playRound(playerSelection,computerSelection){
    playerSelection = capitalize(playerSelection);
    if (playerSelection === computerSelection){
        console.log('It\'s a Tie');
    }
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock'){
            return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection === 'Paper'){
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

//capitalize
function capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}