//allow computer to choose random 1-3 at start
//assign random choice to rock, paper, scissor
//prompt users to enter rock, paper, or scissors
//run through all possibilities with if then
//declare winner
//let user choose to play again or quit

function getCompterChoice() {
    let randNum = (Math.floor(Math.random() * 3 + 1));

    let choice;
    if (randNum === 1) {choice = "rock"}
    else if (randNum === 2) {choice = "paper"}
    else {choice = "scissors"}

    
    return choice;
//    return randNum;
}

console.log("getCompterChoice: "+getCompterChoice());

let playerSelection = prompt("Choose rock, paper, or scissors: ");

playerSelection = (playerSelection.trim()).toLowerCase();

console.log(playerSelection);

// let x = +prompt("enter x: ");

// if (x === 1 || x === 2 || x === 3) {x = x;}
// else {x = +prompt("try again: ");}

// alert(x);

if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    playerSelection = playerSelection;
} else {
    playerSelection = prompt("You may only choose rock, paper, or scissors: ");
}


console.log(playerSelection);


