
// use given array(cards) of pokemon cards to randomly draw 6 cards
// split them to objects(players) stored as properties
// use a function with a nested for loop to simulate an actual player battle
// use a while loop to run battle function
// console.log(the scoreboard after each round)
// console.log(the cards in the player's hand)
// console.log(the cards in the computer's hand)
// console.log(the cards that are in play)
// console.log(the winner of each round (or if there was a tie))
// console.log(the winner of the game when the game is over)
// console.log(the final score when the game is over)


let player1;
let player2;
let attacker1;
let attacker2;
const cardsInPlay = []
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

const getHand = (arr) => {
  let cardsIndex = Math.floor(Math.random() *(cards.length));
  arr.push(cards[cardsIndex]);
  cardsInPlay.push(cards[cardsIndex]);
  cards.splice(cardsIndex, 1);
  return arr;
}

class Player  {
  constructor(name){
  this.name = name;
  this.hand = [];
  this.points = 0;
  this.roundsWon = 0;
  }
  playCard(index){
    let attack = this.hand[index].damage;
    this.hand.splice(index, 1);
    return attack;
  }
}
const eggbert = new Player('Eggbert')
const computer = new Player('Computer')

const gameStart = (handSize, player1, player2) => {
  attacker1 = player1;
  attacker2 = player2;
  for (let i = 0; i < handSize; i++) {
      getHand(player1.hand);   
      getHand(player2.hand);   
  }
  return 'let the game begin';
}

const battle = () => {
  while(attacker1.hand.length > 0 && attacker2.hand.length > 0){
      let attack1 = attacker1.playCard(0);
      let attack2 = attacker2.playCard(0);
      if (attack1 > attack2){
          attacker1.points++;
      }
      if (attack2 > attack1){
          attacker2.points++;
      }
      console.log(`Score: ${attacker1['name']}: ${attacker1.points} - ${attacker2['name']}: ${attacker2.points} `);
  }
  let winner;
  if (attacker1.points > attacker2.points){
      attacker1.roundsWon++;
      winner = attacker1['name'];
  }
  if (attacker2.points > attacker1.points){
      attacker2.roundsWon++;
      winner = attacker2['name'];
  }
  console.log(`rounds won:  ${attacker1['name']}: ${attacker1.roundsWon} - ${attacker2['name']}: ${attacker2.roundsWon}`);
  cards.concat(cardsInPlay);
  return console.log(winner + ' WON!');
}
gameStart(9, eggbert, computer);
battle();

