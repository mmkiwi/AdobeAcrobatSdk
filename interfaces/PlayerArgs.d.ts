import { ScreenAnnot } from "./ScreenAnnot";
import { Doc } from "./Doc";
import { MediaRendition } from "./MediaRendition";
import { RenditionList } from "./RenditionList";
import { MediaSettings } from "./MediaSettings";
import { EventListener } from "./EventListener";

export interface PlayerArgs {
    //#region properties
    doc?: Doc,
    annot?: ScreenAnnot;
    rendition?: MediaRendition | RenditionList;
    URL?: string;
    mimeType?: string;
    settings?: MediaSettings;
    events?: EventListener;
    noStockEvents?: boolean;
    fromUser?: boolean;
    showAltText?: boolean;
    showEmptyAltText?: boolean;
    //#endregion
}