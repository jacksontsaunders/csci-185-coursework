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
        
        
        // triangle(triangle(100, 120, 105, 105, 90, 105)) //Nose
    
        // noFill()
        // stroke('black');
        // // curve(
            //80, 80, 90, 90, 80, 100 left eye
            //110, 80, 100, 90, 120, 100 right eye


}


