function game () {
    let round = playRound(playerSelection, computerSelection);
    let playerWins = x;
    let computerWins = y;
    let x = 0;
    let y = 0;
    if (round.slice(0,10) === 'Player Wins') {
        playerWins = ++x;
        console.log (playerWins, computerWins);
    } else if (round.slice(0,12) === 'Computer Wins') {
        computerWins = ++y;
        console.log (playerWins, computerWins);
    } else {
        console.log (playerWins, computerWins);
    }
    }

    function getComputerChoice () {
        const choice = Math.random () * 3;
        if (choice <=1) {
            return "ROCK";
        } else if (choice <=2) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
    }

    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Choose your hero: Rock, Paper, Scissors!').toUpperCase();

    function playRound(playerSelection, computerSelection) 
    {
        if ((computerSelection === 'ROCK') && (playerSelection === 'PAPER')) {
            return "Player Wins, PAPER beats ROCK"; 
        } else if ((computerSelection === 'ROCK') && (playerSelection === 'SCISSORS')) {
            return "Computer Wins, ROCK beats SCISSORS";
        } else if ((computerSelection === 'ROCK') && (playerSelection === 'ROCK')) {
            return "TIE, ROCK vs. ROCK";
        } else if ((computerSelection === 'PAPER') && (playerSelection === 'PAPER')) {
            return "TIE, PAPER vs. PAPER";
        } else if ((computerSelection === 'PAPER') && (playerSelection === 'SCISSORS')) {
            return "Player Wins, SCISSORS beats PAPER";
        } else if ((computerSelection === 'PAPER') && (playerSelection === 'ROCK')) {
            return "Computer Wins, PAPER beats ROCK";
        } else if ((computerSelection === 'SCISSORS') && (playerSelection === 'PAPER')) {
            return "Computer Wins, SCISSORS beats PAPER";
        } else if ((computerSelection === 'SCISSORS') && (playerSelection === 'SCISSORS')) {
            return "TIE, SCISSORS vs. SCISSORS";
        } else if ((computerSelection === 'SCISSORS') && (playerSelection === 'ROCK')) {
            return "Player Wins, ROCK beats SCISSORS";
        } else {
            return "Oops, something went terribly wrong try again.";
        }
        }




    
    

