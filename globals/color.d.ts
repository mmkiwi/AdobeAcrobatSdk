import { Color } from "../interfaces/Color";

export interface color {
    //#region properties
    readonly transparent: Color;
    readonly black: Color;
    readonly white: Color;
    readonly red: Color;
    readonly green: Color;
    readonly blue: Color;
    readonly cyan: Color;
    readonly magenta: Color;
    readonly yellow: Color;
    readonly dkGray: Color;
    readonly gray: Color;
    readonly ltGray: Color;
    //#endregion
    //#region methods
    convert(colorArray: Color,
        oColorspace?: string): Color;

    equal(colorArray1: Color,
        colorArray2: Color):
        boolean;
    //#endregion
}