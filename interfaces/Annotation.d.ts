export type Annotation = CaretAnnotation | FileAttachmentAnnotation
export interface CaretAnnotation {
    //#region properties
    type: "Caret";
    author: string;
    //#endregion
    //#region methods
    //#endregion
}

export interface FileAttachmentAnnotation {
    type: "FileAttachment";
    attachIcon: string;
}