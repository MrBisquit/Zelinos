export type CurrentTab = {
    id?: string | null;
};
export type Settings = {
    prefix?: string | "";
    actions?: {
        newTab?: ((activeTab: string) => void)[] | [];
    };
};
export declare const events: {};
