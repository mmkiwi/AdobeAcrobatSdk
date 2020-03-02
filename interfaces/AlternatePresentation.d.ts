interface AlternatePresentation {
    //#region properties
    active: boolean;
    type: string;
    //#endregion
    //#region methods
    start(params: {
        cOnStop?: string,
        cCommand?: string;
    }): void;
    start(cOnStop?: string, cCommand?: string): void;
    stop();
    //#endregion
}