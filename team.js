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

  addPlayer(firstName,lastName,age) {
    let player = {firstName: firstName, lastName: lastName, age: age};

    this.players.push(player);
  },

  get games() {
    return this._games;
  },

  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {opponent: opponentName, teamPoints: teamPoints, opponentPoints: opponentPoints};

    this.games.push(game);
  }

};

console.log("Before:");
console.log(team.players);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log("After:");
console.log(team.players);

console.log("Before:");
console.log(team.games);
team.addGame('Leafs', 4, 0);
team.addGame('Canadians', 2, 3);
team.addGame('Redwings', 0, 1);
console.log("After:");
console.log(team.games);











//end
