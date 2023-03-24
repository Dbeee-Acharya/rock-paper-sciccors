//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    1.1 check if userInput is valid
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
    4. count userWin and computerWIn
*/


//userInput works
function userInput(){
    let choice = (prompt("rock, paper or scissors ?")).toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
    } 
};

//integrate this func into userInput
function inputError() {
    alert("Input Invalid")
}

//this function returns either rock, paper or scissors works
function getComputerSelection() {
    let choices = ["rock", "paper", "scissors"];

    let number = Math.floor(Math.random() * 3);

    return choices[number];
};

//fix userWIn and computerWin not being recorded
let userWin = 0;
let computerWin = 0;
function compareSelection(user, computer) {
    let userChoice = user(inputError);
    let computerChoice = computer();

    if (userChoice === computerChoice) {
        return "Its a Draw"
    }

    if ((userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
            userWin += 1;
            return "User wins this round"
    } else {
        computerWin +=1
        console.log(computerWin)
        return "Computer Wins this round"
    }
};

function game(compare, user, computer) {
    for (let i = 1; i <= 5; i++){
        console.log(compare(user, computer));
    }
};

game(compareSelection, userInput, getComputerSelection);

if (computerWin > userWin) {
    console.log("Computer Wins") 
} else {
    console.log("User Wins")
}



 



