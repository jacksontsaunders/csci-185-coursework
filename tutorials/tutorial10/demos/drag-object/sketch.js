const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(data.x, data.y, data.d);
    circle(data1.x, data1.y, data1.d);
}

const data = {
    x: 100,
    y: 100,
    d: 100,
    color: 'white'
}
const data1 = {
    x: 200,
    y: 200,
    d: 100,
    color: 'white'
}

let activeShape = data;

function mouseClicked () {
    
  
}
// Always running: 
function draw() {
    clear ();
    fill(data.color);
    circle(data.x, data.y, data.d); // where this draws
    circle(data1.x, data1.y, data1.d);
}

function mouseDragged() {
    let distance = dist(data.x, data.y, mouseX, mouseY);
    console.log(distance, data.x, data.y, mouseX, mouseY);
    if ( distance < data.d/2) {
        activeShape = data;
    } else {
        activeShape = data1;
    }
   
    activeShape.x = mouseX;
    activeShape.y = mouseY;
    
    
    // let d = dist(data.x, data.y, mouseX, mouseY);
    // if (d < data.d/2 || data.color == 'red') {
    //     data.color = 'red';
    //     data.x = mouseX;
    //     data.y = mouseY;
    // } 
}

function mouseReleased() {
    // data.color = 'white';
}


    