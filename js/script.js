let isXTurn = true;
let gameOver = false;
let board = []
for (let i=0; i<3; i++) {
  board.push([' ',' ',' ']);
}

function getTurnCharacter() {
  if (isXTurn) {
    return "X";
  }
  return "0";
}

function setSquare(tileNum) {
  let num = tileNum.substring(tileNum.length-1, tileNum.length);
  num = parseInt(num) - 1;
  let row = Math.floor(num / 3);
  let col = num % 3;

  board[row][col] = getTurnCharacter();
  $(tileNum).html(getTurnCharacter());
}

function winState(winner) {
  $("#winner").html(winner + " Wins The Game");
}

function checkVertical() {
  for (let i=0; i<3; i++) {
    let s = new Set()
    for (let j=0; j<3; j++) {
      s.add(board[i][j]);
    }
    if (s.size != 1) {
      continue;
    }
    let myChar = s.values().next()['value'];
    if (myChar != " ") {
      return myChar
    }
  }
  return " "
}

function checkHorizontal() {
  for (let i=0; i<3; i++) {
    let s = new Set();
    for (let j=0; j<3; j++) {
      s.add(board[j][i]);
    }
    if (s.size != 1) {
      continue;
    }
    let myChar = s.values().next()['value'];
    if (myChar != " ") {
      return myChar
    }
  }
  return " "
}

function checkDiagonal() {
  let s1 = new Set();
  s1.add(board[0][0]);
  s1.add(board[1][1]);
  s1.add(board[2][2]);
  if (s1.size == 1) {
    let myChar = s1.values().next()['value'];
    if (myChar != " ") {
      return myChar
    }
  }

  let s2 = new Set();
  s2.add(board[0][2]);
  s2.add(board[1][1]);
  s2.add(board[2][0]);
  if (s2.size == 1) {
    let myChar = s2.values().next()['value'];
    if (myChar != " ") {
      return myChar
    }
  }
  return " ";
}

function checkWinner() {
  let winner = checkVertical();
  if (winner != " ") {
    return winState(winner);
  }

  winner = checkHorizontal();
  if (winner != " ") {
    return winState(winner);
  }

  winner = checkDiagonal();
  if (winner != " ") {
    return winState(winner);
  }
}

function performLogic(tileNum) {
  setSquare(tileNum);
  $("#winner").html(getTurnCharacter());
  isXTurn = !isXTurn;
  checkWinner();
}


$("#tile1").click(function() {
    performLogic("#tile1");
});

$("#tile2").click(function() {
    performLogic("#tile2");
});

$("#tile3").click(function() {
    performLogic("#tile3");
});

$("#tile4").click(function() {
    performLogic("#tile4");
});

$("#tile5").click(function() {
    performLogic("#tile5");
});

$("#tile6").click(function() {
    performLogic("#tile6");
});

$("#tile7").click(function() {
    performLogic("#tile7");
});

$("#tile8").click(function() {
    performLogic("#tile8");
});

$("#tile9").click(function() {
    performLogic("#tile9");
});

