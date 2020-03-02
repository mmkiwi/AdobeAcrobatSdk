import { Doc } from "./Doc";
import { Error } from "./Error";
import { MediaSelection } from "./MediaSelection";

export interface Alert {
    type: string;
    doc: Doc;
    fromUser: boolean;
    error: { message: string; };
    errorText: string;
    fileName: string;
    selection: MediaSelection;
}
