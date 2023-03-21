//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
*/

//take userInput 

//this function returns either rock, paper or scissors 
function getComputerSelection() {
    let choices = ["rock", "paper", "scissors"];

    let number = Math.floor(Math.random() * 3);

    return choices[number];
}

for (let i = 1; i<=10; i++) {
    console.log(getComputerSelection())
}

// function getComputerSelection() {
//     let number = Math.floor(Math.random() * 3); // generates a random number between from 0 to 2

//     if (number === 0) {
//         return "rock";
//     } else if (number === 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// }



//compare 