function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink'); // x, y , diameter, color
    drawCircle(200, 100, 40, 'blue');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 80, 40, 'teal' );
    drawOval(200, 200, 40, 80, 'hotpink' );
    drawOval(300, 200, 80, 40, 'blue' );
    drawOval(400, 200, 40, 80, 'teal' );

    // Exercise 3:
    drawBullseye(100, 300, 100, 'lavender', 'black');
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 100);
    drawFace(200, 400, 50);
    drawFace(300, 400, 100);
    drawFace(400, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor1='teal', fillColor2='purple') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size *.75);
    fill(fillColor1);
    circle(centerX, centerY, size * .5);
    fill(fillColor2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, backgroundColor='white',eyeColor='black') {
    fill(backgroundColor);
    circle(centerX, centerY, size);
    fill(eyeColor);
    circle(centerX - 20, centerY - 20, size * .2);
    circle(centerX + 20, centerY - 20, size * .2);
}
