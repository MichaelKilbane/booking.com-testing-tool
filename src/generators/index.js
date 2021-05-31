import {StringGenerator} from "./string.js";
import {DateGenerator} from "./date.js";
import {NumberGenerator} from "./number.js";

export const string = () => new StringGenerator();

export const date = () => new DateGenerator();

export const number = () => new NumberGenerator();