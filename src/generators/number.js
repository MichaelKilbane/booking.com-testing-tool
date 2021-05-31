import {Generator} from "./generator.js";
import faker from "faker";
import {resolveOptions} from "../utils/options.js";

export class NumberGenerator extends Generator {
    constructor() {
        super();

        this.generator = numberGenerator;
    }

    min(value) {
        this.options.min = value;
        return this;
    }

    max(value) {
        this.options.max = value;
        return this;
    }

    precision(value) {
        this.options.precision = value;
    }

    offset(offset) {
        this.middlewares.push((value) => {
            return value + offset;
        });
        return this;
    }
}

const numberGenerator = (options) => {
    let {
        min,
        max,
        precision
    } = resolveOptions(options);

    return faker.datatype.number({min, max, precision})
};