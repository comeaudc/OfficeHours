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

// We could build a forum

// First need to build a post class that  our forum/factory will make
class Post {
    constructor(name, post) {
      this.name = name;
      this.post = post;
    }
  }
  
  // Now we build our factory that build posts
  class Forum {
    constructor(forumType) {
      this.forumType = forumType;
      this.posts = [];
    }
    showPosts() {
      for (let element of this.posts) console.log(element);
    }
  
    showForum() {
      console.log(this);
    }
  
    addPosts(name, post) {
      let newPost = new Post(name, post);
      this.posts.unshift(newPost);
    }
  
    deleteFirstPost() {
      this.posts.shift();
    }
  }
  
  const pets = new Forum('Animals');
  
  pets.addPosts('Suneetha', 'Hello, World!!');
  pets.addPosts('Kit', 'I love Dogs');
  pets.addPosts('Pranusha', 'I love elephants!!!');
  pets.addPosts('Emmanuel', ' I really dig whales');
  pets.addPosts('Dylan', 'Ferrets are mid');
  pets.showForum();
  

  // Create inital stack
let initialStack = ['dog', 'cat', 'chicken'];

// Create class for creating pieces of data
class DataBank {
  constructor(initialData) {
    this.data = [...initialData];
  }
  showMemoryStack() {
    console.log(this.data);
  }
  createData(input) {
    this.data.unshift(input);
    console.log(`Updated Data ${this.data}`)
  }

  eraseLastAdded() {
    this.data.shift();
    console.log(`Updated Data ${this.data}`)
  }
  search(query) {
    if (this.data.includes(query)) {
      let index = this.data.indexOf(query);
      console.log(`Found ${query} at index ${index}`);
    } else {
      console.log('Item Not Found');
    }
  }
  searchAndDelete(query) {
    if (this.data.includes(query)) {
      let index = this.data.indexOf(query);
      this.data.splice(index, 1);
      console.log(`${query} at index ${index} was deleted`);
    } else {
      console.log('Item Not Found, nothing deleted');
    }
  }
}

let animals = new DataBank(initialStack);
animals.showMemoryStack()
animals.createData('puppie');
animals.search('dog');
animals.showMemoryStack();
animals.searchAndDelete('doggie')
animals.showMemoryStack()