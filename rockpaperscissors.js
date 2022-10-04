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
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissors'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
    }
}