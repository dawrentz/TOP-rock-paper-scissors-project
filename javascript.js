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
    if (randNum === 1) {choice = "ROCK"}
    else if (randNum === 2) {choice = "PAPER"}
    else {choice = "SCISSORS"}
    
    return choice;
}

//allow player to select, normalize selection
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    return (playerChoice.trim()).toUpperCase();
}

//let computerSelection = getCompterChoice();
//console.log("computerSelection: "+computerSelection);

//allow player to select, normalize selection
//let playerSelection = prompt("Choose rock, paper, or scissors: ");
//playerSelection = (playerSelection.trim()).toUpperCase();

// if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
//     playerSelection = playerSelection;
// } else {
//     alert("You may only choose rock, paper, or scissors. Refresh and try again.");
// }

//console.log("playerSelection: "+playerSelection);

//group all winning outcomes (same for other)
//allows error outcome
//show all choices and outcome

function outcome(player, computer) {
     //win
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")    
    ) {
        console.log(`${player} beats ${computer}!\n\nYou have choosen... WISELY`);      
        return "win";      
    } 
    //lose
    else if ((computer === "ROCK" && player === "SCISSORS") ||
    (computer === "PAPER" && player === "ROCK") ||
    (computer === "SCISSORS" && player === "PAPER")    
    ) {
        console.log(`${computer} beats ${player}!\n\nYou have choosen... POORLY`);
        return "loss";
    } 
    //tie
    else if (player === computer) {
        console.log(`${computer} = ${player}\n\nMEDIOCRE`);
        return "tie";
    }
    //error
    else {
        console.log('*sigh*\n\nYou may only select "rock", "paper", or "scissors"...\n\nRefresh and try again');
        return "error";
    }  

}


function playRound() {
    let computerSelection = getCompterChoice();
    let playerSelection = getPlayerChoice();
    return outcome(playerSelection, computerSelection);
}

function fiveRounds() {
    let winCounter = 0;
    let lossCounter = 0
    let round;
    
    //1
    round = playRound();
    if (round === "win") {
        winCounter = ++winCounter;
    } 
    if (round === "loss") {
        lossCounter = ++lossCounter;
    };
    
    //2
    round = playRound();
    if (round === "win") {
        winCounter = ++winCounter;
    } 
    if (round === "loss") {
        lossCounter = ++lossCounter;
    };

    //3
    round = playRound();
    if (round === "win") {
        winCounter = ++winCounter;
    } 
    if (round === "loss") {
        lossCounter = ++lossCounter;
    };

    //4
    round = playRound();
    if (round === "win") {
        winCounter = ++winCounter;
    } 
    if (round === "loss") {
        lossCounter = ++lossCounter;
    };

    //5
    round = playRound();
    if (round === "win") {
        winCounter = ++winCounter;
    } 
    if (round === "loss") {
        lossCounter = ++lossCounter;
    };

  


    let finalOutcome = (winCounter > lossCounter) ? "You Win!" :
    (winCounter < lossCounter) ? "You Lose!" :
    "Tie!";



    alert(`Wins: ${winCounter}\nLosses: ${lossCounter}\n\n${finalOutcome}` )
}

fiveRounds();













// function outcome(player, computer) {
//     // let message; 
//     //win
//     if ((player === "ROCK" && computer === "SCISSORS") ||
//         (player === "PAPER" && computer === "ROCK") ||
//         (player === "SCISSORS" && computer === "PAPER")
//         ) {
//             let message = `You win! ${player} beats ${computer}.`;
//             // return `You win! ${player} beats ${computer}.`;

//         }

//         //lose
//     else if ((player === "ROCK" && computer === "PAPER") ||
//         (player === "PAPER" && computer === "SCISSORS") ||
//         (player === "SCISSORS" && computer === "ROCK")
//         ) { 
//             let message = `You lose! ${computer} beats ${player}.`;
//             // return `You lose! ${computer} beats ${player}.`;
//         }
        
//         //tie
//     else if ((player === "ROCK" && computer === "ROCK") ||
//         (player === "PAPER" && computer === "PAPER") ||
//         (player === "SCISSORS" && computer === "SCISSORS")
//         ) { 
//             let message = `Tie! ${computer} = ${player}.`;
//             // return `Tie! ${computer} = ${player}.`;
//         }
        
//         //error
//     else {
//         // return "No contest. You may only choose \"rock\", \"paper\", or \"scissors\". Refresh and try again.";
//         let message = "No contest. You may only choose \"rock\", \"paper\", or \"scissors\". Refresh and try again.";
//     }
    
//     alert(message);
// }

//outcome();

