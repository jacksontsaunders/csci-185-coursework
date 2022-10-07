function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):.
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 301, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
// function drawCreature(centerX, centerY, size , faceColor = 'yellow') {
//     fill(faceColor);
//     circle(centerX, centerY, size); //100, 400, 50
//     fill('black');
//     let sf = size / 6.5;
//     circle(centerX - sf, centerY - sf, sf); // Left eye
//     circle(centerX + sf, centerY - sf, sf); // Right eye

//     noFill()
//     stroke('black');
//     curve(
//         centerX - sf*2, centerY - 1.5 * size,    // control point
//         centerX - sf*2, centerY + .8 * sf,   // start point
//         centerX + sf*2, centerY + .8 * sf,   // end point
//         centerX + sf*2, centerY - 1.5 * size        // control point
//     );
    function drawCreature(centerX, centerY, size , faceColor = 'orange') {
       fill('black')
       let sf = size / 5;
        square(centerX-sf * 1 ,centerY-sf * 4,size -sf * 3,) //Stem
        fill('orange');
        circle(centerX, centerY, size); //100, 400, 50
        fill('black');
        
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
        
        
        // triangle(triangle(100, 120, 105, 105, 90, 105)) //Nose
    
        // noFill()
        // stroke('black');
        // // curve(
            //80, 80, 90, 90, 80, 100 left eye
            //110, 80, 100, 90, 120, 100 right eye


}


