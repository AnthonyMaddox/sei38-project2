let player1 = {
   hand: []
}
let player2 = {
   hand: []
}



function resetGame() {
   let cards = [];
   let newDeck ;

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}
function deck(){
   this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for(let i = 0; i < this.suits.length; i++ ) {
        for( let j = 0; j < this.names.length; j++) {
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

function dealHands () {
   let newCard ;
   for (let i = newDeck.length; i > 0; i--) {
      if (i % 2 == 0) {
         newCard = newDeck.pop();
         player1.hand.push(newCard);
      } 
      else {
         newCard = newDeck.pop();
         player2.hand.push(newCard);
      } 
   }  
}
dealHands()
}

if (player1.hand.length == 0 || player2.hand.length == 0) {
   resetGame()
}

console.log(player1.hand);
console.log(player2.hand);
