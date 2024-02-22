export const checkExists = (value: any) => value != null && value != undefined && value != "";
export const randomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
export const generateString = (length: number): string => {
    const charMap: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split('');
    let gen = "";
    for (let i = 0; i < length; i++) gen += charMap[randomNumber(0, charMap.length)];
    return gen;
}
export const runAll = (args: any, actions: any[]) => actions.forEach((v) => v(...args));