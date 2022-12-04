import Config from "../Config.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = Config.canvas.columnCount * Config.image.size;
canvas.height = Config.canvas.rowCount * Config.image.size;

class Garden {

    init() {
        for (let i = 0; i < Config.canvas.columnCount; i++) {
            for (let j = 0; j < Config.canvas.rowCount; j++) {
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
        ctx.drawImage(image, x * Config.image.size, y * Config.image.size);
    }

    isGardenOneRower() {
       return Config.canvas.rowCount === 1
    }
}

export default Garden;