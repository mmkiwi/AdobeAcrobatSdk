import { State } from "../interfaces/State";
import { ReadStream } from "../interfaces/ReadStream";
import { Doc } from "../interfaces/Doc";

export interface Collab {
    //#region methods
    addStateModel(cName: string,
        cUIName: string,
        oStates: {
            [x: string]: State;
        },
        cDefault?: string,
        bHidden?: boolean,
        bHistory?: boolean):
        void;

    documentToStream(oDocument: Doc): ReadStream;
    
    removeStateModel(cName: string): void;
    //#endregion
}