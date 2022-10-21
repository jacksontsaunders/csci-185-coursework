const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(creature.x, creature.y, creature.s);

    drawGrid(canvasWidth, canvasHeight);

}
const creature = {
    x: 300,
    y: 300,
    s: 100,
}


// replace this function with YOUR creature!

let activeShape = creature;

function mouseClicked () {
    
}
function drawCreature(centerX, centerY, size , faceColor = 'orange',backupColor = 'black') {
    fill(backupColor)
    let sf = size / 5;
     square(centerX-sf * 1 ,centerY-sf * 4,size -sf * 3,) //Stem
     fill(faceColor);
     circle(centerX, centerY, size); //100, 400, 50
     fill(backupColor);
     
     triangle(
         centerX- sf* .5, centerY -sf* 1.3, //top
         centerX- sf* 1.6, centerY+ sf* .005, //bottom left
         centerX- sf* .5, centerY+ sf* .001 //bottom right
         ) // Left eye x1, y1, x2, y2, x3, y3)
     triangle(
         centerX+ sf* .5, centerY -sf* 1.3, //top
         centerX+ sf* 1.6, centerY+ sf* .005, //bottom left
         centerX+ sf* .5, centerY+ sf* .001 
         )//bottom right
     triangle(
         centerX- sf* .5, centerY+ sf* .6, 
         centerX+ sf* .5, centerY+ sf* .6 , 
         centerX, centerY +sf* 1.3) //Nose
}

function mouseDragged() {
    let distance = dist(creature.x, creature.y, mouseX, mouseY);
    console.log(distance, creature.x, creature.y, mouseX, mouseY);
    if ( distance < creature.s/2) {
        activeShape = creature;
    } 
   
    activeShape.x = mouseX;
    activeShape.y = mouseY;
}

function draw() {
    // data.color = 'white';
    clear();
    drawCreature(creature.x, creature.y, creature.s);
    drawGrid(canvasWidth, canvasHeight);



}

