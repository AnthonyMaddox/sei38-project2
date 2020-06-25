let player1 = {
   hand: []
}
let player2 = {
   hand: []
}

let newDeck = [];
let cards = [];
let pot = [];
let newPot = [];
console.log("please click on 'reset game'")

//reset function 

function resetGame() {
   player1 = {
      hand: []
   }
   player2 = {
      hand: []
   }
   newDeck = [];
   pot = [];
   cards = [];
   class Card {
      constructor(value, name, suit) {
         this.value = value;
         this.name = name;
         this.suit = suit;
      }
   }
function deck() {
   this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.names.length; j++) {
            cards.push(new Card(j+1, this.names[j], this.suits[i]));
        }
    }
   return cards;
}
deck()
function shuffle(deckArray) {
   let newPosition ;
   let tempPos ;
   for (let i = deckArray.length - 1; i > 0; i--) {
      newPosition = Math.floor(Math.random() * (i + 1));
      tempPos = deckArray[i];
      deckArray[newPosition] = tempPos;
   }
   return deckArray;
}
newDeck = shuffle(cards);
console.log(newDeck);
function dealHands() {
   let newCard ;
   for (let i = newDeck.length; i > 0; i--) {
      if (i % 2 == 0) {
         newCard = newDeck.shift();
         player1.hand.push(newCard);
      } 
      else {
         newCard = newDeck.shift();
         player2.hand.push(newCard);
      } 
   } 
}
dealHands();
console.log(player1.hand);
console.log(player2.hand);
console.log("please click on 'Play Round' or 'Play Entire Game");
}

//end of reset function


function playRound() {
   if (player2.hand.length == 0 && player1.hand.length > 0) {
      console.log("game over, You Win!!!");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else if (player1.hand.length == 0 && player2.hand.length > 0) { 
      console.log("game over, Computer Wins 😞");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else {
   player1Card = player1.hand.shift();
   player2Card = player2.hand.shift();
   console.log("You play " + player1Card.name + " of " + player1Card.suit);
   console.log("Computer plays " + player2Card.name + " of " + player2Card.suit);
   pot.push(player1Card, player2Card);
   console.log(pot);
   if (player1Card.value > player2Card.value) {
      player1.hand.push(...pot.splice(0, pot.length));
      console.log("You Win!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else if (player1Card.value < player2Card.value) {
      player2.hand.push(...pot.splice(0, pot.length));
      console.log("Computer Wins!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else {
      isWar();
   }
}
}
function isWar() {
   console.log("It's WAR!!!!!!!!!!!!!!!!!!");
   newPot = pot.concat(newPot);
   pot = [];
   player1NextCard = player1.hand.shift();
   player1NewCard = player1.hand.shift();
   player2NextCard = player2.hand.shift();
   player2NewCard = player2.hand.shift();
   if (player2.hand.length == 0 && player1.hand.length > 0) {
      console.log("game over, You Win!!!");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else if (player1.hand.length == 0 && player2.hand.length > 0) { 
      console.log("game over, Computer Wins 😞");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else {
   newPot.push(player1NextCard, player1NewCard, player2NextCard, player2NewCard);
   console.log(newPot);
   console.log("you play a " + player1NewCard.name + " of " + player1NewCard.suit);
   console.log("computer plays " + player2NewCard.name + " of " + player2NewCard.suit);
   if (player1NewCard.value > player2NewCard.value) {
      player1.hand.push(...newPot.splice(0, newPot.length));
      console.log("You won the War!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else if (player1NewCard.value < player2NewCard.value) {
      player2.hand.push(...newPot.splice(0, newPot.length));
      console.log("Computer wins the War!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);   
   }
   else {
      isWar();
   }
}
}
function playGame() {
    if (player2.hand.length == 0 && player1.hand.length > 0) {
      console.log("game over, You Win!!!");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else if (player1.hand.length == 0 && player2.hand.length > 0) { 
      console.log("game over, Computer Wins 😞");
      console.log("please reset the game by clicking on the 'reset game' button");
   }
      else {
      do {
      playRound();
         } while (player2.hand.length > 0 && player1.hand.length > 0)        
} 
}

document.getElementById("resetButton").addEventListener("click", resetGame);
document.getElementById("playButton").addEventListener("click", playRound);
document.getElementById("playGameButton").addEventListener("click", playGame);




