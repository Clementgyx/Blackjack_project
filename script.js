// const suits = ["♥", "♦", "♣", "♠"]; //Array of suits
// const ranks = [
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
//   "A",
// ]; //array of the rank of cards
// //value of the cards
// const value = {
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   10: 10,
//   J: 10,
//   Q: 10,
//   K: 10,
//   A: 11,
// };
// const deck = []; //empty deck to push the cards in

// let playerHand = []; // make it a object instead? how do i wanna keep my
// //for loop to count all the suits inside
// for (let countSuits = 0; countSuits < 4; countSuits++) {
//   //for loop to count all the rank inside
//   for (let countRanks = 0; countRanks < 13; countRanks++) {
//     //you can append arrays like this
//     // console.log(ranks[countRanks] + suits[countSuits]);
//     //adds and push the 2 arrays together, whichever order of which array comes first. In this case rank goes first, then suits.
//     deck.push(ranks[countRanks] + suits[countSuits]);
//   }
// }
// //checking if there are 52 cards inside the array of deck.(works!)
// // console.log(deck);

// //make a shuffle function(works!)
// function shuffle() {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const newIndex = Math.floor(Math.random() * (i + 1));
//     const oldValue = deck[newIndex];
//     deck[newIndex] = deck[i];
//     deck[i] = oldValue;
//   }
// }
// //checking if shuffle works
// shuffle();
// console.log(deck);
// function checkValue() {
//   // count the value of hand
//   playerHand;
// }

// //pop the first card of the deck
// function pop() {
//   return deck.shift();
// }
// //player will take the first 2 cards of a shuffled deck
// function startGame() {
//   shuffle();
//   playerHand = deck.slice(0, 2);
//   console.log(playerHand);
// }
// startGame();

//create a hit function
// think of flow of code
//create a check value in hand function, check value of cards in hand and assigns to a value wariable.
//function when comparevalue between
//function getvalue from cards = array
//constant player hand = []
//let card = {value:9, card:"9hearts"}// make something push the values into the player hand of cards
//let playerhandvalue = 0
//for

////This doesn't call the values of the cards on the player hands, cause they are all in different arrays.
//Gonna do the 52 entires method as a backup.

// const deck = [
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,
//   10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8,
//   9, 10, 10, 10, 10, 11,
// ];
// let playerHand = "";
// let dealerHand = "";
// const playerHandDisplay = document.getElementById("player-hand");
// startGame();
// playerHandDisplay.innerHTML = playerHand;
// document.getElementById("player-value").innerHTML = getHandValue(playerHand);
// document.getElementById("dealer-hand").innerHTML = dealerHand;
// document.getElementById("dealer-value").innerHTML = getHandValue(dealerHand);

// function shuffle(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const newIndex = Math.floor(Math.random() * (i + 1));
//     const oldValue = deck[newIndex];
//     deck[newIndex] = deck[i];
//     deck[i] = oldValue;
//     return oldValue;
//   }
// }

// function startGame() {
//   playerHand = [shuffle(deck), shuffle(deck)];
//   dealerHand = [shuffle(deck), shuffle(deck)];
// }

// function getHandValue() {
//   let sum = 0;
//   hand = playerHand;

//   for (let i = 0; i < hand.length; i++) {
//     sum += hand[i];
//   }
//   return sum;
// }

// // function checkHand(playerHand) {
// //   let check = playerHand.tostring();
// //   return check;
// // }

// function hit() {
//   playerHand.push(shuffle(deck));
//   playerHandDisplay.innerHTML = playerHand;
//   console.log(playerHand);
//   if (getHandValue(playerHand) > 21) {
//     document.querySelector("#game-status").innerHTML = "Bust!";
//   }
// }

// function stand() {
//   if (
//     getHandValue(playerHand) > 21 ||
//     getHandValue(playerHand) < getHandValue(dealerHand)
//   ) {
//     document.querySelector("#game-status").innerHTML = "BUST!!!";
//   } else {
//     document.querySelector("#game-status").innerHTML = "YOU WIN!!!";
//   }
// }

// document.querySelector(".hit").addEventListener("click", hit);
// checkHand(playerHand);
// document.getElementById("player-hand").innerHTML = playerHand;
// document.getElementById("player-value").innerHTML = getHandValue(playerHand);
// document.getElementById("dealer-hand").innerHTML = dealerHand;
// document.getElementById("dealer-value").innerHTML = getHandValue(dealerHand);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const suit = ["♦", "♣", "♥", "♠"];
const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const value = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11,
};
let playerHand = [];
let dealerHand = [];
const playerHandDisplay = document.getElementById("player-hand");
let playerValueTotal = document.getElementById("player-value");

const dealerHandDisplay = document.getElementById("dealer-hand");
let dealerValueTotal = document.getElementById("dealer-value");

document.querySelector(".hit").addEventListener("click", hit);
document.querySelector(".stand").addEventListener("click", stand);
document.querySelector(".deal").addEventListener("click", deal);
document.querySelector(".reset").addEventListener("click", resetDeck);

