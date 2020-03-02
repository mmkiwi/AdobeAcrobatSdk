export interface MenuItem {
    //#region properties
    cName: string;
    bMarked?: boolean;
    bEnabled?: boolean;
    cReturn?: string;
    oSubMenu?: MenuItem;
    //#endregion
}