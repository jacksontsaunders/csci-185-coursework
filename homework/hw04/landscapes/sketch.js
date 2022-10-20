const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);
    
    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);
    
    // draws 1000 stars: 
    strokeWeight(0);
    fill('white');
    let i = 0;
    while (i < 1000) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
        i++;
}
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}
function draw(){
    clear();
    frameRate(.8);
    let i = 0;
    while (i < 1000) {
        //Tried smaller values in effort to allow a a few stars
        //to animate but keeping others stationary
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
        i++;
    }
}



    strokeWeight(0);
    fill('white');
    let i = 0;
    while (i < 1000) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
        i++;
}
    
