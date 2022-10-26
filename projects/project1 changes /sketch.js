const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const creature = {x: 300,y: 300,s: 100,}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawGrid(canvasWidth, canvasHeight);
}
    function drawCreature(centerX, centerY, size , faceColor = 'orange',backupColor = 'black'){
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
    function moveController(ev) {
        console.log(ev.code);
        if (ev.code == 'ArrowUp') {
            console.log('up arrow!');
            creature.y -= 2;
        } else if (ev.code == 'ArrowDown') {
            console.log('down arrow!');
            creature.y += 2;
        } else if (ev.code == 'ArrowLeft') {
            console.log('left arrow!');
            creature.x -= 2;
        } else if (ev.code == 'ArrowRight') {
            console.log('right arrow!');
            creature.x += 2;
        }
    }    

function draw() {
    clear();
    drawCreature(creature.x, creature.y, creature.s);
    drawGrid(canvasWidth, canvasHeight);

}

document.addEventListener('keydown', moveController);