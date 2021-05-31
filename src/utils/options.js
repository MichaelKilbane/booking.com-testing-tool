export const resolveOptions = (options) => {
    return Object.entries(options).reduce((acc, [key, value]) => {
        acc[key] = typeof value === "function" ? value() : value;
        return acc;
    }, {});
};