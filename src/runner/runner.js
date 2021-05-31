import faker from "faker";

class Runner {
    seed;
    generators;
    test;
    store;

    async run(tests) {
        const results = [];

        faker.seed(this.seed);

        for (let i = 0; i < tests; i++) {
            this.store = {};

            Object.entries(this.generators).forEach(([key, generator]) => {
                this.setValue(key, generator.generate());
            });
            //
            // console.log(this.store);

            await this.test(this, this.store);

            results.push(this.store);
        }

        return results;
    }

    setSeed(seed) {
        this.seed = seed;
    }

    setGenerators(generators) {
        this.generators = generators;
    }

    setTest(test) {
        this.test = test;
    }

    retrieveValue(key) {
        return () => this.store[key];
    }

    setValue(key, value) {
        this.store[key] = value;
    }
}

export default Runner;