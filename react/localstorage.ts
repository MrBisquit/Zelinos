import { checkExists } from "./utils";
import { Zelinos } from "./Zelinos";

export const getActiveTab = (): string => {
    const r: string = localStorage.getItem(`${checkExists(Zelinos.settings.prefix) ? Zelinos.settings.prefix + "_" : ""}_CAT`) || "";
    return r;
}
export const setActiveTab = (): void => localStorage.setItem(`${checkExists(Zelinos.settings.prefix) ? Zelinos.settings.prefix + "_" : ""}_CAT`, Zelinos.currentTab.id || "");