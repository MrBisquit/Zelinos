"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zelinos = void 0;
const localstorage_1 = require("./localstorage");
const utils_1 = require("./utils");
let currentTab = {};
let settings = {};
const Initialise = (settings) => {
    currentTab.id = (0, utils_1.generateString)(8); // 16?
    (0, localstorage_1.setActiveTab)();
};
const IsActiveTab = () => (0, localstorage_1.getActiveTab)() == currentTab.id;
exports.Zelinos = {
    Initialise,
    currentTab,
    settings,
    // Functions
    IsActiveTab
};
