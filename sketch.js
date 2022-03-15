let button;
let input;

var bgcounter = 0
var bgDark = (40, 40, 40)
var bgLight = (251, 241, 199)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {
    background(bgDark)
    rotateX(-mouseY * 0.01)
    rotateY(-mouseX * 0.01)
    stroke(235, 219, 178);
    strokeWeight(1);
    texture(img);
    box(windowHeight / 4);
}

function preload() {
    img = loadImage("peepoduck.gif");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}