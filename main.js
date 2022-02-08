const rowOne = document.querySelector('[data-display-row-1]');
const keyboard = document.getElementById("keyboard");

let currentGuess = [];

function clickLetter(e) {
    if (e.target.hasAttribute('data-letter-btn')) {
        if(currentGuess.length >= 5) return;
        currentGuess.push(e.target.innerText) ;
    }
}

function clickBack(e) {
    if (e.target.hasAttribute('data-back-btn')) {
        currentGuess.pop();
    }
}

function displayCurrentGuess() {
    for(let i = 0; i < rowOne.children.length; i++) {
        rowOne.children[i].innerText = "";
        if (currentGuess[i] == undefined) return;
        rowOne.children[i].innerText = currentGuess[i];
    }
}

keyboard.addEventListener("click", e => {
    clickLetter(e);
    clickBack(e);
    displayCurrentGuess();
});