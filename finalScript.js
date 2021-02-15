const playerOne = "O";
const playerTwo = "X";

let completeBoard = false;
let playBoard = ["", "", "", "", "", "", "", "", ""];

const grid = document.querySelector(".grid");

const youWon = document.getElementById("winner");
var turn=1;


checkComplete = () => {
  let flag = true;
  playBoard.forEach(element => {
    if (element != playerOne && element != playerTwo) {
      flag = false;
    }
  });
  completeBoard = flag;
};


const lineCheck = (a, b, c) => {
  return (
    playBoard[a] == playBoard[b] &&
    playBoard[b] == playBoard[c] &&
    (playBoard[a] == playerOne || playBoard[a] == playerTwo)
  );
};

const matchCheck = () => {
  for (i = 0; i < 9; i += 3) {
    if (lineCheck(i, i + 1, i + 2)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 1}`).classList.add("win");
      document.querySelector(`#block_${i + 2}`).classList.add("win");
      return playBoard[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (lineCheck(i, i + 3, i + 6)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 3}`).classList.add("win");
      document.querySelector(`#block_${i + 6}`).classList.add("win");
      return playBoard[i];
    }
  }
  if (lineCheck(0, 4, 8)) {
    document.querySelector("#block_0").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_8").classList.add("win");
    return playBoard[0];
  }
  if (lineCheck(2, 4, 6)) {
    document.querySelector("#block_2").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_6").classList.add("win");
    return playBoard[2];
  }
  return "";
};

const checkWinner = () => {
  let res = matchCheck();
 
  if (res == playerOne) {
    winner.classList.remove("playerTwoWin");
    winner.innerText = "Winner is Player 1 !!";
    winner.classList.add("playerOneWin");
    completeBoard = true
  } else if (res == playerTwo) {
    winner.classList.remove("playerOneWin");
    winner.innerText = "Winner is Player 2 !!";
    winner.classList.add("playerTwoWin");
    completeBoard = true
  } else if (completeBoard) {
   
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};


const buildBoard = () => {
    
  grid.innerHTML = ""
  playBoard.forEach((e, i) => {
    
    
    grid.innerHTML += `<div id="block_${i}" class="block" onclick="addplayerOneMove(${i})"></div>`
    
    if (e == playerOne || e == playerTwo) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
      
    }
    if(e==playerOne){
         
        document.querySelector(`#block_${i}`).classList.add("cat");
        
    }
    if(e==playerTwo){
        
        document.querySelector(`#block_${i}`).classList.add("dog");
    }
    test();
   
 
    
    
  });
};

const loopGame = () => {
  buildBoard();
  checkComplete();
  checkWinner();
}

const addplayerOneMove = e => {

  if (!completeBoard && playBoard[e] == "") {
    if(turn==1){
        playBoard[e] = playerOne;
        turn=2;
        winner.innerText = "Player 2 turn";
         winner.classList.remove("playerOneWin");
         winner.classList.add("playerTwoWin");
        
    }
   
    else{
        playBoard[e] = playerTwo;
        turn=1;
        winner.innerText = "Player 1 turn";
         winner.classList.add("playerOneWin");
         winner.classList.remove("playerTwoWin");
    }
    
    loopGame();
   
  }
};

const addplayerTwoMove = e => {
    if (!completeBoard && playBoard[e] == "") {
        playBoard[e] = playerTwo;
        loopGame();
  }
};

const reset = () => {
  playBoard = ["", "", "", "", "", "", "", "", ""];
  completeBoard = false;
  winner.classList.remove("playerOneWin");
  winner.classList.remove("playerTwoWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  buildBoard();
};


buildBoard();


function test() {
    var e = document.getElementById("imageSet");
var strUser = e.value;
var image1,image2;
if(strUser=="set1"){
    image1="url(images/cat.jpg)";
    image2="url(images/dog.jpg)";
    console.log("ok");

}
if(strUser=="set2"){
    image1="url(images/green_ranger.jpg)";
    image2="url(images/red_ranger.jpg)";

}
if(strUser=="set3"){
    image1="url(images/redbull.jpg)";
    image2="url(images/monster.jpg)";

}

var x1 =document.getElementsByClassName('cat');

    for (let i = 0; i < x1.length; i++) {
      x1[i].style.backgroundImage=image1;
    }
    var x2 =document.getElementsByClassName('dog');
    for (let i = 0; i < x2.length; i++) {
      x2[i].style.backgroundImage=image2;
    }
  };




