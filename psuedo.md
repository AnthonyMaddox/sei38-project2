initial game logic:

// two player game

resetGame

// deck has 52 cards

// deck is shuffled and each player recieves half of the deck (26 unknown random cards)

playRound

// players play at the same time revealing their top card of their deck and putting it in the pot

   compareCards, playerWinsRound

   // winner with the highest value card takes all cards in the pot and they are returned face down at the bottom of their deck

   // if both card values ==, than it's war

   isWar

   // if war, each player puts another card from their deck into the pot facedown and then plays another round

   // if new card values again equal each other, it's war. Else highest value card wins

   //  once a player cannot play anymore cards during a round, that player loses and the other player wins the game

playerWinsGame

// after a player wins game, score is logged, game resets with deck shuffled and new decks dealt to each player

nouns: variables

player1,
player2,
card,
deck,
pot,
round,
result,
score,

verbs: functions

resetGame,
shuffleDeck,
dealDeck,
playRound,
compareCards,
playerWinsRound,
isWar,
playerWinsGame,