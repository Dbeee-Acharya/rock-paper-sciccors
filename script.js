//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
*/

//take userInput 


function getComputerSelection() {
    let number = Math.floor(Math.random() * 3); // generates a random number between from 0 to 2

    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

let list =[]
for (let i = 0; i <= 10; i++) {
    list.push(getComputerSelection());
}
console.log(list);

//compare 