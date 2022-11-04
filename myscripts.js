function getComputerChoice () {
    let choice = Math.random () * 3;
    if (choice <=1) {
        choice = "Rock";
    } else if (choice <=2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
}