//this creates a deck of cards
class Deck {
  constructor(cards = generateDeckOfCards()) {
    this.cards = cards;
  }
  get numberOfCards() {
    //getter that returns all the cards in the deck
    return this.cards.length;
  }
  shuffle() {
    //looping thru all our cards and swapping for another card
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

//creates a class of cards
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
//this is the function that makes 52 cards
function generateDeckOfCards() {
  return suit.flatMap((suit) => {
    return rank.flatMap((rank) => {
      // return value.map((value) => {
      return new Card(suit, rank);
    });
  });
}

// generateDeckOfCards();
// console.log(deckOfCards);

let deck = new Deck(); // deck created

function deal() {
  startGame();
}

function resetDeck() {
  playerValueTotal.innerHTML = " ";
  playerHandDisplay.innerHTML = " ";
  dealerValueTotal.innerHTML = " ";
  dealerHandDisplay.innerHTML = " ";
  document.querySelector("#game-status").innerHTML = " ";
  playerHand = [];
  dealerHand = [];
  deck = new Deck();
}

function startGame() {
  deck.shuffle();
  // playerHand = deck.cards.slice(0, 2);//use shift instead
  playerHand.push(deck.cards.shift());
  dealerHand.push(deck.cards.shift());
  playerHand.push(deck.cards.shift());
  dealerHand.push(deck.cards.shift());
  playerValueTotal.innerHTML = getValueInHand();
  dealerValueTotal.innerHTML = getDealerValueInHand();
  cardHand();
  dealerCardHand();
  getValueInHand();
  getDealerValueInHand();
  if (getValueInHand() === 21) {
    document.querySelector("#game-status").innerHTML = "Blackjack! You win!";
  } else if ((getValueInHand() === 21) === getDealerValueInHand()) {
    document.querySelector("#game-status").innerHTML =
      "Double blackjack! It's a tie!";
  }
  if (getDealerValueInHand() === 21) {
    document.querySelector("#game-status").innerHTML =
      "You lose! Dealer has blackjack!";
  }
  // deck.cards.splice(0, 2);//using shift instead
  console.log(playerHand);
  console.log(dealerHand);
  console.log(deck);
}
//function to make a div of cards
function cardHand() {
  let hand = playerHand;
  for (let i = 0; i < hand.length; i++) {
    let createCard = document.createElement("div");
    createCard.setAttribute("class", "card");
    createCard.setAttribute("rank", `${hand[i].rank}`);
    createCard.setAttribute("suit", `${hand[i].suit}`);
    createCard.innerText = `${hand[i].rank} ${hand[i].suit}`;
    document.querySelector("#player-hand").append(createCard);
  }
}

function dealerCardHand() {
  let hand = dealerHand;
  for (let i = 0; i < hand.length; i++) {
    let createCard = document.createElement("div");
    createCard.setAttribute("class", "card");
    createCard.setAttribute("rank", `${hand[i].rank}`);
    createCard.setAttribute("suit", `${hand[i].suit}`);
    createCard.innerText = `${hand[i].rank} ${hand[i].suit}`;
    document.querySelector("#dealer-hand").append(createCard);
  }
}

function getValueInHand() {
  let cardValueInHand = 0;
  let hand = playerHand;
  for (let i = 0; i < hand.length; i++) {
    cardValueInHand += value[hand[i].rank];
    console.log(cardValueInHand);
  }
  return cardValueInHand;
}

function getDealerValueInHand() {
  let cardValueInHand = 0;
  let hand = dealerHand;
  for (let i = 0; i < hand.length; i++) {
    cardValueInHand += value[hand[i].rank];
    console.log(cardValueInHand);
  }
  return cardValueInHand;
}

function hit() {
  clearPlayerCards();
  playerHand.push(deck.cards.shift());
  console.log(playerHand);
  console.log(deck);
  getValueInHand();
  playerValueTotal.innerHTML = getValueInHand();
  cardHand();
  if (getValueInHand() > 21) {
    document.querySelector("#game-status").innerHTML = "BUST! You lose!";
  }
}

function stand() {
  standCheck();
  standCheck();
  standCheck();
  standCheck();
  standCheck();
  standCheck();
  standCheck();
}

function standCheck() {
  //check dealer hand is under 17, then draw a card
  if (getDealerValueInHand() < 17) {
    clearDealerCards();
    dealerHand.push(deck.cards.shift());
    console.log(dealerHand);
    console.log(deck);
    getDealerValueInHand();
    dealerValueTotal.innerHTML = getDealerValueInHand();
    dealerCardHand();
    //If dealer hand is below 17, the code below won't run. Need to press stand to update again :/
  } else if (getDealerValueInHand() > 21) {
    document.querySelector("#game-status").innerHTML = "Dealer BUST!, You win!";
  } else if (getDealerValueInHand() > getValueInHand()) {
    document.querySelector("#game-status").innerHTML = "Dealer hand wins!";
  } else if (getValueInHand() === getDealerValueInHand()) {
    document.querySelector("#game-status").innerHTML = "It's a tie!";
  } else {
    document.querySelector("#game-status").innerHTML = "You win!";
  }
}

function clearPlayerCards() {
  playerHandDisplay.innerHTML = " ";
}

function clearDealerCards() {
  dealerHandDisplay.innerHTML = " ";
}
