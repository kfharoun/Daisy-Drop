
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

let moveCell = (event) => {
    let key = event.key
    let emptyCell = findEmptyCell()
    switch(key) {
        case "ArrowLeft":
            if (numCol > 0){
                numCol--
            }
        break
        case "ArrowRight": 
            if (numRow > 0){
                numRow++
            }
        break
        case "ArrowUp":
            if (numCol < 4){
                numCol--
            }
        break
        case "ArrowDown":
            if (numRow < 4){
                numRow --
            }
        break
    }
    // shifting right is +1
    // shifting left -1 
    // shifting down +1
    // shifting up -1
    const newPosition = numRow * 4 + numCol
    cells.forEach((cell, position)=> {
        cell.classList.remove(`active`)
        if (position == newPosition){
            cell.classList.add(`active`)
        }
    })
    if (key === "ArrowLeft" || key === "ArrowRight" || key === "ArrowUp" || key === "ArrowDown"){
        const emptyCell = findEmptyCell()
        if (emptyCell) {
            emptyCell.innerText = randomNumber()
        }
        }
    }

/*-------------------------------- Event Listeners --------------------------------*/
document.addEventListener(`keydown`, moveCell)
document.addEventListener(`DOMContentLoaded`, function(){
    init()
})



