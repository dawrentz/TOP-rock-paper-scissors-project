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

console.log(getCompterChoice());


