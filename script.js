//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
*/



function userInput(){
    let choice = (prompt("rock, paper or scissors ?")).toLowerCase();
    return choice;
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
    let userChoice = user()
    let computerChoice = computer()

    if (userChoice === computerChoice) {
        return "Its a Draw"
    }

    if ((userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
            userWin += 1
            return "User wins this round"
    } else {
        computerWin += 1
        return "Computer Wins this round"
    }
};

function game(compare, user, computer) {
        console.log(compare(user, computer));
};

for (let i = 0; i < 5; i++){
    game(compareSelection, userInput, getComputerSelection);
}
 



