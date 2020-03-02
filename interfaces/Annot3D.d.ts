export interface Annot3D {
    //#region properties
    activated: boolean;
    readonly context3D?: object;
    readonly innerRect: [number, number, number, number];
    readonly name: string; 
    readonly page: number;
    rect: [number, number, number, number];
    //#endregion
}
