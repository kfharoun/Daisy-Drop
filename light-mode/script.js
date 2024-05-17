
/*-------------------------------- whiteboarding --------------------------------*/
// functions i need to make
    // initiating the game
    // function to randomly assign value to a cell
        //color of the cell will match the value of the cell
        // getelement => style.background-color?
    // function to move the blocks 
    //acknowledge 
    // function to shift blocks 
         //will combine the same cell values when cell is empty
    // gameOver function if all cells are filled and cant be combined 
    // gameWon function when tile reaches 2048

// every time you click a new cell comes up randomly 
    // only merge upon a click (no auto-merge)
// IF two cells are the same you add the two cells value

// when you look at the svreen two numbers appear in random places 
// first you need the position of two items 
// 16 positions are 

// if else 
        // if cell that youre displaying is = 10-5 gives you the cell above it
        // if negative youre on the first row 

// whats the game logic behind which number randomly comes up?
// array or matrix that has the board and cell value
// matrix is more visual
    // you can do
    // 01234
    // 01234
    // 01234
// shift function 
    // shiftup eventlistener
    // shiftdown eventlistener
    // shiftleft eventlistener
    // shiftright eventlistener
    // need to check for merging only in direction you shift 

// test on the game + on my website 
    // if there is a random number tile that appears you cant compare 
    // this is only if game logic is not random 

// difficult part
    // keep track of whats on the board
    // so matrix HAS to be the board 
    // shifting right is +1?
    // shifting left -1 
    // shifting down +1
    // shifting up -1

/*-------------------------------- Test Code Snippets --------------------------------*/
// console.log(matrix)

// checking if matrix works for each square
// matrix.forEach(row => {
//     row.forEach(cell => {
//         cell.innerText = randomNumber()
//     })
// })
/*-------------------------------- constants --------------------------------*/

const cells = document.querySelectorAll(".cell")
// console.log(cells[2])
const matrix = []
const numberToImage = {
    "2": "image elements/2.png",
    "4": "path/to/4.png",
    "8": "path/to/8.png",
    "16": "path/to/16.png",
    "32": "path/to/32.png",
    "64": "path/to/64.png",
    "128": "path/to/128.png",
    "256": "path/to/256.png",
    "512": "path/to/512.png",
    "1024": "path/to/1024.png",
    "2048": "path/to/2048.png"
}


/*-------------------------------- variables --------------------------------*/

let scoreElement = document.querySelector(`.score`)
let row = []
let col = []
let numRow = null
let numCol = null
let moved = false
let button = document.querySelector(`#reset`)
let lost = document.querySelector(`.gameOver`)
let rainbow = document.querySelector(`.rainbow1`)


/*-------------------------------- Functions --------------------------------*/

let init = () => {
    startGame()
    document.addEventListener(`keydown`, keyClick)
    updateScore()

}
// assign html of row to the matrix 
// A game of 2048 is played on a 4×4 board
let startGame= () => {
for (let i = 1 ; i <= cells.length ; i++){
    let cell = cells[i-1]
    if (i % 4 === 0){ //when it reaches 4 or 0 it goes to the next row
        cell.innerText = ``
        row.push(cell)
        matrix.push(row)
        row = []
    } else {
        cell.innerText = ``
        row.push(cell)
    }
}
for (let i = 0; i < 2; i++){
    const emptyCell = findEmptyCell()
    if (emptyCell){
        emptyCell.innerText = 2
        cellStyle(emptyCell.innerText, emptyCell)
    }

    
}

}

//if random number = 1 then it's a 4, otherwise it's a 2
const randomNumber = () => {
    return Math.floor(Math.random() < 0.1 ? 4 : 2)
    //cellStyle(emptyCell.innerText, emptyCell)
}
 
const findEmptyCell = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledArray = shuffleArray(Array.from(cells))
    for (let i = 0 ; i < cells.length ; i++) {
    if (shuffledArray[i].innerText===""){
        return shuffledArray[i]
    }
}
}

