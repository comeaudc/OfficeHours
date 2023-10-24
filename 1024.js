// // Build a deck of cards using classes and factories

// //Card class
// class Card {
//   constructor(suit, value) {
//     this.suit = suit;
//     this.value = value;
//   }
// }

// // Arrays to loop over
// const suits = ["clubs", "spades", "hearts", "diamonds"]
// const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

// // Card factory
// class Deck {
//   constructor() {
//     this.cards = [];
//   }

//   buildDeck(suits, values) {
//     //loop over suites to create values
//     for(let suit of suits){
//         for (let value of values){
//             let newCard = new Card(suit, value)
//             this.cards.push(newCard)
//         }
//     }
//   }
//   showDeck(){
//     for(let card of this.cards){
//         console.log(card)
//     }
//   }
// }

// let newDeck = new Deck()
// newDeck.buildDeck(suits, values)
// newDeck.showDeck()

// Create Initial class
class Cars {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

// Create Factory class that uses a method to build initial class
class Factory {
  constructor(company) {
    this.company = company;
    //Array for memory storage, to hold factory inventory
    this.warehouse = [];
  }

  //Method that buils initial class
  buildACar(model, year, color) {
    //first build car
    let newCar = new Cars(model, year, color);
    this.warehouse.push(newCar);
    //then send to warehourse
  }
}

let newFactory = new Factory('Toyota');

newFactory.buildACar('corolla', 2023, 'Red');
newFactory.buildACar('Tacoma', 2023, 'white');
newFactory.buildACar('Camery', 2023, 'pink');
newFactory.buildACar('Sienna', 2023, 'blue');
newFactory.buildACar('Tundra', 2023, 'green');

console.log(newFactory);

const hondaFactory = new Factory("Honda")

// const car1 = new Cars("civic", 2012, "flames")
// newFactory.warehouse.push(car1)
//  console.log(newFactory)