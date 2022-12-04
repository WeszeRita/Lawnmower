import config from "../config.js";

class Validation {

    isValidField(x, y) {
        return (x < config.canvas.columnCount * config.image.size) && (y < config.canvas.rowCount * config.image.size);
    }

    isLastLine(y) {
        return (y === (config.canvas.rowCount - 1) * config.image.size);
    }

    isFirstLine(y) {
        return (y === 0);
    }

    isLastColumn(x) {
        return (x === (config.canvas.columnCount - 1) * config.image.size);
    }
}

export default Validation;