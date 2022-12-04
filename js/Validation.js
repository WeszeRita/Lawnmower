import config from "../config.js";

class Validation {

    isValidField(x, y) {
        return (x < config.canvas.columnCount) && (y < config.canvas.rowCount);
    }

    isLastLine(y) {
        return (y === (config.canvas.rowCount - 1));
    }

    isFirstLine(y) {
        return (y === 0);
    }

    isLastColumn(x) {
        return (x === (config.canvas.columnCount - 1));
    }
}

export default Validation;