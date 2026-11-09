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
/*----------------------------- Event Listeners -----------------------------*/

msgEl.textContent = "It's X's turn" // X goes first

sqr0El.addEventListener('click', () => {
  if (sqr0El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr0El.textContent = 'X'
  } else {
    sqr0El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr1El.addEventListener('click', () => {
  if (sqr1El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr1El.textContent = 'X'
  } else {
    sqr1El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr2El.addEventListener('click', () => {
  if (sqr2El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr2El.textContent = 'X'
  } else {
    sqr2El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr3El.addEventListener('click', () => {
  if (sqr3El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr3El.textContent = 'X'
  } else {
    sqr3El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr4El.addEventListener('click', () => {
  if (sqr4El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr4El.textContent = 'X'
  } else {
    sqr4El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr5El.addEventListener('click', () => {
  if (sqr5El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr5El.textContent = 'X'
  } else {
    sqr5El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr6El.addEventListener('click', () => {
  if (sqr6El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr6El.textContent = 'X'
  } else {
    sqr6El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr7El.addEventListener('click', () => {
  if (sqr7El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr7El.textContent = 'X'
  } else {
    sqr7El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

sqr8El.addEventListener('click', () => {
  if (sqr8El.textContent !== '' || gameOver) return

  if (isXTurn) {
    sqr8El.textContent = 'X'
  } else {
    sqr8El.textContent = 'O'
  }
  isXTurn = !isXTurn
  if (isXTurn) {
    msgEl.textContent = "It's X's turn"
  } else {
    msgEl.textContent = "It's O's turn"
  }
  moveCount++

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
})

