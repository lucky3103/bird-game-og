var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var birds, bird1, bird2, bird3, bird4;

var track, bird1_img, bird2_img, bird3_img, bird4_img;

function preload(){
  track = loadImage("images/sky.png");
  bird1_img = loadImage("images/bird1.jpg");
  bird2_img = loadImage("images/bird2.jpg");
  bird3_img = loadImage("images/bird3.jpg");
  bird4_img = loadImage("images/bird4.jpg");
  //ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
