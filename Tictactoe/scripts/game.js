function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  //innerHtml 사용시 "" 주의! 내부 ""사용되었다면 '' 사용
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  //플레이어들 이름 설정을 하지 않았을 때 게임 시작 방지
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

//플레이어 턴 교체
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

//플레이어 게임판 pick
function selectGameField(event) {
  //게임판 사이의 빈공간 클릭시에도 태그 인식(OL)되는 것 방지
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectField = event.target;
  //게임 판 데이터 저장
  // html data 속성 접근시 dataset에 접근해야함.
  const selectColumn = selectField.dataset.col - 1;
  const selectRow = selectField.dataset.row - 1;
  //게임 판 데이터 중복 선택 방지
  if (gameData[selectRow][selectColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }
  gameData[selectRow][selectColumn] = activePlayer + 1;

  selectField.textContent = players[activePlayer].symbol;
  selectField.classList.add("disabled");

  const winnerId = checkForGameOver();
  //작동 확인
  //console.log(winnerId);

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  //승 : 가로 3개
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //승 : 세로 3개
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // 승 : 좌 대각선
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  //승 : 우 대각선
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  //무승부
  if (currentRound === 9) {
    return -1;
  }
  //승부 결정 x
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    //H2 태그의 SPan 접근
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
