import { Icon } from "./Icon";

export interface Doc {
    //#region properties
    documentFileName: string;
    //#endregion
    //#region methods
    importIcon(cName: string, cDIPath?: string, nPage?: number): void;
    getIcon(cIcon: string): Icon;
    closeDoc(bNoSave?: boolean): void;
    //#endregion
}