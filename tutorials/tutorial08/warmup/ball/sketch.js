const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';

function draw() {
    // console.log('redrawing the screen');
    // frameRate(4);
    clear(); //clears circle evertime its drawn

    if (x >= 500 - width/2 ) {
        // width += 4;
        // speed = speed * -1; //shortcute below
        speed *=-1;

    } else if (x <= 150 + width/2 ) {
        // width += 4;
        speed *= -1;
        
    }


    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight); // Left Wall
    rect(500, 0, 50, canvasHeight); // Right Wall

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, 50);
    x += speed;
    // console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}

const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        // console.log ('Change ball to red!');
        color = 'red';
    } else if (ev.code == 'KeyP') {
        color = 'purple';
    }
    else if (ev.code == 'Space') {
        x += 100;
    }

       // do stuff
}  

// Add event listener on keydown
document.addEventListener('keydown', changeBallColor);
