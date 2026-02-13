//game logic 

//-------Varibles---------//
//initialising variables to 0 and null of initial states
let cards = [];
let flippedCards = [];
let matchedCardPairs = 0;
let moves = 0
let timer = null;
let seconds = 0;

//-------Methods--------//

//SETUP GAME
function createGrid(difficulty) {
    //create game grid based on the selected difficulty
    switch (difficulty) {
        case 0:
            return 16;
        case 1:
            return 25;
        case 2:
            return 36;
    };
    
}
function randomiseCards(cards) {
    //randomise card positions
}
function displayCards(cards) {
    //display cards
}

//GAME LOGIC
function flipCard(card) {
    //flip a crd on a click cna only flip 2 at a time
}
function checkMatch(card1, card2) {
    //check if the 2 most recently flipped cards match
}
function checkWin(){
    //check if all cards have a match
}
function updateMoves() {
    //display the moves
}
function updateTime(){
    //display time
}

//GAME CONTROL
function startGame() {
    //game stars, timer starts and count moves, grid displayed
}
function restartGame() {
    //reset grid, time and score
}


