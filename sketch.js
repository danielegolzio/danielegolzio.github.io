var theta = 0;
let button;
var bgcounter = 0
var bgDark = (40, 40, 40)
var bgLight = (251, 241, 199)

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
    background(bgDark)
    rotateX(-mouseY * 0.01)
    rotateY(-mouseX * 0.01)
    stroke(235, 219, 178);
    strokeWeight(1);
    texture(img);
    box(windowWidth / 6);
}