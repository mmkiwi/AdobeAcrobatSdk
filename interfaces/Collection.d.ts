import { collectionField } from "./collectionField";
export interface Collection {
    //#region properties
    readonly fields: Array<collectionField>;
    initialDoc: string;
    initialView: string;
    //#endregion
    //#region methods
    addField(name: string,
        text: string,
        type?: "S" | "D" | "N" | "F" | "Desc" | "Size" | "ModDate" |
            "CreationDate" | "CompressedSize", 
        order?: number,
        visible?: boolean,
        readOnly?: boolean):
        collectionField;

    getField(name: string): collectionField;

    removeField(name: string): void;
    //#endregion
}