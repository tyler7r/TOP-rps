function getComputerChoice () {
    let choice = Math.random () * 3;
    if (choice <=1) {
        return "Rock";
    } else if (choice <=2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}