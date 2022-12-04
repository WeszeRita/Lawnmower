import Config from "../Config.js";

class Validation {

    isValidField(x, y) {
        return (x < Config.garden.columnCount) && (y < Config.garden.rowCount);
    }

    isLastLine(y) {
        return (y === (Config.garden.rowCount - 1));
    }

    isFirstLine(y) {
        return (y === 0);
    }

    isLastColumn(x) {
        return (x === (Config.garden.columnCount - 1));
    }
}

export default Validation;