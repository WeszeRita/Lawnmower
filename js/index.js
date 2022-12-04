'use strict';

// Hozzájutni a rajz contexthez
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let mapSizeWidth = 11;
let mapSizeHeight = 10;
let imageSize = 50;

canvas.width = mapSizeWidth * imageSize;
canvas.height = mapSizeHeight * imageSize;



const Directions = {
  RIGHT: "right",
  LEFT: 'left',
  UP: 'up',
  DOWN: 'down',
  NONE: 'none'
};


class LawnMower {
  currentX;
  currentY;
  nextX;
  nextY;
  orientation;

  constructor(currentX = 0, currentY = 0, nextX = 0, nextY = 0, orientation = Directions.DOWN) {
    this.currentX = currentX;
    this.currentY = currentY;
    this.nextY = nextY;
    this.nextX = nextX;
    this.orientation = orientation;
  }

  move() {
    debugLawnMower()
    ctx.drawImage(ground, this.currentX, this.currentY);
    this.currentX = this.nextX;
    this.currentY = this.nextY;
    ctx.drawImage(lownmower, this.currentX, this.currentY);
  }

  calculateNextMove() {
    this.orientation = this.calculateNextOrientation();
    if (this.orientation === Directions.DOWN) {
      this.nextX = this.currentX;
      this.nextY += imageSize;
    } else if (this.orientation === Directions.UP) {
      this.nextX = this.currentX;
      this.nextY -= imageSize;
    } else if (this.orientation === Directions.RIGHT) {
      this.nextX += imageSize;
      this.nextY = this.currentY;
    } else if (this.orientation === Directions.LEFT) {
      this.nextX -= imageSize;
      this.nextY = this.currentY;
    }
    if (!isValidField(this.nextX, this.nextY)) {
      this.nextX = this.currentX;
      this.nextY = this.currentY;
    }
  }

  calculateNextOrientation() {
    if (isLastLine(this.currentY)) {
      if (isLastColumn(this.currentX)) {
        return Directions.NONE
      } else if (this.orientation === Directions.DOWN) {
        return Directions.RIGHT
      } else {
        return Directions.UP
      }
    } else if (isFirstLine(this.currentY)) {
      if (this.orientation === Directions.UP) {
        return Directions.RIGHT
      } else {
        return Directions.DOWN
      }
    } else {
      return this.orientation
    }
  }
}

let lawnMower = new LawnMower();


function isValidField(x, y) {
  return (x < mapSizeWidth * imageSize) && (y < mapSizeHeight * imageSize);
}

function isLastLine(y) {
  return (y === (mapSizeHeight - 1) * imageSize);
}

function isFirstLine(y) {
  return (y === 0);
}

function isLastColumn(x) {
  return (x === (mapSizeWidth - 1) * imageSize);
}

function debugLawnMower(x) {
  console.log(lawnMower);
}

// Ez a függvény azután fut le, hogy a képek betöltöttek
window.onload = () => {
  const grass = document.getElementById('grass');
  const stone = document.getElementById('stone');
  const lownmower = document.getElementById('lownmower')


  let coordinateX = 0;
  let coordinateY = 0;
  for (let i = 0; i < mapSizeHeight; i++) {

    for (let j = 0; j < mapSizeWidth; j++) {
      ctx.drawImage(grass, coordinateX, coordinateY)
      coordinateX += imageSize;
    }

    coordinateY += imageSize;
    coordinateX = 0;
  }

  ctx.drawImage(lownmower, 0, 0)

  setInterval(startLawn, 100);

  //createStones(3);
};

function init() {

}

function startLawn() {
  lawnMower.calculateNextMove();
  lawnMower.move();
}

// function move(direction) {
//   if (direction === Directions.RIGHT) {
//     if (travelDistanceX === mapSizeWidth * imageSize) {
//       return
//     }
//     ctx.drawImage(ground, 0, 0);
//     ctx.drawImage(lownmower, travelDistanceX, 0);
//     ctx.drawImage(ground, travelDistanceX - imageSize, 0);
//     travelDistanceX += imageSize;
//   } 
//   if (direction === Directions.DOWN) {
//     if (travelDistanceY === mapSizeHeight * imageSize) {
//       return
//     }
//     ctx.drawImage(ground, 0, 0);
//     ctx.drawImage(lownmower, 0, travelDistanceY);
//     ctx.drawImage(ground, 0, travelDistanceY - imageSize);
//     travelDistanceY += imageSize;
//   }
// }


// function createStones(numberOfStones){
//   for (let i = 0; i < numberOfStones; i++) {
//   let rowIndex = Math.round( ( mapSizeWidth - 1) * Math.random() );
//   let columnIndex = Math.round( ( mapSizeHeight - 1) * Math.random() );
//   console.log(`ROW: ${rowIndex}, COLUMN: ${columnIndex}`);
//   ctx.drawImage(stone, rowIndex * imageSize, columnIndex * imageSize)
// }
// }

// setInterval(startLawn, 500);
