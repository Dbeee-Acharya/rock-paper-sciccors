//main Script for rock paper scissors game

/* 
    TODO
    1. take userInput (string)
    2. Create a function that randomly generates rock paper or scissors
    3. Create a function to compare userInput with Random result and declare winner
*/

//take userInput 
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

//compare 
function compareSelection(userInput, getComputerSelection) {
    
};