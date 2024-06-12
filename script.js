// cells
const gameboard = [1,2,3,4,5,6,7,8,9];

// players object
const players = {
  player1: [],
  player2: []
}

// game winning patterns
const patterns = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7],
  [1,2,3].reverse(),
  [4,5,6].reverse(),
  [7,8,9].reverse(),
  [1,4,7].reverse(),
  [2,5,8].reverse(),
  [3,6,9].reverse(),
  [1,5,9].reverse(),
  [3,5,7].reverse()
]


// A function to remove a particular cell chosen by a player
// And pushes that cell to his array of choices
function choose(player) {
  const choice = prompt('Choose a cell').parseInt();
  player.push(choice);
  index = gameboard.indexOf(choice);
  gameboard.splice(index, 1);
}

// A function to check if a pattern has been matched 
function checkWinner(player, pattern) {
  const combinations = generateCombinations(player);
  const length = pattern.length;
  for (let i = 0; i < combinations.length; i++) {
    for (let j = 0; j < length; j++) {
      if (validateArrays(player[i], pattern[j])) {
        return true;
      } else {
      return false;
    }
  }

}
}

// A function to check if two arrays are equal
function validateArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else return true;
  }
}


// A function to generate all possible combinations of elements in an array
function generateCombinations(player) {
  length = player.length;
  combinations = [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        combinations.push([player[i], player[j], player[k]]);
      }
  }
}
  return combinations;
}


