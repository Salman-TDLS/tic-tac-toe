/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = 'X'
let moveCount = 0
let gameOver = false



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
const msgEl = document.getElementById('message')
const resetBtnEl = document.getElementById('reset')



/*-------------------------------- Functions --------------------------------*/

function checkWinner() {
  if (
    sqr0El.textContent === currentPlayer &&
    sqr1El.textContent === currentPlayer &&
    sqr2El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr3El.textContent === currentPlayer &&
    sqr4El.textContent === currentPlayer &&
    sqr5El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr6El.textContent === currentPlayer &&
    sqr7El.textContent === currentPlayer &&
    sqr8El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr0El.textContent === currentPlayer &&
    sqr3El.textContent === currentPlayer &&
    sqr6El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr1El.textContent === currentPlayer &&
    sqr4El.textContent === currentPlayer &&
    sqr7El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr2El.textContent === currentPlayer &&
    sqr5El.textContent === currentPlayer &&
    sqr8El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr0El.textContent === currentPlayer &&
    sqr4El.textContent === currentPlayer &&
    sqr8El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }

  if (
    sqr2El.textContent === currentPlayer &&
    sqr4El.textContent === currentPlayer &&
    sqr6El.textContent === currentPlayer
  ) {
    gameOver = true
    msgEl.textContent = `${currentPlayer} wins!`
    msgEl.classList.add('winner')
    resetBtnEl.classList.add('win')
  }
}

function checkTie() {
  if (moveCount === 9 && gameOver === false) {
    gameOver = true
    msgEl.textContent = 'Tie game!'
    resetBtnEl.classList.add('tie')
  }
}

function switchPlayer() {
  if (gameOver === false) {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }

    msgEl.textContent = `It is ${currentPlayer}’s turn`
  }
}

function resetGame() {
  resetBtnEl.classList.remove('win', 'tie')
  msgEl.classList.remove('winner')
  sqr0El.textContent = ''
  sqr0El.dataset.player = ''
  sqr1El.textContent = ''
  sqr1El.dataset.player = ''
  sqr2El.textContent = ''
  sqr2El.dataset.player = ''
  sqr3El.textContent = ''
  sqr3El.dataset.player = ''
  sqr4El.textContent = ''
  sqr4El.dataset.player = ''
  sqr5El.textContent = ''
  sqr5El.dataset.player = ''
  sqr6El.textContent = ''
  sqr6El.dataset.player = ''
  sqr7El.textContent = ''
  sqr7El.dataset.player = ''
  sqr8El.textContent = ''
  sqr8El.dataset.player = ''

  currentPlayer = 'X'
  moveCount = 0
  gameOver = false
  msgEl.textContent = `It is ${currentPlayer}’s turn`
}

resetGame()



/*----------------------------- Event Listeners -----------------------------*/

sqr0El.addEventListener('click', () => {
  if (sqr0El.textContent === '' && gameOver === false) {
    sqr0El.textContent = currentPlayer
    sqr0El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr1El.addEventListener('click', () => {
  if (sqr1El.textContent === '' && gameOver === false) {
    sqr1El.textContent = currentPlayer
    sqr1El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr2El.addEventListener('click', () => {
  if (sqr2El.textContent === '' && gameOver === false) {
    sqr2El.textContent = currentPlayer
    sqr2El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr3El.addEventListener('click', () => {
  if (sqr3El.textContent === '' && gameOver === false) {
    sqr3El.textContent = currentPlayer
    sqr3El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr4El.addEventListener('click', () => {
  if (sqr4El.textContent === '' && gameOver === false) {
    sqr4El.textContent = currentPlayer
    sqr4El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr5El.addEventListener('click', () => {
  if (sqr5El.textContent === '' && gameOver === false) {
    sqr5El.textContent = currentPlayer
    sqr5El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr6El.addEventListener('click', () => {
  if (sqr6El.textContent === '' && gameOver === false) {
    sqr6El.textContent = currentPlayer
    sqr6El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr7El.addEventListener('click', () => {
  if (sqr7El.textContent === '' && gameOver === false) {
    sqr7El.textContent = currentPlayer
    sqr7El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

sqr8El.addEventListener('click', () => {
  if (sqr8El.textContent === '' && gameOver === false) {
    sqr8El.textContent = currentPlayer
    sqr8El.dataset.player = currentPlayer
    moveCount += 1
    checkWinner()
    checkTie()
    switchPlayer()
  }
})

resetBtnEl.addEventListener('click', resetGame)
