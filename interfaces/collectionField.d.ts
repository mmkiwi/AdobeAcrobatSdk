export interface collectionField {
    //#region properties
    readonly name: string;
    order: number;
    readOnly: boolean;
    sort: number;
    text: string;
    type: collectionFieldType;
    //#endregion
    //#region methods
    //#endregion
}

export type collectionFieldType = "S" | "D" | "N" | "F" | "Desc" | "Size" | "ModDate" | "CreationDate" | "CompressedSize";