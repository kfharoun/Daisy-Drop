# Daisy Drop !
## Wireframe
**Light Mode**
![wireframelight](https://i.imgur.com/RgwjKOH.png)
**Dark Mode**
![wireframedark](https://i.imgur.com/E1RU3YR.png)
### What I Want 
* a 2048 game using flower characters instead of numbers 
* when a flower is swiped to another flower it creates the next level up
* when you get to the daisy you win! 

### What I Need

* the ability to use a swiping motion to say where i want the board to move 
    * ie. swipe right, all pieces swipe right
    * maybe this would be easier with a button click on keyboard in various directions, as opposed to a swiping method
    * would also stop accidental restart click
* matching pieces combine to create the next level up
* The score tells you what your highest flower is 
* To Win says which flower you need to win 
* restart button resets the board 
* (if i have time): dark mode switch button

### Questions I Have 

* ~~Should I change the to win to best score?~~
    * won't be doing this - i'd have to add characters for getting higher than 2048
        * so game will end when player reaches 2048
* ~~Can the starting piece start somewhere random?~~
    * **with a matrix** *(thanks will!)*

         0 1 2 3

        0 1 2 3

        0 1 2 3
* Am I too overzealous for wanting to draw the flower characters 

### How to get Started 

* make basic html outline to get game info 
* start in JS to get piece to show up in random square 
* slide function 

## Algorithm

- [x] A game of 2048 is played on a 4×4 board.
- [] Each position on the board may be empty or may contain a tile, and each tile will have a number on it
- [x] When we start, the board will have two tiles in random locations, each of which either has a “2” or a “4” on it – each has an independent 10% chance of being a “4”, or otherwise a is a “2”
- [x] Moves are performed by shifting all tiles towards one edge – up, down, left, or right.
- [x] Any tiles with the same value that are adjacent to each other and are moving together will merge and end up with a new tile equal to the sum of the earlier two.
- [x] After we’ve made a move, a new tile will be placed onto the board. 
- [x] The game then continues until there are no more moves possible.
- [x] Player has won once they have reached 2048


## Visual Elements Needed

- [] 2
- [] 4
- [] 8
- [] 16
- [] 32
- [] 64
- [] 128
- [] 256
- [] 512
- [] 1024
- [] 2048

### General Timeline 

* **by Monday** -> have html outline and get too halfway point of making the game functional
   * basic logic for 2048

* **tuesday** -> work on function probs 

* **wednesday** -> draw characters + background, add them in to the board

* **thursday** -> finish any problems, attempt dark mode


### Sources

* [to find out the algorithm behind the game](https://www.baeldung.com/cs/2048-algorithm)

*[keyup keydown](https://stackoverflow.com/questions/43809436/how-can-i-move-the-ball-left-right-up-down-using-the-keybord)

*[math random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

*[key code table](https://www.toptal.com/developers/keycode/table)

*[my hero to understanding matrixes](https://ece.uwaterloo.ca/~dwharder/Matlab/assigning.html)

* my dad helped me with my move cell function by telling me about key positioning, and by adding the new position function after the switch case

* [when i pressed a key, the number would place one at a time in each box. this is how i learned to shuffle an array](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)

* [while loop clarification](https://www.w3schools.com/js/js_loop_while.asp)

* chatGPT to:
    * copy and pasted code in whenever i forgot a bracket somewhere or to see how a piece of code could be written more streamlined 
    * we became besties when debugging the moveMerge function, it helped me a lot with knowing which console logs to put where! 
    * figure out how to add animation / sliding function
        ```javascript
            if (moved) {
        setTimeout(() => {
            const emptyCell = findEmptyCell();
            if (emptyCell) {
                emptyCell.innerText = randomNumber();
            }
        }, 500); // timeout delay
    > >>>> also
    ``` javascript 
    let moveCell = (cell, newRow, newCol) => {
    const cellSize = 71;
    if (cell.innerText !== "") { 
        cell.style.transition = "left 0.5s, top 0.5s";
        cell.style.left = `${newCol * cellSize}px`;
        cell.style.top = `${newRow * cellSize}px`;
    }
```

* [2048 code i looked at for an example 1](https://www.geeksforgeeks.org/design-a-2048-game-in-javascript/)
* [2048 code i looked at for an example 2](https://medium.com/@aswingiftson007/2048-game-in-html-and-javascript-c6cc63d2698f)
*[2048 code i looked at for an example 3](https://codepen.io/fabi_yo_/pen/zNrmwZ)