import { Color } from "./Color";
import { Doc } from "./Doc";

export interface Bookmark {
    //#region properties
    readonly children: Array<Bookmark> | null;
    color: Color;
    readonly doc: Doc;
    name: string;
    open: boolean;
    readonly parent: Bookmark;
    style: number;
    //#endregion
    //#region methods
    createChild(cName: string,
        cExpr?: string,
        nIndex?: number):
        void;

    execute(): void;

    insertChild(oBookmark: Bookmark,
        nIndex?: number):
        void;

    remove(): void;

    setAction(cScript: string): void;

    
    //#endregion
}