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
    
    let gridSize;// var for size of grid to determine num of cards needed
    
    switch (difficulty) {
        //easy
        case 0:
            gridSize = 16;//16 cards 8 pairs
            
        //medium    
        case 1:
            gridSize = 26;// 26 cards 13 pairs
        case 2:
            gridSize = 36;//36 cards 18 pairs
    };
    
    //the values that the cards could have, need 18 options
    let cardPosibleValues = ['👾','👽','👻','🐶','🦎','🦩',
                                    '🎀','👑','🧸','🍩','🍒','💐',
                                    '🍓','🚀','🚁','⭐','⛄','⚡'];
    
    //the card values chosen based on diffculity
    let selectedCards = cardPosibleValues.slice(0, gridSize / 2);

    //empty card array 
    let cardArray= [];
    
    //loop through each of the values in the selected card array and duplicates it
    //makes pairs by creating 2 of the same card with the selected value and each card is then assigned the flipped and matched status
    //each card is then added to the card array
    for (let i = 0; i < selectedCards.length; i++) {
        cardArray.push({ value: selectedCards[i], isFlipped: false, isMatched: false });
        cardArray.push({ value: selectedCards[i], isFlipped: false, isMatched: false });
    }
    
    return cardArray;
}

function randomiseCards(cards) {
    //randomise card positions
    //Fisher-Yates shuffle algorithm
    //this loops through the cards array from the last element to the first
    // it then randomly selects an index from the remaining unshuffled portion of the array 
    // it the swaps the 2 elements (the last and the random)
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards; //returns the shuffled array
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
function startGame(difficulty) {
    //game stars, timer starts and count moves, grid displayed
    
    //intialsie game state
    cards= createGrid(difficulty);
    cards = randomiseCards(cards);
    displayCards(cards);
    
}
function restartGame() {
    //reset grid, time and score
}


