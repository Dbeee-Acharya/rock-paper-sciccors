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
    let choice;
    do {
        choice = (prompt("rock, paper or scissors ?")).toLowerCase(); 
    } while (!(choice == "rock" || choice == "paper" || choice == "scissors"))

    return choice;
};

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
    let userChoice = user();
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
        return "Computer Wins this round"
    }
};

function game(compare, user, computer) {

    while (userWin != 5 && computerWin != 5) {
        console.log(compare(user, computer));
        console.log(userWin, computerWin);
    };
    // for (let i = 1; i <= 5; i++){
    //     console.log(compare(user, computer));
    // }

    if (computerWin > userWin) {
        console.log("Computer Winsss;s") 
    } else if (computerWin < userWin) {
        console.log("User Winssss");
    } else {
        console.log("Its a DRAWWWW");
    }
};






 



