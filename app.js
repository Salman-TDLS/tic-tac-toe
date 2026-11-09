/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let isXTurn = true
let gameOver = false
let moveCount = 0

/*------------------------ Cached Element References ------------------------*/

const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')

const msgEl = document.querySelector('#message')
const resetEl = document.querySelector('#reset')
/*-------------------------------- Functions --------------------------------*/

function updateTurnMessage() {
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
}

function checkGameResult() {
  if (
    sqr0El.textContent !== '' &&
    sqr0El.textContent === sqr1El.textContent &&
    sqr0El.textContent === sqr2El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr0El.textContent} wins!`
  }

  if (
    sqr3El.textContent !== '' &&
    sqr3El.textContent === sqr4El.textContent &&
    sqr3El.textContent === sqr5El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr3El.textContent} wins!`
  }

  if (
    sqr6El.textContent !== '' &&
    sqr6El.textContent === sqr7El.textContent &&
    sqr6El.textContent === sqr8El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr6El.textContent} wins!`
  }

  if (
    sqr0El.textContent !== '' &&
    sqr0El.textContent === sqr3El.textContent &&
    sqr0El.textContent === sqr6El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr0El.textContent} wins!`
  }

  if (
    sqr1El.textContent !== '' &&
    sqr1El.textContent === sqr4El.textContent &&
    sqr1El.textContent === sqr7El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr1El.textContent} wins!`
  }

  if (
    sqr2El.textContent !== '' &&
    sqr2El.textContent === sqr5El.textContent &&
    sqr2El.textContent === sqr8El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr2El.textContent} wins!`
  }

  if (
    sqr0El.textContent !== '' &&
    sqr0El.textContent === sqr4El.textContent &&
    sqr0El.textContent === sqr8El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr0El.textContent} wins!`
  }

  if (
    sqr2El.textContent !== '' &&
    sqr2El.textContent === sqr4El.textContent &&
    sqr2El.textContent === sqr6El.textContent
  ) {
    gameOver = true
    msgEl.textContent = `${sqr2El.textContent} wins!`
  }

  if (moveCount === 9 && !gameOver) {
    gameOver = true
    msgEl.textContent = "It's a draw!"
  }
}

function playSquare(sqrEl) {
  if (sqrEl.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqrEl.textContent = 'X'
  } else {
    sqrEl.textContent = 'O'
  }

  isXTurn = !isXTurn
  moveCount++
  updateTurnMessage()
  checkGameResult()
}

function resetGame() {
  isXTurn = true
  gameOver = false
  moveCount = 0

  sqr0El.textContent = ''
  sqr1El.textContent = ''
  sqr2El.textContent = ''
  sqr3El.textContent = ''
  sqr4El.textContent = ''
  sqr5El.textContent = ''
  sqr6El.textContent = ''
  sqr7El.textContent = ''
  sqr8El.textContent = ''

  updateTurnMessage()
}

/*----------------------------- Event Listeners -----------------------------*/

sqr0El.addEventListener('click', () => {
  playSquare(sqr0El)
})

sqr1El.addEventListener('click', () => {
  playSquare(sqr1El)
})

sqr2El.addEventListener('click', () => {
  playSquare(sqr2El)
})

sqr3El.addEventListener('click', () => {
  playSquare(sqr3El)
})

sqr4El.addEventListener('click', () => {
  playSquare(sqr4El)
})

sqr5El.addEventListener('click', () => {
  playSquare(sqr5El)
})

sqr6El.addEventListener('click', () => {
  playSquare(sqr6El)
})

sqr7El.addEventListener('click', () => {
  playSquare(sqr7El)
})

sqr8El.addEventListener('click', () => {
  playSquare(sqr8El)
})

resetEl.addEventListener('click', resetGame)

updateTurnMessage()
