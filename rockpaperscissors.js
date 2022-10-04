function getComputerChoice(){
    let string = ['Rock','Paper','Scissors'];
    let random = Math.floor(Math.random()*string.length);
    return string[random];
}