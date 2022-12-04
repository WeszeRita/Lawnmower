import Config from "../Config.js";
import Garden from "./Garden.js";
import LawnMower from "./Lawnmower.js";

let garden = new Garden();
let lawnMower = new LawnMower();

garden.init();

let interval = setInterval(startSimulation, 100);
let iteration = 0;

function startSimulation() {
  startLawn();
  iteration++;
  if (iteration === Config.canvas.rowCount * Config.canvas.columnCount - 1) {
    clearInterval(interval);
  }
}

function startLawn() {
  lawnMower.calculateNextMove();
  lawnMower.move();
}
