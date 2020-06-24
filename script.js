let player1 = {
   hand: []
}
let player2 = {
   hand: []
}

let newDeck = [];
let pot = [];
let cards = [];

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
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}
function deck(){
   this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.names.length; j++) {
            cards.push(new card(j+1, this.names[j], this.suits[i]));
        }
    }
   return cards;
}
deck()
function shuffle(deckArray) {
   let newPosition ;
   let tempVar ;
   for (let i = deckArray.length - 1; i > 0; i--) {
      newPosition = Math.floor(Math.random() * (i + 1));
      tempVar = deckArray[i];
      deckArray[newPosition] = tempVar;
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
}

//end of reset function


function playRound() {
   player1Card = player1.hand.shift();
   player2Card = player2.hand.shift();
   console.log(player1Card);
   console.log(player2Card);
   pot.push(player1Card, player2Card);
   console.log(pot);
   if (player1Card.value > player2Card.value) {
      player1.hand.push(pot.shift(pot[0]), pot.shift(pot[1]));
      console.log("player 1 Wins!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else if (player1Card.value < player2Card.value) {
      player2.hand.push(pot.shift(pot[0]), pot.shift(pot[1]));
      console.log("player 2 Wins!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else {
      isWar()
   }
}
function isWar() {
   console.log("It's WAR!!!!!!!!!!!!!!!!!!")
   player1Card = player1.hand.shift(player1.hand);
   player1NewCard = player1.hand.shift(player1.hand);
   player2Card = player2.hand.shift(player1.hand);
   player2NewCard = player2.hand.shift(player1.hand);
   pot.push(player1Card, player1NewCard, player2Card, player2NewCard);
   console.log(pot);
   console.log(player1NewCard);
   console.log(player2NewCard);
   if (player1NewCard.value > player2NewCard.value) {
      player1.hand.push(pot.slice(0, pot[pot.length]-1));
      pot = []
      console.log("player 1 wins War!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);
   }
   else if (player1NewCard.value < player2NewCard.value) {
      player2.hand.push(pot.slice(0, pot[pot.length]-1));
      pot = []
      console.log("player 2 wins War!");
      console.log(`you have ${player1.hand.length} cards and computer has ${player2.hand.length} cards!`);   
   }
   else {
      isWar()
   }
}


document.getElementById("resetButton").addEventListener("click", resetGame)
document.getElementById("playButton").addEventListener("click", playRound)


/* if (player1.hand.length > 0 && player2.hand.length > 0){
   console.log("click on 'play round'")
}
   else if (player2.hand.length == 0 && player1.hand.length > 0) {
   console.log("game over, You Win!!!")
   console.log("please reset the game by clicking on the 'reset game' button")
}
   else if (player1.hand.length == 0 && player2.hand.length > 0) { 
   console.log("game over, Computer Wins '😞'")
   console.log("please reset the game by clicking on the 'reset game' button")
}
   else {
   console.log("click on 'reset game'")
}
*/