let cellAnimation = (cell, newRow, newCol) => {
    const cellSize = 71;
    if (cell.innerText !== "") { // check if cell contains a number
        cell.style.transition = "left 0.5s, top 0.5s";
        cell.style.left = `${newCol * cellSize}px`;
        cell.style.top = `${newRow * cellSize}px`;
    }
}

// checks if current cell can move or merge with neighbor cell
//which cells are being referenced 
//track as it's moving thru the grid 

let moveMerge = (row, col, changeRow, changeCol) => {
    let cell = matrix[row][col]
    let newRow = row
    let newCol = col
    let movedOrMerged = false

    while (checkMove(newRow + changeRow, newCol + changeCol) && (matrix[newRow + changeRow][newCol + changeCol]?.innerText === "" || matrix[newRow + changeRow][newCol + changeCol]?.innerText === cell.innerText)) {
        newRow += changeRow
        newCol += changeCol
    }

    if (newRow !== row || newCol !== col) {
        if (matrix[newRow][newCol].innerText === "") {
            matrix[newRow][newCol].innerText = cell.innerText;
            matrix[row][col].innerText = ""

            movedOrMerged = true
            cellStyle(matrix[newRow][newCol].innerText, matrix[newRow][newCol])
            resetStyle(cell)
        } else if (matrix[newRow][newCol].innerText === cell.innerText) {
            let newValue = parseInt(cell.innerText) * 2
            matrix[newRow][newCol].innerText = newValue.toString()
            matrix[row][col].innerText = ""

            movedOrMerged = true
            cellStyle(newValue, matrix[newRow][newCol])
            resetStyle(cell)
        }
    }
    
    return movedOrMerged
}

// checks if row and column are in bounds of the grid
let checkMove = (row, col) => {return row >= 0 && row < 4 && col >= 0 && col <4}


// determines direction of the key press and moves over each cell in the clicked direction
let keyClick = (event) => {
    let key = event.key
    let filledCells = findFilledCells()
    moved = false

    switch (key) {
        case "ArrowLeft":
            moved = false
            for (let col = 1; col < 4; col++) {
                for (let row = 0; row < 4; row++) {
                    //let cellIndex = row * 4 + col
                    if (filledCells.some(cell => cell.row === row && cell.col === col)) {
                        moved = moveMerge(row, col, 0, -1) || moved
                    }
                }
            }
            if (!checkWin() && !checkGameOver()) {
                newNumber(moved)
            }else if (checkWin()){
                winMessage()
            } else if (checkGameOver()){
                loseMessage()
            }
            break;

        case "ArrowRight":
            moved = false
            for (let col = 2; col >= 0; col--) {
                for (let row = 0; row < 4; row++) {
                    //let cellIndex = row * 4 + col
                    if (filledCells.some(cell => cell.row === row && cell.col === col)) {
                        moved = moveMerge(row, col, 0, 1) || moved
                    }
                }
            }
            if (!checkWin() && !checkGameOver()) {
                newNumber(moved)
            }else if (checkWin()){
                winMessage()
            } else if (checkGameOver()){
                loseMessage()
            }
            break;

        case "ArrowUp":
            moved = false;
            for (let row = 1; row < 4; row++) {
                for (let col = 0; col < 4; col++) {
                    //let cellIndex = row * 4 + col
                    if (filledCells.some(cell => cell.row === row && cell.col === col)) {
                        moved = moveMerge(row, col, -1, 0) || moved
                    }
                }
            }
            if (!checkWin() && !checkGameOver()) {
                newNumber(moved)
            }else if(checkWin()){
                winMessage()
            } else if (checkGameOver()){
                loseMessage()
            }
            break;

        case "ArrowDown":
            moved = false;
            for (let row = 2; row >= 0; row--) {
                for (let col = 0; col < 4; col++) {
                    //let cellIndex = row * 4 + col
                    if (filledCells.some(cell => cell.row === row && cell.col === col)) {
                        moved = moveMerge(row, col, 1, 0) || moved
                    }
                }
            }
            if (!checkWin() && !checkGameOver()) {
                newNumber(moved)
            }else if (checkWin()){
                winMessage()
            }else if (checkGameOver()){
                loseMessage()
            }
            break
    }
}

