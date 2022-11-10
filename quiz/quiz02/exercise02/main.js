const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    drawGrid(canvasWidth, canvasHeight);
}
function drawElmo(x, y, size, color, hasNose) {
    fill(color);
    let sf = size / 5;
    circle(x, y, size);
    fill('white');
    circle(x-sf*.8, y-sf*.75, size/4); //right eye
    circle(x+sf*.8, y-sf*.75, size/4); //left eye
    fill('black');
    circle(x-sf*.8, y-sf*.75, size/12);
    circle(x+sf*.8, y-sf*.75, size/12);
    if (hasNose == true) {
        fill('#db5461');
        ellipse(x, y+5, size/4, size/2.9);
    }

}


// function drawElmo(x, y, size, color, hasNose) {
//     fill(color);
//     circle(x, y, size);
//     fill('white');
//     circle(x-20, y-25, size/4); //right eye
//     circle(x+20, y-25, size/4); //left eye
//     fill('black');
//     circle(x-20, y-25, size/12);
//     circle(x+20, y-25, size/12);
//     if (hasNose == true) {
//         fill('#db5461');
//         ellipse(x, y+5, size/4, size/2.9);
//     }