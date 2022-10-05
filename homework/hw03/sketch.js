function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(centerX, centerY, size , faceColor = 'yellow') {
    fill(faceColor);
    circle(centerX, centerY, size); //100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf); // Left eye
    circle(centerX + sf, centerY - sf, sf); // Right eye

    noFill()
    stroke('black');
    curve(
        centerX - sf*2, centerY - 1.5 * size,    // control point
        centerX - sf*2, centerY + .8 * sf,   // start point
        centerX + sf*2, centerY + .8 * sf,   // end point
        centerX + sf*2, centerY - 1.5 * size        // control point
    );



