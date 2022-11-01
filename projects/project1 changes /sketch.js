const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const creature = { x: 300, y: 300, s: 100, }
const c1 = {
    x: 1100,
    y: 685,
    width: 200,
    speed: -3,
    color: 'red'
}
const road = {
    x: 00,
    y: 700,
    size: 2000,
    color: 'black'
};

const cloud = {
    l: 1000,
    x: 100,
    y: 175,
    t: 140,
}
const cloud2 = {
    l: 245,
    x: 100,
    y: 175,
    t: 140,
}
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
function drawCar(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
function drawRoad(x, y, size, fillColor = 'black') {
    strokeWeight(0);
    rect(x, y, size);
}

function drawCloud() {
    fill('white');
    strokeWeight(0);
    ellipse(cloud.l, cloud.x, cloud.y, cloud.t);
    ellipse(cloud.l + 90, cloud.x, cloud.y, cloud.t);
    ellipse(cloud.l - 90, cloud.x, cloud.y, cloud.t);
}

function drawCloud2() {
    fill('white');
    strokeWeight(0);
    ellipse(cloud2.l, cloud2.x, cloud2.y, cloud2.t);
    ellipse(cloud2.l + 90, cloud2.x, cloud2.y, cloud2.t);
    ellipse(cloud2.l - 90, cloud2.x, cloud2.y, cloud2.t);
}

function mouseDragged() {
    let distance = dist(creature.x, creature.y, mouseX, mouseY);
    console.log(distance, creature.x, creature.y, mouseX, mouseY);
    if (distance < creature.s / 2) {
        activeShape = creature;
    }

    activeShape.x = mouseX;
    activeShape.y = mouseY;
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
    if (c % 200 == 0) { makeStars(); }

    let i = 0;
    fill('white');
    while (i < stars.length) {
        const star = stars[i];
        circle(star.x, star.y, star.d);
        i++;
    }
    //Car and car movement
    c1.x += c1.speed;
    drawCar(c1.x, c1.y, c1.width, c1.color);
    if (c1.x < -200) {
        c1.x = canvasWidth;
    }
    drawRoad(road.x, road.y, road.size);

    fill('white');
    drawCloud(cloud.l, cloud.x, cloud.y, cloud.t);
    drawCloud2(cloud2.l, cloud2.x, cloud2.y, cloud2.t);

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

