const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const creature = { x: 300, y: 300, s: 100, }
let stars = [];
let doJump = false;
let counter = 0;
let initialY = creature.y;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

}
function drawCreature(centerX, centerY, size, faceColor = 'orange', backupColor = 'black') {
    fill(backupColor)
    let sf = size / 5;
    square(centerX - sf * 1, centerY - sf * 4, size - sf * 3,) //Stem
    fill(faceColor);
    circle(centerX, centerY, size); //100, 400, 50
    fill(backupColor);

    triangle(
        centerX - sf * .5, centerY - sf * 1.3, //top
        centerX - sf * 1.6, centerY + sf * .005, //bottom left
        centerX - sf * .5, centerY + sf * .001 //bottom right
    ) // Left eye x1, y1, x2, y2, x3, y3)
    triangle(
        centerX + sf * .5, centerY - sf * 1.3, //top
        centerX + sf * 1.6, centerY + sf * .005, //bottom left
        centerX + sf * .5, centerY + sf * .001
    )//bottom right
    triangle(
        centerX - sf * .5, centerY + sf * .6,
        centerX + sf * .5, centerY + sf * .6,
        centerX, centerY + sf * 1.3) //Nose


}
// Arrow key function
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        creature.y -= 2;
        initialY = creature.y;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        creature.y += 2;
        initialY = creature.y;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        creature.x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        creature.x += 2;
    } else if (ev.code == 'Space') {
        doJump = !doJump;
        console.log(doJump)
    }
}

function makeStars() {
    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);

    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);

    // draws 1000 stars: 
    strokeWeight(0);
    fill('white'); 
    stars = [];
    let i = 0;
    while (i < 1000) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        // circle(x, y, width);
        stars.push({
            x: x,
            y: y,
            d: width,
        })
        i++;
    }
}
let c = 0;
function draw() {
    clear();
    if (c % 200 == 0){ makeStars();}
    
    // frameRate(.8);
    let i = 0;
    fill('white'); 
    while (i < stars.length) {
        const star = stars[i];
        circle(star.x, star.y, star.d);
        i++;
    }
    // clear();
    // i = 0;
    // while (i < stars.length) {
    //     // const x = Math.random() * canvasWidth;
    //     // const y = Math.random() * canvasHeight;
    //     // const width = Math.random() * 3 + 0.5;
    //     circle(circles[i].x, circles[i].y, circles[i].d);
    //     i++;
    // }

    //frameRate(30);
    drawCreature(creature.x, creature.y, creature.s);
    //drawGrid(canvasWidth, canvasHeight);
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -3;
        const jumpSpeed = 30;
        creature.y += jumpHeight * Math.sin(counter / jumpSpeed);
        counter++;
        if (creature.y > initialY) {
            doJump = false;

        }
    }
    c++;
}





document.addEventListener('keydown', moveController);

