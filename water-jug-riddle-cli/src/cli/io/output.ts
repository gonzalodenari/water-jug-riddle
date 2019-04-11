
export enum Color {
    Green,
    Cyan,
    White,
    Red,
    Yellow,
    Magenta
}

const colors = {
    [Color.Green]: "\x1b[32m",
    [Color.Cyan]: "\x1b[36m",
    [Color.White]: "\x1b[37m",
    [Color.Red]: "\x1b[31m",
    [Color.Yellow]: "\x1b[33m",
    [Color.Magenta]: "\x1b[35m",
};

const print = (message: string, color?: Color) => {
    console.log(`${(color) ? colors[color] : ""}${message}`);
};

const println = (message: string, color?: Color) => {
    console.log(`${(color) ? colors[color] : ""}${message}\n`);
};

const getColorAsString = (color: Color): string => {
    return colors[color];
};

export {
    print,
    println,
    getColorAsString
};