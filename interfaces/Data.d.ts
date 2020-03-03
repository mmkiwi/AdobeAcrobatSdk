export interface Data {
    //#region properties
    readonly creationDate: Date;
    description: string;
    readonly MIMEType: string;
    readonly modDate: Date;
    readonly name: string;
    readonly path: string;
    readonly size: number;
    //#endregion
    //#region methods
    getFieldValue(name: string,
        includePrefix?: boolean):
        string | number | Date;
    setFieldValue(name: string,
        value: string | number | Date,
        prefix: string):
        string | number | Date | null;
    //#endregion
}