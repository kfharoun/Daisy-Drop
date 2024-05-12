
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

/*-------------------------------- Constants --------------------------------*/

const cells = document.querySelectorAll(".cell")
// console.log(cells[2])
const matrix = []
/*-------------------------------- variables --------------------------------*/

let score
let scoreVal = document.querySelector(".char")
let row = []
let numRow = 0
let numCol = 0


/*-------------------------------- Functions --------------------------------*/

let init = () => {
    startGame()
}
// assign html of row to the matrix 
// A game of 2048 is played on a 4×4 board
let startGame= () => {
for (let i = 1 ; i <= cells.length ; i++){
    let cell = cells[i-1]
    if (i % 4 === 0){
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
// console.log(matrix)

// checking if matrix works for each square
// matrix.forEach(row => {
//     row.forEach(cell => {
//         cell.innerText = randomNumber()
//     })
// })

//if random number = 1 then it's a 4, otherwise it's a 2
const randomNumber = () => {
    return Math.floor(Math.random() < 0.1 ? 4 : 2
    )}
    console.log(randomNumber())

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

// console.log(`here! ${emptyCell.id}`)

// let moveCell = (cell, newRow, newCol) => {
//     const cellSize = 71;
//     if (cell.innerText !== "") { // check if cell contains a number
//         cell.style.transition = "left 0.5s, top 0.5s";
//         cell.style.left = `${newCol * cellSize}px`;
//         cell.style.top = `${newRow * cellSize}px`;
//     }
// }

// checks if current cell can move or merge with neighbor cell
let moveMerge = (row, col, changeRow, changeCol) => {
    let cell = matrix[row][col]
    let newRow = row
    let newCol = col

    while (checkMove(newRow + changeRow, newCol + changeCol) && (matrix[newRow + changeRow][newCol + changeCol].innerText === "" || matrix[newRow + changeRow][newCol + changeCol].innerText === cell.innerText)) {
        newRow += changeRow
        newCol += changeCol
}
    if (newRow != row || newCol != col){
        if (matrix[newRow][newCol].innerText===""){
            matrix[newRow][newCol].innerText = cell.innerText
        } else {
            let newValue = parseInt(cell.innerText) * 2
            matrix [newRow][newCol].innerText = newValue
        }
        if (cell.innerText = ""){
        return true
    } else {
    return false
    }
    }
}
// checks if row and column are in bounds of the grid
let checkMove = (row, col) => {return row >= 0 && row < 4 && col >= 0 && col <4}

// determines direction of the key press and moves over each cell in the clicked direction
let keyClick = (event) => {
    let key = event.key
    let moved = false

    switch(key){
        case "ArrowLeft":
            for (let col = 1; col <4; col++){
                for (let row = 0; row < 4; row++){
                    moved = moved | moveMerge(row,col,0, -1) //returns true if a move or merge occured 
                }
            }
            break
        case "ArrowRight":
            for (let col = 2 ; col >= 0; col--){
                for (let row = 0; row <4; row++){
                    moved = moved | moveMerge(row, col, 0, 1)
                }
            }
            break
        case "ArrowUp":
    for (let row = 1 ; row < 4 ; row++ ){
        for (let col = 0 ; col < 4 ; col++){
            moved = moved | moveMerge(row, col, -1, 0)
        }
    }
            break
        case "ArrowDown":
            for (let row = 2 ; row >= 0 ; row--){
                for(let col = 0; col < 4; col++){
                    moved = moved | moveMerge(row, col, 1, 0)
                }
            }
            break
}
            if (moved) {
                setTimeout(() => {
                    let emptyCell = findEmptyCell()
                    if (emptyCell){
                        emptyCell.innetText = randomNumber()
                    }
                }, 500)
            }
}



/*-------------------------------- Event Listeners --------------------------------*/
document.addEventListener(`keydown`, keyClick)
document.addEventListener(`DOMContentLoaded`, function(){
    init()
})



