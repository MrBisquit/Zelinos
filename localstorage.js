"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setActiveTab = exports.getActiveTab = void 0;
const _1 = require(".");
const utils_1 = require("./utils");
const getActiveTab = () => {
    const r = localStorage.getItem(`${(0, utils_1.checkExists)(_1.Zelinos.settings.prefix) ? _1.Zelinos.settings.prefix + "_" : ""}_CAT`) || "";
    return r;
};
exports.getActiveTab = getActiveTab;
const setActiveTab = () => localStorage.setItem(`${(0, utils_1.checkExists)(_1.Zelinos.settings.prefix) ? _1.Zelinos.settings.prefix + "_" : ""}_CAT`, _1.Zelinos.currentTab.id || "");
exports.setActiveTab = setActiveTab;
