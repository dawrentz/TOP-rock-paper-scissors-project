//select random number between 1 and 3. Assign number as rock, paper or scissors
function getCompterChoice() {
    let randNum = (Math.floor(Math.random() * 3 + 1));

    let choice;
    if (randNum === 1) {choice = "ROCK"}
    else if (randNum === 2) {choice = "PAPER"}
    else {choice = "SCISSORS"}
    
    return choice;
}

// Make click button = choice and run one game
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let playerSelection = button.id.toUpperCase();
        let computerSelection = getCompterChoice();
        outcome(playerSelection, computerSelection);
    });
});

// Initialize and display score counters
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;


// Group all like outcomes, and determine outcome and display match result. Add to score counter.
const outcomeBox = document.querySelector("#outcome");

function outcome(player, computer) {
     //win
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")    
    ) {
        outcomeBox.textContent = `${player} beats ${computer}!\n\nYou have choosen... WISELY`;
        playerScore = ++playerScore;
        playerScoreDisplay.textContent = playerScore;
    } 
    //lose
    else if ((computer === "ROCK" && player === "SCISSORS") ||
    (computer === "PAPER" && player === "ROCK") ||
    (computer === "SCISSORS" && player === "PAPER")    
    ) {
        outcomeBox.textContent = `${computer} beats ${player}!\n\nYou have choosen... POORLY`;
        computerScore = ++computerScore;
        computerScoreDisplay.textContent = computerScore;
    } 
    //tie
    else if (player === computer) {
        outcomeBox.textContent = `${computer} = ${player}... \n\nMEDIOCRE`;
    }
}

// Check counters on each click for 5 wins and declare champion
const buttonsGroup = document.querySelector(".buttons");
const note = document.querySelector("span");

buttonsGroup.addEventListener("click", function() {
    if (playerScore == 5 || computerScore == 5) {
        document.querySelector("body").removeChild(buttonsGroup);
        if (playerScore > computerScore) {
            playerScoreDisplay.textContent = "WINNER!!!";
            playerScoreDisplay.style.color = "red";
        } else {
            computerScoreDisplay.textContent = "WINNER!!!";
            computerScoreDisplay.style.color = "red";
        }
        note.textContent = "Hit refresh to play again";
        note.style.cssText = "color: green; font-size: x-large;";
    }
});
