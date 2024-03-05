



let x = +prompt("x: ");
let y = 2;




function outcome(testX, testY) {
    let message; 
    //win
    if (
        (testX === 0 && testY === 2) ||
        (testX === 1 && testY === 2)
    ) {
        message = "zero and two \nor one and two";
    } 
    else if (
        (testX === 2 && testY === 2) ||
        (testX === 3 && testY === 2)
    ) {
        message = "two and two \nor three and two";
    } 
    else {
        message = "i dunno";
    }
    
    alert(message);
}

outcome(x, y);

