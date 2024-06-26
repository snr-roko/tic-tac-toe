// An IIFE to tuck away gameboard pieces
const gameboard = (() => {
  const gameboard = [1,2,3,4,5,6,7,8,9];
  // game winning patterns
const patterns = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

  return {gameboard, patterns};
})();


// players object
const players = {
  player1: [],
  player2: []
}





// A function to remove a particular cell chosen by a player
// And pushes that cell to his array of choices
function choose(player) {
  const choice = parseInt(prompt("Choose your cell, "), 10);
  player.push(choice);
  index = gameboard.gameboard.indexOf(choice);
  gameboard.gameboard.splice(index, 1);
}

// A function to check if a pattern has been matched 
function checkWinner(player, pattern) {
  if(player.length < 3) return false;

  for(let i = 0; i < pattern.length; i ++) {
    if(validateArrays(player, pattern[i])) return true;
  }

  return false;
}

// A function to check if all values in a pattern can be found in a player's array
function validateArrays(array1, array2) {
  return array2.every((value) => array1.includes(value));
}


// The Game function
function tictactoe() {
  while(true) {
    if(gameboard.gameboard.length === 0) {
      console.log("It is a tie!!!");
      break;
    }
    choose(players.player1);
    if(checkWinner(players.player1, gameboard.patterns)) {
      console.log("Player1 wins!!!");
      break;
    } else {
      if(gameboard.gameboard.length === 0) {
        console.log("It is a tie!!!");
        break;
      }
      choose(players.player2);
      if(checkWinner(players.player2, gameboard.patterns)) {
        console.log("Player2 wins!!!");
        break;
      }
    }
  }
    
}