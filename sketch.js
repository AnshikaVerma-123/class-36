var canvas, backgroundImage; 
var gameState = 0; 
var playerCount; 
var database; 
var form, player, game;



function setup(){

  // to create canvas
  canvas = createCanvas(400,400);
  // to attach with data base
  database = firebase.database();
  console.log(database);
  game = new Game(); 
  game.getState();
  game.start();



  


}

function draw(){

  
}


