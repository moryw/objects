// practice with making objects
let restaurant = {
  name: "Italian Bistro", //object property/key: value -string
  seatingCapacity: 120, //object property/key: value -number
  hasDineInSpecial: false, //object property/key: value -boolean
  entrees: ["Penne alla Bolognese", "Chicken Cacciatore", "Linguine pesto"], //object property/key: value -array
  //property/key to a function is called a method see below
  openRestaurant: () => { //the old way before ES6
    return "Unlock the door, flip the open sign. We are open for business!";
  },
  closeRestaurant() { //updated way since ES6, no colon or arrow
    return 'Lock the door, flip the open sign. We are closed.'
  },
  hasSpecial() { //use keyword 'this.propertName' to access property/key within the same object
    if (this.hasDineInSpecial) {
      return `Write the special on the board.`;
    } else {
      return `Don't write on the board!`;
    }
  }
};

//console.log(`Restaurant info:`);
//console.log(restaurant);;
// console.log(restaurant.openRestaurant()); //log an object method
// console.log(restaurant.closeRestaurant()); //log an object method
//console.log(restaurant.hasSpecial());

// //one way to access a value of an object is to use the dot notation
// console.log(restaurant.entrees);
// //another way to acces a value of an object is to use bracket notation
// console.log(restaurant['entrees']);


//example of how to use bracket notation with an if statement
let meal = 'none';
let time = 19;
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 happyHour: 'Drinks are 15% off',
 none: 'There are no specials currently'
};

if (time > 7 && time <= 11) { // from 7 - 11 am
  meal = 'breakfast';
} else if (time >= 12 && time < 16) { // from 12 - 4 pm
  meal = 'lunch';
} else if (time >= 17 && time < 20) {// from 5 - 8pm
  meal = 'happyHour'
}

//console.log(restaurantSpecials[meal]);

//to add a property to an object assign a value to a new key here is 2 ways
restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

//to add/change/update the value of a property
restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta', 'Caprese Salad'];
restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];

//console.log(`Updated Restaurant info:`);
//console.log(restaurant);




//my practice
let day = 'Sunday';
let alarm ;

const person = {
  name: 'Matt',
  age: 29,
  weekendAlarm: 'Alarm is not needed',
  weekAlarm: 'Alarm is set to 7am',
  sayHello: (word) => { //the old way before ES6
    return `Hello, ${word}!`;
  },
  sayGoodbye(word) { //the new way since ES6
    return `Later, ${word}!`
  },
  sayHelloName() {
    return `Hello, my name is ${this.name}`
  }
};

//console.log(person);

const friend = {
  name: 'Glo',
}

friend.sayHelloName = person.sayHelloName;

//check what alarm should be set
if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
};

//add hobbies to person
person.hobbies = ['Gaming', 'Hacking'];

//change the value of hobbies property
person.hobbies = [`Gaming`]

//console.log(`Updated person:`);
//console.log(person);

//console.log(`${person.name}'s ${person[alarm]}`);
console.log(person.sayHelloName());
console.log(friend.sayHelloName());
//console.log(person.sayHello('Boss'));
//console.log(`${person.name}'s age is ${person.age} and his favorite hobby is ${person.hobbies[0]}.`);
//console.log(person.sayGoodbye('Dude'));


















//end
