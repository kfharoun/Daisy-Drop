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

* asked chat gpt to give me a 4x4 matrix so i could see how it was formatted, and what it logged in the console. this is what it returned

```javascript
class Matrix4x4 {
    constructor() {
        this.data = new Array(4);
        for (let i = 0; i < 4; i++) {
            this.data[i] = new Array(4).fill(0);
        }
    }

    set(row, col, value) {
        if (row >= 0 && row < 4 && col >= 0 && col < 4) {
            this.data[row][col] = value;
        } else {
            console.error("Index out of range");
        }
    }

    get(row, col) {
        if (row >= 0 && row < 4 && col >= 0 && col < 4) {
            return this.data[row][col];
        } else {
            console.error("Index out of range");
            return null;
        }
    }

    print() {
        for (let i = 0; i < 4; i++) {
            console.log(this.data[i].join('\t'));
        }
    }
}

// Example usage:
const matrix = new Matrix4x4();
matrix.set(0, 0, 1);
matrix.set(1, 1, 1);
matrix.set(2, 2, 1);
matrix.set(3, 3, 1);
matrix.print();
```

