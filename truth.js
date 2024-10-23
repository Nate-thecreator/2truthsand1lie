function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    // get values from form
    let chocolateSelected = document.getElementById("sibling").checked;
    let tunaSelected = document.getElementById("basketball").checked;
    let honeySelected = document.getElementById("ultimate").checked;
    // give result based off of what they selected
    if (siblingSelected) {
        triviaAnswer.innerHTML = fname + ", you are right! ";
    }
    else if (basketballSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. ";
    }
    else if (ultimateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong.";
    }
}