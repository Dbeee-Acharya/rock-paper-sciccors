//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
*/



function userInput(){
    // let choice = (prompt("rock, paper or scissors ?")).toLowerCase();
    // return choice;
    return "rock";
};

//this function returns either rock, paper or scissors 
function getComputerSelection() {
    let choices = ["rock", "paper", "scissors"];

    let number = Math.floor(Math.random() * 3);

    return choices[number];
};

function compareSelection(user, computer) {
    let userWin = 0;
    let computerWin = 0;

    
    if (user() === computer()) {
        return "Its a Draw"
    }

    if ((user() === "rock" && computer() === "scissors") || 
        (user() === "paper" && computer() === "rock") ||
        (user() === "scissors" && computer() === "paper")) {
            userWin += 1
            return "User wins this round"
    } else {
        computerWin += 1
        return "Computer Wins this round"
    }
};

console.log(getComputerSelection());
console.log(compareSelection(userInput, getComputerSelection));
