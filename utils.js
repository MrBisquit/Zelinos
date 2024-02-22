"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAll = exports.generateString = exports.randomNumber = exports.checkExists = void 0;
const checkExists = (value) => value != null && value != undefined && value != "";
exports.checkExists = checkExists;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomNumber = randomNumber;
const generateString = (length) => {
    const charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split('');
    let gen = "";
    for (let i = 0; i < length; i++)
        gen += charMap[(0, exports.randomNumber)(0, charMap.length)];
    return gen;
};
exports.generateString = generateString;
const runAll = (args, actions) => actions.forEach((v) => v(...args));
exports.runAll = runAll;
