function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    // get values from form
    let siblingSelected = document.getElementById("sibling").checked;
    let basketballSelected = document.getElementById("basketball").checked;
    let ultimateSelected = document.getElementById("ultimate").checked;
    // give result based off of what they selected
    if (siblingSelected) {
        triviaAnswer.innerHTML =  " you are wrong. ";
    }
    else if (basketballSelected) {
        triviaAnswer.innerHTML = " you are wrong. ";
    }
    else if (ultimateSelected) {
        triviaAnswer.innerHTML = " you are right!";
    }
}