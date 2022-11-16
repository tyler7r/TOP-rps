function getComputerChoice () {
    let computerSelection = Math.random () * 3;
    if (computerSelection <=1) {
        return "Rock";
    } else if (choice <=2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
let playerSelection = prompt('Choose your hero: Rock, Paper, Scissors!');
toUpperCase(playerSelection);