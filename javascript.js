//allow computer to choose random 1-3 at start
//assign random choice to rock, paper, scissor
//prompt users to enter rock, paper, or scissors
//run through all possibilities with if then
//declare winner
//let user choose to play again or quit


//select random number between 1 and 3
//assign number as rock, paper or scissors
function getCompterChoice() {
    let randNum = (Math.floor(Math.random() * 3 + 1));

    let choice;
    if (randNum === 1) {choice = "rock"}
    else if (randNum === 2) {choice = "paper"}
    else {choice = "scissors"}

    
    return choice;
}

let computerSelection = getCompterChoice();
console.log("computerSelection: "+computerSelection);

//allow player to select, normalize selection, and show error
let playerSelection = prompt("Choose rock, paper, or scissors: ");
playerSelection = (playerSelection.trim()).toLowerCase();

// if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
//     playerSelection = playerSelection;
// } else {
//     alert("You may only choose rock, paper, or scissors. Refresh and try again.");
// }

console.log("playerSelection: "+playerSelection);

//group all winning outcomes (same for other)
//allows error outcome
//show all choices and outcome
let outcome;
if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        outcome = "You win!";
    }
else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        outcome = "You lose!";
    }
else if ((playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
    ) {
        outcome = "Tie!";
    }
else {outcome = "No contest. You may only choose \"rock\", \"paper\", or \"scissors\". Refresh and try again."}

alert("Opponent's choice: " + computerSelection +
    "\nYour choice: " + playerSelection + 
    "\n"+outcome);
