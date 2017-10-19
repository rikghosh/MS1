var ballX = Math.floor(Math.random()*300);
var ballY = Math.floor(Math.random()*300);

var score = 0;

var ballXMove = 2.5;
var ballYMove = 3;

var colorR = Math.floor(Math.random()*255);
var colorG = Math.floor(Math.random()*255);
var colorB = Math.floor(Math.random()*255);



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(250);
    
    
    fill(colorR, colorG, colorB);
    stroke(255);
    
    textAlign(CENTER);
    textFont("Courier New", 30)
    text("~PONG~", windowWidth/2, windowHeight/6)
    
    rectMode(CENTER);
    
    rect(mouseX, windowHeight, 60, 10)
    
    
    ellipse(ballX, ballY, 10, 10)
    
    ballY += ballYMove
    ballX += ballXMove
    
    if (ballY < 5) {
        ballYMove *= -1;
    }
    
    if (ballX < 5) {
        ballXMove *= -1;
    }
    
    if (ballX > windowWidth-5) {
        ballXMove *= -1;
    }
    
    if (ballY > windowHeight-10 && (ballX > mouseX-35 && ballX < mouseX+35)) {
        ballYMove *= -1.1;
        ballXMove *= 1.1;
        score++; 
    }
    
    textFont("Courier New", 15);
    text("SCORE: "+ score, windowWidth/2, 2*windowHeight/3);
    
    if (ballY >= windowHeight-5) {
        textFont("Courier New", 30);
        text("☹", windowWdith/2, windowHeight/3);
        textFont("Courier New", 15);
        text("GAME OVER", windowWidth/2, windowHeight/2);
        ballXMove = 0;
        ballYMove = 1;
        
    }
    
  
}