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
            break;
        //medium    
        case 1:
            gridSize = 24;// 26 cards 13 pairs
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
    
    //get the game board element from the HTML document to display the cards on
    const gameBoard = document.getElementById('game-board');
    
    //clear the game board before displaying new cards
    gameBoard.innerHTML = '';
    
    //loop through the cards array and create a card element for each card
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div'); //create a div element for each card
        cardElement.classList.add('card');//card class to the element for styling
        cardElement.dataset.index = index; //store the index of the card for later use for the flipCard function
        cardElement.dataset.value = card.value; //store the value of the card for later use for the checkMatch function
        
        //cards have 2 sides (front and back) 
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = card.value;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = '?';
        
        //append the front and back to the card element
        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);
        
        //each card needs an event listener to handle clicks and flip the card
        cardElement.addEventListener('click', () => flipCard(cardElement,card));
        
        //add the card element to the game board
        gameBoard.appendChild(cardElement);
    });
}

//GAME LOGIC
function flipCard(cardElement, card) {
    //flip a crad on a click can only flip 2 at a time
    //check if the card is already flipped or matched, if so return and do nothing
    if (card.isFlipped || card.isMatched) {
        return;
    }
    
    //flip the card by changing its isFlipped property to true and updating the display
    card.isFlipped = true;
    cardElement.classList.add('flipped');
    
    //add the flipped card to the flippedCards array
    flippedCards.push({ cardElement, card });
    
    //check if there are 2 flipped cards, if so check for a match
    if (flippedCards.length === 2) {
        moves++;
        updateMoves();
        checkMatch(flippedCards[0], flippedCards[1]);
    }
    
}
function checkMatch(card1, card2) {
    //check if the 2 most recently flipped cards match
    if (card1.card.dataset.value === card2.card.dataset.value) {
        //if they match set their isMatched property to true and clear the flippedCards array
        card1.card.isMatched = true;
        card2.card.isMatched = true;
        flippedCards = [];
        matchedCardPairs++;
        
    } else {
        //if they don't match flip cards over after a  delay and clear the flippedCards array
        setTimeout(() => {
            card1.card.isFlipped = false;
            card2.card.isFlipped = false;
            card1.cardElement.classList.remove('flipped');
            card2.cardElement.classList.remove('flipped');
            flippedCards = [];
        }, 1000); //1 sec delay before flipping back
    }
}
function checkWin(){
    //check if all cards have a match
        if (matchedCardPairs === cards.length / 2) {
            clearInterval(timer); //stop the timer
            alert(`Congratulations! You've won the game in ${moves} moves and ${seconds} seconds!`); //display win message with moves and time
        }
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

//called when the page loads to start the game with the default difficulty (easy)
startGame(0);