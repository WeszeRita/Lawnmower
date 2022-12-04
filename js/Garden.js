import Config from "../Config.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageSize = 50;
canvas.width = Config.garden.columnCount * imageSize;
canvas.height = Config.garden.rowCount * imageSize;

class Garden {
    init() {
        for (let i = 0; i < Config.garden.columnCount; i++) {
            for (let j = 0; j < Config.garden.rowCount; j++) {
                this.draw(grass, i, j);
            }
        }
        this.draw(lawnmower, 0, 0);
    }

    moveLawnMower(currentX, currentY, nextX, nextY) {
        this.draw(ground, currentX, currentY);
        this.draw(lawnmower, nextX, nextY);
    }

    draw(image, x, y) {
        ctx.drawImage(image, x * imageSize, y * imageSize);
    }

    isGardenOneRower() {
       return Config.garden.rowCount === 1
    }
}

export default Garden;