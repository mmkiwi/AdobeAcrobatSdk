import { Doc } from "./Doc";
import { Error } from "./Error";
import { MediaSelection } from "./MediaSelection";

export type Alert = ExceptionAlert | PlayerErrorAlert | FileNotFoundAlert | SelectFaliedAlert;

export interface ExceptionAlert {
    //#region properties
    type: "Exception";
    doc: Doc;
    fromUser: boolean;
    error: { message: string; };
    //#endregion
}

export interface PlayerErrorAlert {
    //#region properties
    type: "PlayerError";
    doc: Doc;
    fromUser: boolean;
    errorText: string;
    //#endregion
}

export interface FileNotFoundAlert {
    //#region properties
    type: "FileNotFound";
    doc: Doc;
    fromUser: boolean;
    fileName: string;
    //#endregion
}

export interface SelectFaliedAlert {
    //#region properties
    type: "SelectFailed";
    doc: Doc;
    fromUser: boolean;
    selection: MediaSelection;
    //#endregion
}