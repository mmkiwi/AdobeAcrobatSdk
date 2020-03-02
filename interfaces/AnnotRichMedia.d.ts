interface AnnotRichMedia {
    //#region properties
    activated:boolean;
    readonly context3D?: object;
    readonly name: string;
    readonly page: number;
    rect: [number, number, number, number];
    readonly subtype: string;
    //#endregion
    
    //#region methods
    callAS(params: {
        methodName: string,
        arguments: []
    }): any;

    callAS(methodName: string, ...arguments: any): any;
    //#endregion
}