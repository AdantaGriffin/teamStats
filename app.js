const team = {
    _players: [
      {firstName: 'Travis', lastName: 'Johnson', age: 35},      
      {firstName: 'ShatTim', lastName: 'Pratt', age: 33},   
      {firstName: 'Jason', lastName: 'Kariuki', age: 33}
      ],
    _games: [
      {opponent: 'Spurs' , teamPoints: 115, opponentPoints: 113},
      {opponent: 'Heat', teamPoints: 123, opponentPoints: 118},
      {opponent: 'Suns', teamPoints: 108, opponentPoints: 92}
    ],
  
    get players() {
      return this._players;
    }, 
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    },
  };
  
  team.addGame('Celtics', 120, 98)
  team.addGame('Nets', 98, 87)
  console.log(team.games)
  
  team.addPlayer('Jeremy', 'Spanks', 28);
  console.log(team.players)