
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
/*-------------------------------- Functions --------------------------------*/

const cells = document.querySelectorAll(".cell")
// console.log(cells[2])
const matrix = []
/*-------------------------------- variables --------------------------------*/

let score
let scoreVal = document.querySelector(".char")
let row = []
let numRow = 0
let numCol = 0
let moved = false


/*-------------------------------- Functions --------------------------------*/

let init = () => {
    startGame()
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
    }
}
}

//if random number = 1 then it's a 4, otherwise it's a 2
const randomNumber = () => {
    return Math.floor(Math.random() < 0.1 ? 4 : 2)
}
    // console.log(randomNumber())

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

let emptyCell = findEmptyCell()


// console.log(`here! ${emptyCell.id}`)

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
//console.log(cell)
//move to new row and column is valid -> // the cell at the new position is empty or has the same value as the current cell
    while (checkMove(newRow + changeRow, newCol + changeCol) && (matrix[newRow + changeRow][newCol + changeCol].innerText === "" || matrix[newRow + changeRow][newCol + changeCol].innerText === cell.innerText)) {
        newRow += changeRow //updates variable -> determines up or down
        newCol += changeCol //updates variable -> determines left or right
        movedOrMerged = true
}
    if (newRow != row || newCol != col){ //checks if final position is different from start position
        if (matrix[newRow][newCol].innerText===""){//if they're different, cell moved or merged
            matrix[newRow][newCol].innerText = cell.innerText //if it's empty content of cell is moved to final position
            matrix[row][col].innerText = ""//why is it only logging some cells
        } else { //if cell is not empty
            let newValue = parseInt(cell.innerText) * 2 //the value is doubled
            matrix [newRow][newCol].innerText = newValue.toString() //double value placed in final position
            matrix[row][col].innerText = ""
            
        }
        return true
    } 
    return movedOrMerged 
}


// checks if row and column are in bounds of the grid
let checkMove = (row, col) => {return row >= 0 && row < 4 && col >= 0 && col <4}


// determines direction of the key press and moves over each cell in the clicked direction
let keyClick = (event) => {
    let key = event.key

    switch(key) {
        case "ArrowLeft":
            for (let col = 1; col < 4; col++) {
                for (let row = 0; row < 4; row++) {
                    let movedOrMerged = moveMerge(row, col, 0, -1) 
                    if (movedOrMerged){
                        moved = true
                    }
                }
                console.log(moved)
            }
            break;

        case "ArrowRight":
            for (let col = 2; col >= 0; col--) {
                for (let row = 0; row < 4; row++) {
                    moved = moveMerge(row, col, 0, 1) || moved
                }
                console.log(moved + " right")
            }
            break

        case "ArrowUp":
            for (let row = 1; row < 4; row++) {
                for (let col = 0; col < 4; col++) {
                    moved = moveMerge(row, col, -1, 0) || moved
                }
                console.log(moved + " up")
            }
            break

        case "ArrowDown":
            for (let row = 2; row >= 0; row--) {
                for (let col = 0; col < 4; col++){
                    moved = moveMerge(row, col, 1, 0) || moved
                }
                console.log(moved + " down")
            }
            break
    }

    if (moved === true) {
        setTimeout(() => {
            let emptyCell = findEmptyCell()
            if (emptyCell) {
                emptyCell.innerText = randomNumber()
            } 
        }, 300)
    }
    }


/*-------------------------------- Event Listeners --------------------------------*/
document.addEventListener(`keydown`, keyClick)
document.addEventListener(`DOMContentLoaded`, function(){
    init()
})

//a new check variable 
    //set variable if it's already done the merge in that turn
    // if youre swiping to the left itll start adding leftmost cells first
