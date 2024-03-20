let currentPlayer = "X"
const xCells = []
const oCells = []

function generateBoard() {
  let gameGridContainer = document.getElementById("game-grid-container")
  let gameGrid = document.createElement("div")
  gameGrid.setAttribute("class", "container text-center")
  gameGrid.setAttribute("id", "game-grid")
  for (let i = 0; i < 3; i++) {
    let gameRow = document.createElement("div")
    gameRow.setAttribute("class", "row")
    for (let j = 0; j < 3; j++) {
      let gameCol = document.createElement("div")
      gameCol.setAttribute("class", "col m-5")
      let cellNum = (i * 3) + j
      gameCol.setAttribute("id", `cell${cellNum}`)
      let cellButton = document.createElement("button")
      cellButton.setAttribute("type", "button")
      cellButton.setAttribute("class", "btn btn-primary")
      cellButton.setAttribute("id", `cellButton${cellNum}`)
      cellButton.setAttribute("onclick", `placeSymbol(${cellNum})`)
      gameCol.appendChild(cellButton)
      gameRow.appendChild(gameCol)
    }
    gameGrid.appendChild(gameRow)
  }
  gameGridContainer.appendChild(gameGrid)
}

function resetBoard() {
  let gameGrid = document.getElementById("game-grid")
  gameGrid.remove()
  let startButtonContainer = document.getElementById("start-button-container")
  let startButton = document.createElement("button")
  startButton.setAttribute("id", "start-button")
  startButton.setAttribute("type", "button")
  startButton.setAttribute("onclick", "startGame()")
  startButton.setAttribute("class", "btn btn-primary")
  startButton.innerText = "Start game"
  startButtonContainer.appendChild(startButton)
  let resetButton = document.getElementById("reset-button")
  resetButton.remove()
  let playerOutput = document.getElementById("player-output")
  playerOutput.innerText = ""
}

function disableCellButtons() {
  for (let i = 0; i < 9; i++) {
    let cellButton = document.getElementById(`cellButton${i}`)
    if (cellButton !== null) {
      cellButton.setAttribute("disabled", "")
    }
  }
}

function makeResetButton() {
  disableCellButtons()
  let resetButtonContainer = document.getElementById("reset-button-container")
  let resetButton = document.createElement("button")
  resetButton.setAttribute("type", "button")
  resetButton.setAttribute("class", "btn btn-primary")
  resetButton.setAttribute("id", "reset-button")
  resetButton.setAttribute("onclick", "resetBoard()")
  resetButton.innerText = "Reset board"
  resetButtonContainer.appendChild(resetButton)
}

function hasWinningCells(playerCells) {
  if (playerCells.includes(0) && playerCells.includes(1) && playerCells.includes(2)) {
    return true
  } else if (playerCells.includes(3) && playerCells.includes(4) && playerCells.includes(5)) {
    return true
  } else if (playerCells.includes(6) && playerCells.includes(7) && playerCells.includes(8)) {
    return true
  } else if (playerCells.includes(0) && playerCells.includes(3) && playerCells.includes(6)) {
    return true
  } else if (playerCells.includes(1) && playerCells.includes(4) && playerCells.includes(7)) {
    return true
  } else if (playerCells.includes(2) && playerCells.includes(5) && playerCells.includes(8)) {
    return true
  } else if (playerCells.includes(0) && playerCells.includes(4) && playerCells.includes(8)) {
    return true
  } else if (playerCells.includes(2) && playerCells.includes(4) && playerCells.includes(6)) {
    return true
  } else {
    return false
  }
}

function allCellsTaken() {
  for (let i = 0; i < 9; i++) {
    if (!xCells.includes(i) && !oCells.includes(i)) {
      return false
    }
  }
  return true
}

function placeSymbol(cellNum) {
  let cellButton = document.getElementById(`cellButton${cellNum}`)
  cellButton.remove()
  let cell = document.getElementById(`cell${cellNum}`)
  let symbol = document.createElement("i")
  if (currentPlayer == "X") {
    symbol.setAttribute("class", "bi bi-x")
    xCells.push(cellNum)
    currentPlayer = "O"
  }
  else if (currentPlayer == "O") {
    symbol.setAttribute("class", "bi bi-circle")
    oCells.push(cellNum)
    currentPlayer = "X"
  }
  let playerOutput = document.getElementById("player-output")
  if (hasWinningCells(xCells)) {
    playerOutput.innerText = "Player X won!"
    makeResetButton()
  } else if (hasWinningCells(oCells)) {
    playerOutput.innerText = "Player O won!"
    makeResetButton()
  } else if (allCellsTaken()) {
    playerOutput.innerText = "It's a tie!"
    makeResetButton()
  } else if (currentPlayer == "X") {
    playerOutput.innerText = "Player X's turn."
  } else if (currentPlayer == "O") {
    playerOutput.innerText = "Player O's turn."
  }
  cell.appendChild(symbol)
}

function startGame() {
  currentPlayer = "X"
  xCells.length = 0
  oCells.length = 0
  let startButton = document.getElementById("start-button")
  startButton.remove()
  generateBoard()
  let playerOutput = document.getElementById("player-output")
  playerOutput.innerText = "Player X's turn."
}