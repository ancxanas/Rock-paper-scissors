let computerScore = 0;
let playerScore = 0;
let draw = 0;


//computer choice
function getComputerChoice(){
    let string = ['Rock','Paper','Scissors'];
    let random = Math.floor(Math.random()*string.length);
    return string[random];
}

//Single round of Rock paper Scissors
function playRound(playerSelection){
    computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        document.getElementById('game-result').innerHTML = ('It\'s a Tie');
        draw++;
        document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
        document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
    }
    else if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'Paper'){
            document.getElementById('game-result').innerHTML = (`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
        else{
            document.getElementById('game-result').innerHTML = (`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'Rock'){
            document.getElementById('game-result').innerHTML = (`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
        else{
            document.getElementById('game-result').innerHTML = (`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
    }
    else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'Scissors'){
            document.getElementById('game-result').innerHTML = (`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
        else{
            document.getElementById('game-result').innerHTML = (`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
            document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
        }
    }
}


//Player Selection in buttons
const rockButton = document.querySelector('#buttonRock');
const paperButton = document.querySelector('#buttonPaper');
const scissorsButton = document.querySelector('#buttonScissors');
const resetButton = document.querySelector('#buttonReset');


//EventListeners for buttons
rockButton.addEventListener('click',() => {
    game('rock');
});
paperButton.addEventListener('click',() => {
    game('paper');
})
scissorsButton.addEventListener('click',() => {
    game('scissors')
})

//resetbutton resets score
resetButton.addEventListener('click', ()=>{
    computerScore = 0;
    playerScore = 0;
    document.getElementById('player-score').innerHTML = (`Player : ${playerScore}`);
    document.getElementById('computer-score').innerHTML = (`Computer : ${computerScore}`);
    showGameButtons();
    hideWinnerMessage();
})

//game Round
function game(playerSelection){
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);

    if(computerScore == 5){
        document.getElementById('winner-message').innerHTML = (`Computer Wins`);
        hideGameButtons();
        showWinnerMessage();
    }
    if(playerScore == 5){
        document.getElementById('winner-message').innerHTML = (`Player Wins`);
        hideGameButtons();
        showWinnerMessage();
    }
}

// Hides game buttons
function hideGameButtons(){
    document.getElementById('buttonRock').style.visibility = 'hidden';
    document.getElementById('buttonRock').style.display = 'none';
    document.getElementById('buttonPaper').style.visibility = 'hidden';
    document.getElementById('buttonPaper').style.display = 'none';
    document.getElementById('buttonScissors').style.visibility = 'hidden';
    document.getElementById('buttonScissors').style.display = 'none';
}

// Show game buttons 
function showGameButtons(){
    document.getElementById('buttonRock').style.visibility = 'visible';
    document.getElementById('buttonRock').style.display = 'inline';
    document.getElementById('buttonPaper').style.visibility = 'visible';
    document.getElementById('buttonPaper').style.display = 'inline';
    document.getElementById('buttonScissors').style.visibility = 'visible';
    document.getElementById('buttonScissors').style.display = 'inline';
}

// Hide winner message
function hideWinnerMessage(){
    document.getElementById('winner-message').style.visibility = 'hidden';
    document.getElementById('winner-message').style.display = 'none';
}

//Show winner message
function showWinnerMessage(){
    document.getElementById('winner-message').style.visibility = 'visible';
    document.getElementById('winner-message').style.display = 'block';
}