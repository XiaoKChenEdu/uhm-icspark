var Text = document.getElementById("Text");
var Box0 = document.getElementById("box0");
var Box1 = document.getElementById("box1");
var Box2 = document.getElementById("box2");
var Box3 = document.getElementById("box3");
var Box4 = document.getElementById("box4");
var Box5 = document.getElementById("box5");
var Box6 = document.getElementById("box6");
var Box7 = document.getElementById("box7");
var Box8 = document.getElementById("box8");

var Players = 1;
var TicTac = '';

function Reset() {
  Players = 1;
  TicTac = '';
  Text.innerHTML = 'Tic-Tac-Toe'
  Text.style.color = null;

  for (var i = 0; i < 9; i++) {
    var Boxes = [Box0, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8];
    Boxes[i].innerHTML = null;
  }
  for (var i = 0; i < 9; i++) {
    var Boxes = [Box0, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8];
    Boxes[i].style.pointerEvents = null;
  }
  for (var i = 0; i < 9; i++) {
    var Boxes = [Box0, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8];
    Boxes[i].style.backgroundColor = null;
  }
}

function CheckBorad() {
  var i;
  var Boxes = [Box0, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8];
  if ((Box0.innerHTML == 'X') && (Box1.innerHTML == 'X') && (Box2.innerHTML == 'X')) {
    Box0.style.backgroundColor = 'green';
    Box1.style.backgroundColor = 'green';
    Box2.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box3.innerHTML == 'X') && (Box4.innerHTML == 'X') && (Box5.innerHTML == 'X')) {
    Box3.style.backgroundColor = 'green';
    Box4.style.backgroundColor = 'green';
    Box5.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box6.innerHTML == 'X') && (Box7.innerHTML == 'X') && (Box8.innerHTML == 'X')) {
    Box6.style.backgroundColor = 'green';
    Box7.style.backgroundColor = 'green';
    Box8.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box0.innerHTML == 'X') && (Box3.innerHTML == 'X') && (Box6.innerHTML == 'X')) {
    Box0.style.backgroundColor = 'green';
    Box3.style.backgroundColor = 'green';
    Box6.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box1.innerHTML == 'X') && (Box4.innerHTML == 'X') && (Box7.innerHTML == 'X')) {
    Box1.style.backgroundColor = 'green';
    Box4.style.backgroundColor = 'green';
    Box7.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box2.innerHTML == 'X') && (Box5.innerHTML == 'X') && (Box8.innerHTML == 'X')) {
    Box2.style.backgroundColor = 'green';
    Box5.style.backgroundColor = 'green';
    Box8.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box0.innerHTML == 'X') && (Box4.innerHTML == 'X') && (Box8.innerHTML == 'X')) {
    Box0.style.backgroundColor = 'green';
    Box4.style.backgroundColor = 'green';
    Box8.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box2.innerHTML == 'X') && (Box4.innerHTML == 'X') && (Box6.innerHTML == 'X')) {
    Box2.style.backgroundColor = 'green';
    Box4.style.backgroundColor = 'green';
    Box6.style.backgroundColor = 'green';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 1 wins';
    Text.style.color = 'green';
  } else if ((Box0.innerHTML == 'O') && (Box1.innerHTML == 'O') && (Box2.innerHTML == 'O')) {
    Box0.style.backgroundColor = 'red';
    Box1.style.backgroundColor = 'red';
    Box2.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box3.innerHTML == 'O') && (Box4.innerHTML == 'O') && (Box5.innerHTML == 'O')) {
    Box3.style.backgroundColor = 'red';
    Box4.style.backgroundColor = 'red';
    Box5.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box6.innerHTML == 'O') && (Box7.innerHTML == 'O') && (Box8.innerHTML == 'O')) {
    Box6.style.backgroundColor = 'red';
    Box7.style.backgroundColor = 'red';
    Box8.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box0.innerHTML == 'O') && (Box3.innerHTML == 'O') && (Box6.innerHTML == 'O')) {
    Box0.style.backgroundColor = 'red';
    Box3.style.backgroundColor = 'red';
    Box6.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box1.innerHTML == 'O') && (Box4.innerHTML == 'O') && (Box7.innerHTML == 'O')) {
    Box1.style.backgroundColor = 'red';
    Box4.style.backgroundColor = 'red';
    Box7.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box2.innerHTML == 'O') && (Box5.innerHTML == 'O') && (Box8.innerHTML == 'O')) {
    Box2.style.backgroundColor = 'red';
    Box5.style.backgroundColor = 'red';
    Box8.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box0.innerHTML == 'O') && (Box4.innerHTML == 'O') && (Box8.innerHTML == 'O')) {
    Box0.style.backgroundColor = 'red';
    Box4.style.backgroundColor = 'red';
    Box8.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box2.innerHTML == 'O') && (Box4.innerHTML == 'O') && (Box6.innerHTML == 'O')) {
    Box2.style.backgroundColor = 'red';
    Box4.style.backgroundColor = 'red';
    Box6.style.backgroundColor = 'red';
    for (i = 0; i < 9; i++) {
      Boxes[i].style.pointerEvents = 'none';
    }
    Text.innerHTML = 'Player 2 wins';
    Text.style.color = 'red';
  } else if ((Box0.innerHTML != '') && (Box1.innerHTML != '') && (Box2.innerHTML != '') && (Box3.innerHTML != '') && (Box4.innerHTML != '') && (Box5.innerHTML != '') && (Box6.innerHTML != '') && (Box7.innerHTML != '') && (Box8.innerHTML != '')) {
    Text.innerHTML = 'Draw';
    Text.style.color = '#9B870C';
  }
}

function CheckPlayer() {
    if (Players == 1) {
    TicTac = 'X';
  } else if (Players == 2) {
    TicTac = 'O';
  }
  return TicTac;
}

function UpdatePlayer() {
  if (TicTac == 'X') {
    Players = 2;
  } else if (TicTac == 'O') {
    Players = 1;
  }
  return Players;
}

function Update(number) {
  CheckPlayer();
  var Box = document.getElementById("box" + number);
  Box.innerHTML = TicTac;
  Box.style.pointerEvents = "none";
  UpdatePlayer()
  CheckBorad()
}
