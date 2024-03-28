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







// //plays 5 rounds (no loop)
// //counts only win or loss
// //shows final winner
// function fiveRounds() {
//     let winCounter = 0;
//     let lossCounter = 0
//     let round;
//     //1
//     round = playRound();
//     if (round === "win") {
//         winCounter = ++winCounter;
//     } 
//     if (round === "loss") {
//         lossCounter = ++lossCounter;
//     };
//     //2
//     round = playRound();
//     if (round === "win") {
//         winCounter = ++winCounter;
//     } 
//     if (round === "loss") {
//         lossCounter = ++lossCounter;
//     };
//     //3
//     round = playRound();
//     if (round === "win") {
//         winCounter = ++winCounter;
//     } 
//     if (round === "loss") {
//         lossCounter = ++lossCounter;
//     };
//     //4
//     round = playRound();
//     if (round === "win") {
//         winCounter = ++winCounter;
//     } 
//     if (round === "loss") {
//         lossCounter = ++lossCounter;
//     };
//     //5
//     round = playRound();
//     if (round === "win") {
//         winCounter = ++winCounter;
//     } 
//     if (round === "loss") {
//         lossCounter = ++lossCounter;
//     };

//     let finalOutcome = (winCounter > lossCounter) ? "You are the champion!" :
//     (winCounter < lossCounter) ? "You are one pathetic loser!" :
//     "Tie!";

//     alert(`Wins: ${winCounter}\nLosses: ${lossCounter}\n\n${finalOutcome}` )
// }

// //call all
// fiveRounds();
