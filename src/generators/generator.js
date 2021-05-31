export class Generator {
    generator;
    options;
    middlewares;

    constructor() {
        this.options = {};
        this.middlewares = [];
    }

    generate() {
        let value = this.generator(this.options);

        this.middlewares.forEach((middleware) => {
            value = middleware(value);
        });

        return value;
    }
}