import { getActiveTab, setActiveTab } from "./localstorage";
import { CurrentTab, Settings } from "./types";
import { generateString } from "./utils";

let currentTab: CurrentTab = {}
let settings: Settings = {}

const Initialise = (settings: Settings): void => {
    currentTab.id = generateString(8); // 16?
    setActiveTab();
}

const IsActiveTab = (): boolean => getActiveTab() == currentTab.id;

export const Zelinos = {
    Initialise,
    currentTab,
    settings,

    // Functions
    IsActiveTab
}