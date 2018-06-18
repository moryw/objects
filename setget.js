const person = {
  _name: 'Matt',
  _age: 29,
  _yearsBaptized: 15,
  _yearsMarried: 1.8,

  sayHello() {
    return 'Hello!';
  },

  get name() {
    console.log('This is using getter.');
    return this._name;
  },

  set age(newAge) {
    if (typeof newAge === 'number' && newAge !== this._age) {
      this._age = newAge;
      console.log(`Age has been updated.`);
    } else {
      console.log('Invalid input');
      return 'Invalid input';
    };
  },

  get age() {
    return this._age;
  }

};

console.log(person.sayHello());
// console.log(person.age);
// person.age = 30;
// console.log(person.age);
// person._age = "thirty";
// console.log(person.age);
