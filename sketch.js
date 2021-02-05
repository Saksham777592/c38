var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var distance = 0;
var playerCount;
var index,name;

var database;

var form, player, game;

var car1, car2, car3, car4;
var cars;

function setup() {
  canvas = createCanvas(displayWidth-50, displayHeight-200);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  //when 4players join we want the game state to become 1/PLAY state
  if(playerCount===4){
    game.update(1);
  }
     
  if(gameState===1){
    clear();
    game.play();
  }
}
