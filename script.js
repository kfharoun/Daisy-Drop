
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

// const cell = document.querySelector(".cell")
// const score = document.querySelector(".char")

/*-------------------------------- variables --------------------------------*/


/*-------------------------------- Functions --------------------------------*/

const init = () => {
    randomNumber()
}

//if random number = 1 then it's a 4, otherwise it's a 2
const randomNumber = () => {
    if (Math.floor(Math.random() * 10)+1 == 1){
        return 4
    } else {
        return 2
    }
}
console.log(randomNumber())

let moveCell = (event) => {
    if (event.key == "ArrowLeft") {
        console.log(`left`)
    } else if (event.key == "ArrowRight"){
        console.log(`right`)
    } else if (event.key == "ArrowDown"){
        console.log(`down`)
    } else if (event.key == "ArrowUp"){
        console.log(`up`)
    }
}

/*-------------------------------- Event Listeners --------------------------------*/
document.addEventListener(`keydown`, moveCell)




