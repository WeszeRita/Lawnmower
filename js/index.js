'use strict';
import LawnMower from "./Lawnmower.js";
import config from "../config.js";

// for canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = config.canvas.columnCount * config.image.size;
canvas.height = config.canvas.rowCount * config.image.size;



let lawnMower = new LawnMower();


window.onload = () => {
  const grassPic = document.getElementById('grass');  
  // const groundPic = document.getElementById('ground');  
   const lawnmowerPic = document.getElementById('lownmower')


  let coordinateX = 0;
  let coordinateY = 0;
  for (let i = 0; i < config.canvas.rowCount; i++) {

    for (let j = 0; j < config.canvas.columnCount; j++) {
      ctx.drawImage(grassPic, coordinateX, coordinateY)
      coordinateX += config.image.size;
    }

    coordinateY += config.image.size;
    coordinateX = 0;
  }

  ctx.drawImage(lawnmowerPic, 0, 0)


  let interval = setInterval(startSimulation, 100);
  let iteration = 0;

 function startSimulation() {
  iteration++;
  if (iteration === config.canvas.rowCount * config.canvas.columnCount) {
    clearInterval(interval);

  }
  startLawn();
 }
 
};

function init() {

}

function startLawn() {
  lawnMower.calculateNextMove();
  lawnMower.move();
}
