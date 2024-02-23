import { CurrentTab, Settings } from "./types";
import { setActiveTab, getActiveTab } from "./localstorage";
import { generateString, runAll } from "./utils";

let currentTab: CurrentTab = {}
let settings: Settings = {}

const Initialise = (settings: Settings): void => {
    currentTab.id = generateString(8); // 16?
    setActiveTab();

    setInterval(() => {
        if(!IsActiveTab()) {
            runAll(currentTab.id, settings.actions?.newTab || []);
        }
    }, 500);
}

const IsActiveTab = (): boolean => getActiveTab() == currentTab.id;

export const Zelinos = {
    Initialise,
    currentTab,
    settings,

    // Functions
    IsActiveTab
}