//finds cells that have a number in them
let findFilledCells = () => {
    let filledCells = []
    for (let i = 0; i < cells.length; i++){
        if (cells[i].innerText !== ""){
            filledCells.push({
                row: Math.floor(i/4),
                col: i % 4
            })
        }
    }
    return filledCells
}

//adds the new number in to the board 
let newNumber = (moved) => {
    if (moved) {
        setTimeout(() => {
            let filledCells = findFilledCells()
            let emptyCell = findEmptyCell()
            if (emptyCell) {
                let randomNum = randomNumber()
                emptyCell.innerText = randomNum
                cellStyle(randomNum, emptyCell)
                updateScore()
                cellAnimation()
                
            }
        }, 100)
        changeNumbersToImages()
    }
}

//pulls the highest number from the board
let updateScore = () => {
    let maxScoreVal = -Infinity
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            let cellValue = parseInt(matrix[row][col].innerText);
            if (!isNaN(cellValue) && cellValue > maxScoreVal) {
                maxScoreVal = cellValue;
            }
        }
    }
    scoreElement.textContent = maxScoreVal.toString()
    return maxScoreVal
}

//checks .score for winning number
const checkWin = () => {
      let bestScore = updateScore()
      return bestScore == 8
    }

//pulls up winning message if winning number reached 
const winMessage = () => {
    const win = document.querySelector(`.win`)
    const restart = document.querySelector(`.restart`)
    win.style.display = `block`
    restart.style.visibility = `hidden`
}

//checks for moves that can or cannot be made
const checkGameOver = () => {
    let scoreElement = updateScore()
    if (!findEmptyCell()) {
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (
                    (checkMove(row + 1, col) && matrix[row][col].innerText === matrix[row + 1][col].innerText) ||
                    (checkMove(row, col + 1) && matrix[row][col].innerText === matrix[row][col + 1].innerText)
                ) {
                    return false
                }
            }
        }
        //gameover window appears here
        return true
    }
    return false
}

//lose message appears if checkgameover function returns true
const loseMessage = () => {
    let gameOver = checkGameOver()
    const lost = document.querySelector(`.lost`)
    const restart = document.querySelector(`.restart`)
    
    if (gameOver){
        lost.style.display = `block`
        restart.style.visibility = `hidden`
    }
}

//reset buttons
let resetGame = (event) => {
    window.location.reload()
}

//style of cells that appear
const cellStyle = (cellValue, cellElement) => {
    switch(parseInt(cellValue)){
        case 2: 
            cellElement.style.backgroundColor = `#FFE0E8`
            break
        case 4: 
            cellElement.style.backgroundColor = `#ffd6df`
            break
        case 8: 
            cellElement.style.backgroundColor = `#ffcbd4`
            break
        case 16: 
            cellElement.style.backgroundColor = `#ffc1c8`
            break
         case 32: 
            cellElement.style.backgroundColor = `#ffb7ba`
            break
        case 64: 
            cellElement.style.backgroundColor = `#ffadac`
            break
        case 128: 
            cellElement.style.backgroundColor = `#ffa39c`
            break
         case 256: 
            cellElement.style.backgroundColor = `#ff9a8c`
            break
        case 512: 
            cellElement.style.backgroundColor = `#ff927b`
            break
        case 1024: 
            cellElement.style.backgroundColor = `#fb8a69`
            break
        case 2048: 
            cellElement.style.backgroundColor = `#f58356`
            break
}
}

//resets style when pieces are moved 
let resetStyle = (cell) => {
    cell.style.backgroundColor=``
}
/*-------------------------------- Event Listeners --------------------------------*/

document.addEventListener(`DOMContentLoaded`, function(){
    init()
})

document.addEventListener(`click`, function(event) {
    if (event.target.id === `reset` || event.target.classList.contains(`rainbow1`)){
        resetGame()
    }
})
//a new check variable 
    //set variable if it's already done the merge in that turn
    // if youre swiping to the left itll start adding leftmost cells first
