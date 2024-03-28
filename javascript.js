//allow computer to choose random 1-3 at start
//assign random choice to rock, paper, scissor
//prompt users to enter rock, paper, or scissors
//standardize user prompt
//run through all possibilities with if then
//declare winner
//log result and pass to function for counter
//run five rounds and display champion


//select random number between 1 and 3
//assign number as rock, paper or scissors
function getCompterChoice() {
    let randNum = (Math.floor(Math.random() * 3 + 1));

    let choice;
    if (randNum === 1) {choice = "ROCK"}
    else if (randNum === 2) {choice = "PAPER"}
    else {choice = "SCISSORS"}
    
    return choice;
}

//allow player to select, standardize selection
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    return (playerChoice.trim()).toUpperCase();
}

// Create buttons and add eventListen, make click run a game


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let playerSelection = button.id.toUpperCase();
        let computerSelection = getCompterChoice();
        outcome(playerSelection, computerSelection);


        // console.log("playerSelection: " + playerSelection);
        // console.log("computerSelection: " + computerSelection);

    });

});



let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

const outcomeBox = document.querySelector("#outcome");
// outcomeBox.textContent = "Hello!";

//group all like outcomes (including user error)
//alert verbose outcome and return/log simple outcome
function outcome(player, computer) {
     //win
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")    
    ) {
        // console.log("win"); 
        // alert(`${player} beats ${computer}!\n\nYou have choosen... WISELY`);          
        // return "win";    
        
        outcomeBox.textContent = `${player} beats ${computer}!\n\nYou have choosen... WISELY`;
        playerScore = ++playerScore;
        playerScoreDisplay.textContent = playerScore;


    } 
    //lose
    else if ((computer === "ROCK" && player === "SCISSORS") ||
    (computer === "PAPER" && player === "ROCK") ||
    (computer === "SCISSORS" && player === "PAPER")    
    ) {
        // console.log("loss");
        // alert(`${computer} beats ${player}!\n\nYou have choosen... POORLY`);
        // return "loss";

        outcomeBox.textContent = `${computer} beats ${player}!\n\nYou have choosen... POORLY`;
        computerScore = ++computerScore;
        computerScoreDisplay.textContent = computerScore;

    } 
    //tie
    else if (player === computer) {
        // console.log("tie");
        // alert(`${computer} = ${player}\n\nMEDIOCRE`);
        // return "tie";

        outcomeBox.textContent = `${computer} = ${player}... \n\nMEDIOCRE`;

    }
    //error
    else {
        console.log("error");
        alert('*sigh*\n\nYou may only select "rock", "paper", or "scissors"...\n\nRefresh and try again');
        return "error";
    }  

}

//combine functions for a single round
//return simple round outcome (to pass to counter)
function playRound() {
    let computerSelection = getCompterChoice();
    // console.log(computerSelection); //cheatmode
    // let playerSelection = getPlayerChoice();
    return outcome(playerSelection, computerSelection);
}


const body = document.querySelector("body");
const buttonsGroup = document.querySelector(".buttons");

document.querySelector(".buttons").addEventListener("click", function() {
    if (playerScore == 5 || computerScore == 5) {
        body.removeChild(buttonsGroup);
        if (playerScore > computerScore) {
            playerScoreDisplay.textContent = "WINNER!!!";
            playerScoreDisplay.style.color = "red";
        } else {
            computerScoreDisplay.textContent = "WINNER!!!";
            computerScoreDisplay.style.color = "red";
        }
        document.querySelector("span").textContent = "Hit refresh to play again";
        document.querySelector("span").style.cssText = "color: green; font-size: x-large;";
    }
});
