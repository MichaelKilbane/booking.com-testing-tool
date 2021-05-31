import {Generator} from "./generator.js";
import faker from "faker";

export class StringGenerator extends Generator {
    constructor() {
        super();
    }

    destination() {
        this.generator = destinationGenerator();
        return this;
    }

    garble(chance) {
        this.middlewares.push((value) => faker.datatype.float({ max: 1 }) > chance ? value : garble(value));
        return this;
    }
}

// Generators
const destinationGenerator = () => () => faker.address.cityName();


// Middlewares
const garble = (value, chance = 0.25) => {
    const noise = [
        "?",
        "<",
        ">",
        "[",
        "!",
        "@",
        "$",
        "%",
        "^",
        "{",
        "~",
        "`",
        "-",
        "*",
    ];

    return value.split("").map((chunk) => {
        if (faker.datatype.float({ max: 1 }) > chance)
            return chunk;

        return chunk + noise[faker.datatype.number(noise.length-1)];
    }).join("");
};