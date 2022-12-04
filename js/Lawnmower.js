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
    cornersCovered;

    constructor(currentX = 0, currentY = 0, nextX = 0, nextY = 0, orientation = Directions.DOWN, cornersCovered = 0) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.nextY = nextY;
        this.nextX = nextX;
        this.orientation = orientation;
        this.cornersCovered = cornersCovered;
    }

    move() {
        garden.moveLawnMower(this.currentX, this.currentY, this.nextX, this.nextY);
        this.currentX = this.nextX;
        this.currentY = this.nextY;
    }

    calculateNextMove() {
        this.orientation = this.calculateNextOrientation();
        this.updateNextPosition();
    }

    updateNextPosition() {
        this.nextX = this.currentX;
        this.nextY = this.currentY;

        switch (this.orientation) {
            case Directions.DOWN:
                this.nextY++;
                break;
            case Directions.UP:
                this.nextY--;
                break;
            case Directions.RIGHT:
                this.nextX++;
                break;
            case Directions.LEFT:
                this.nextX--;
                break;
        }

        if (!validation.isValidField(this.nextX, this.nextY)) {
            this.nextX = this.currentX;
            this.nextY = this.currentY;
        }
    }

    calculateNextOrientation() {
        if (this.cornersCovered < 2) {
            this.calculateCornersCovered();
            if (validation.isLastLine(this.currentY)) {
                if (this.orientation === Directions.DOWN || garden.isGardenOneRower()) {
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
        return Directions.NONE
    }

    calculateCornersCovered() {
        if (validation.isLastColumn(this.currentX)) {
            if (validation.isFirstLine(this.currentY)) {
                this.cornersCovered++;
            }
            if (validation.isLastLine(this.currentY)) {
                this.cornersCovered++;
            }
        }
    }
}

export default LawnMower;