const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Manuel',
      lastName: 'Esperado',
      age: 24
    },
    {
      firstName: 'Lucio',
      lastName: 'Picasso',
      age: 32
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Panthers',
      teamPoints: 35,
      opponentPoints: 40
    },
    {
      opponent: 'Bulldogs',
      teamPoints: 40,
      opponentPoints: 32
    }
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

// Add a new player to your team
addPlayer (firstName, lastName, age) {
const player = {
  firstName: firstName,
  lastName: lastName,
  age: age
}; 
this._players.push(player);
},

//Add a method for recording game results
addGame (opponent, teamPoints, opponentPoints) {
  const game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  this._games.push(game);
}

};

//invoke addPlayer method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

//invoke addGames method
team.addGame('Eels', 25, 34);
team.addGame('Cowboys', 45, 21);
team.addGame('Patriots', 29, 47);
console.log(team.games);