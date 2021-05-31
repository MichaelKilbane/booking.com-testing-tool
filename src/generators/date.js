import {Generator} from "./generator.js";
import faker from "faker";
import {resolveOptions} from "../utils/options.js";
import {addDays} from "../utils/date.js";

export class DateGenerator extends Generator {
    constructor(refDate) {
        super();

        this.generator = dateGenerator;
        this.options.refDate = refDate || new Date();
    }

    before(days) {
        this.options.before = days;
        return this;
    }

    after(days) {
        this.options.after = days;
        return this;
    }

    offset(days) {
        this.middlewares.push((value) => addDays(value, days));
        return this;
    }
}

const dateGenerator = (options) => {
    let {
        before,
        after,
        refDate,
    } = resolveOptions(options);

    if (before && after) return faker.date.between(addDays(refDate, -before), addDays(refDate, after));

    if (before) return faker.date.recent(before, refDate);

    if (after) return faker.date.soon(after, refDate);

    return faker.date.soon();
};
