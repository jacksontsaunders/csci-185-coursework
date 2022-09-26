function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#456abc");

    drawSmiley(10, 70, 300);
    drawSmiley(100, 90, 500); 
    drawSmiley(150, 120, 30);

    // invoke drawSmiley
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('red');
    // circle(550, 100, 100);
    // fill ('black');
    // circle(570, 70, 20)
    // circle(530, 70, 20)
    // ellipse(550, 120, 50, 20);

    

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}




function drawSmiley(x, y, diameter) {
    fill("yellow");
    circle(400, 400, diameter); // x, y, diameter
}
