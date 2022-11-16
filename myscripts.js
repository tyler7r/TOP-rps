function getComputerChoice () {
    let choice = Math.random () * 3;
    if (choice <=1) {
        return "ROCK";
    } else if (choice <=2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
const computerSelection = getComputerChoice();
const playerSelection = prompt('Choose your hero: Rock, Paper, Scissors!');
toUpperCase(playerSelection);

function playRound(playerSelection, computerSelection) {
    if 
}
