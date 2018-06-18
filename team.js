const team = {
  _players: [
    {firstName: "Wayne",  lastName: "Gretzky",  age: 39},
    {firstName: "Pavel",  lastName: "Bure",     age: 35},
    {firstName: "Sidney", lastName: "Crosby",   age: 25}
  ],
  _games: [
    {opponent: "Oilers", teamPoints: 3, opponentPoints: 1},
    {opponent: "Flames", teamPoints: 2, opponentPoints: 3},
    {opponent: "Penguins", teamPoints: 1, opponentPoints: 0}
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer: (firstName,lastName,age) => {

  }

};


console.log(`The players are: ${team.players}`);
console.log(`The games are: ${team.games}`);

if (true) {

}
