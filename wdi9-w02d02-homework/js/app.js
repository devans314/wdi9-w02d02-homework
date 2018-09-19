
// use given array(cards) of pokemon cards to randomly draw 6 cards
// split them to objects(players) stored as properties
// use a function with a nested while loop to simulate an actual player battle
//
// console.log(the scoreboard after each round)
// console.log(the cards in the player's hand)
// console.log(the cards in the computer's hand)
// console.log(the cards that are in play)
// console.log(the winner of each round (or if there was a tie))
// console.log(the winner of the game when the game is over)
// console.log(the final score when the game is over)

const cards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]
const size = 6;

function getNewDeck(cards, size) {
    let shuffled = cards.slice(0), i = cards.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

    
var randomCards = getNewDeck(cards, 6);
// console.log(randomCards);


let playerCards = randomCards.slice(0,3);
let autoPlayerCards = randomCards.slice(3,6);
// console.log(playerCards, autoPlayerCards);


const player = {
    hand: playerCards,
    score: 0
}
// console.log(player.hand);


const autoPlayer = {
    hand: autoPlayerCards,
    score: 0

}
// console.log(autoPlayer.hand)

const cardsInPlay = {
      card1: playerCards[j],
      card2: autoPlayerCards[j]
}
// console.log(cardsInPlay);



const battle = () => {
  for(let j = 0; j < 2; j++){
    console.log(`Player Chooses ${cardsInPlay.card1.name}! Go ${cardsInPlay.card1.name}!`)
    console.log(`autoPlayer Chooses ${cardsInPlay.card2.name}! Go ${cardsInPlay.card2.name}!`)
    if (cardsInPlay.card1.damage > cardsInPlay.card2.damage){
            // console.log(cardsInPlay.card1[j]);
            console.log("Player Wins!");
            return player.score += 1
    }  else {
            console.log("Player Loses!");
            return autoPlayer.score += 1
    }
  }  
}
// console.log(battle());



while(player.score || autoPlayer.score < 3){
    battle();
}

console.log(`Player Score: ${player.score}`)
console.log(`autoPlayer Score: ${autoPlayer.score}`)