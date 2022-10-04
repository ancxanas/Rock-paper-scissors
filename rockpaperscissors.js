//computer choice
function getComputerChoice(){
    let string = ['Rock','Paper','Scissors']; // string declaration
    let random = Math.floor(Math.random()*string.length); // selecting an array from string
    return string[random]; // returning string
}
//Single Round of Rock Paper Scissors
function playRound(playerSelection,computerSelection){
    if(playerSelection < computerSelection){
        return (`You Lose! ${computerSelection} beats ${playerSelection} `);
    }
    else if (playerSelection > computerSelection){
        return (`You Win ${playerSelection} beats ${computerSelection} `)
    }
    else{
        return ('It\'s a Tie')
    }
}