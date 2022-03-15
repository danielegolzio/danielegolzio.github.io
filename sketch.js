var theta = 0;

function preload() {
    img = loadImage("peepoduck.gif");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    theta++;
    background(40, 40, 40)
    stroke(235, 219, 178);
    strokeWeight(1);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    texture(img);
    box(windowHeight / 4);
}
