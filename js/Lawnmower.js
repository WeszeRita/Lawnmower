import Directions from "./Directions.js";
import Validation from "./Validation.js";
import Garden from "./Garden.js";

let validation = new Validation;
let garden = new Garden;

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
        garden.moveLawnMower(this.currentX, this.currentY, this.nextX, this.nextY);
        this.currentX = this.nextX;
        this.currentY = this.nextY;
    }

    calculateNextMove() {
        this.orientation = this.calculateNextOrientation();
        if (this.orientation === Directions.DOWN) {
            this.nextX = this.currentX;
            this.nextY++;
        } else if (this.orientation === Directions.UP) {
            this.nextX = this.currentX;
            this.nextY--;
        } else if (this.orientation === Directions.RIGHT) {
            this.nextX++;
            this.nextY = this.currentY;
        } else if (this.orientation === Directions.LEFT) {
            this.nextX--;
            this.nextY = this.currentY;
        }
        if (!validation.isValidField(this.nextX, this.nextY)) {
            this.nextX = this.currentX;
            this.nextY = this.currentY;
        }
    }

    calculateNextOrientation() {
        if (validation.isLastLine(this.currentY)) {
            if (validation.isLastColumn(this.currentX)) {
                return Directions.NONE
            } else if (this.orientation === Directions.DOWN) {
                return Directions.RIGHT
            } else {
                return Directions.UP
            }
        } else if (validation.isFirstLine(this.currentY)) {
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

export default LawnMower;