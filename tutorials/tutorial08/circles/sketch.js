function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // 1. do we want to repeat? A: draw a circle
    // 2. How long do we want to repeat? A: 5 times
    // 3. What will change each time? A: y postion by 50
   
    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
    let size = canvasWidth;
    let fillColor = 'teal';
    strokeWeight (0);
    while (size >= 0) {
        if (fillColor == 'teal') {
            fillColor = 'black';
        } else {
            fillColor ='teal';
        }
        fill(fillColor);
        circle(x, y, size);
        size -= 75;
       
    }
    

    

    
    
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
