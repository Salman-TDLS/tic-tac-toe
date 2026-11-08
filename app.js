/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = 'X'
let moveCount = 0
let gameOver = false


/*------------------------ Cached Element References ------------------------*/

const msgEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')


/*-------------------------------- Functions --------------------------------*/

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


/*----------------------------- Event Listeners -----------------------------*/

msgEl.textContent = `It is ${currentPlayer}’s turn`

squareEls.forEach((square) => {
  square.addEventListener('click', () => {
    if (gameOver || square.textContent !== '') return

    square.textContent = currentPlayer
    moveCount++

    switchPlayer()
  })
})
