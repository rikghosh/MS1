var ballX = Math.floor(Math.random()*300);
var ballY = Math.floor(Math.random()*300);

var score = 0;

var ballXMove = 2.5;
var ballYMove = 3;

var colorR = Math.floor(Math.random()*255);
var colorG = Math.floor(Math.random()*255);
var colorB = Math.floor(Math.random()*255);



function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(250);
    
    
    fill(colorR, colorG, colorB);
    stroke(255);
    
    textAlign(CENTER);
    textFont("Courier New", 30)
    text("~PONG~", 300, 100)
    
    rectMode(CENTER);
    
    rect(mouseX, 600, 60, 10)
    
    
    ellipse(ballX, ballY, 10, 10)
    
    ballY += ballYMove
    ballX += ballXMove
    
    if (ballY < 5) {
        ballYMove *= -1;
    }
    
    if (ballX < 5) {
        ballXMove *= -1;
    }
    
    if (ballX > 595) {
        ballXMove *= -1;
    }
    
    if (ballY > 590 && (ballX > mouseX-35 && ballX < mouseX+35)) {
        ballYMove *= -1.1;
        ballXMove *= 1.1;
        score++; 
    }
    
    textFont("Courier New", 15);
    text("SCORE: "+ score, 300, 400);
    
    if (ballY >= 600) {
        textFont("Courier New", 30);
        text("☹", 300, 200);
        textFont("Courier New", 15);
        text("GAME OVER", 300, 300);
        ballXMove = 0;
        ballYMove = 1;
        
    }
    
  
}