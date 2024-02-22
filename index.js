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
    setInterval(() => {
        var _a;
        if (!IsActiveTab()) {
            (0, utils_1.runAll)(currentTab.id, ((_a = settings.actions) === null || _a === void 0 ? void 0 : _a.newTab) || []);
        }
    }, 500);
};
const IsActiveTab = () => (0, localstorage_1.getActiveTab)() == currentTab.id;
exports.Zelinos = {
    Initialise,
    currentTab,
    settings,
    // Functions
    IsActiveTab
};
