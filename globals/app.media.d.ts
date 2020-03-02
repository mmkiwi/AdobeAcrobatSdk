import { MediaPlayer } from "../interfaces/MediaPlayer";
import { ScreenAnnot } from "../interfaces/ScreenAnnot";
import { Doc } from "../interfaces/Doc";
import { MediaReject } from "../interfaces/MediaReject";
import { PlayerArgs } from "../interfaces/PlayerArgs";
import { MediaData } from "../interfaces/MediaData";
import { MediaSettings } from "../interfaces/MediaSettings";
import { MediaSelection } from "../interfaces/MediaSelection";
import { event } from "../interfaces/event";
import { PlayerInfoList } from "../interfaces/PlayerInfoList";
import { Events } from "../interfaces/Events";

export interface app_media {
    //#region properties
    readonly align: {
        readonly topLeft: any,
        readonly topCenter: any,
        readonly topRight: any,
        readonly centerLeft: any,
        readonly center: any,
        readonly centerRight: any,
        readonly bottomLeft: any,
        readonly bottomCenter: any,
        readonly bottomRight: any;
    };
    readonly canResize: {
        readonly no: any,
        readonly keepRatio: any,
        readonly yes: any;
    };
    readonly closeReason: {
        readonly general: any,
        readonly closeReason: any,
        readonly done: any,
        readonly stop: any,
        readonly play: any,
        readonly uiGeneral: any,
        readonly uiScreen: any,
        readonly uiEdit: any,
        readonly docClose: any,
        readonly docSave: any,
        readonly docChange: any;
    };
    readonly defaultVisible: boolean;
    readonly ifOffScreen: {
        allow: any,
        forceOnScreen: any,
        cancel: any;
    };
    readonly layout: {
        readonly meet: any,
        readonly slide: any,
        readonly fill: any,
        readonly scroll: any,
        readonly hidden: any,
        readonly standard: any;
    };
    readonly monitorType: {
        readonly document: any,
        readonly nonDocument: any,
        readonly primary: any,
        readonly bestColor: any,
        readonly largest: any,
        readonly tallest: any,
        readonly widest: any;
    };
    readonly openCode: {
        readonly success: any,
        readonly failGeneral: any,
        readonly failSecurityWindow: any,
        readonly failPlayerMixed: any,
        readonly failPlayerSecurityPrompt: any,
        readonly failPlayerNotFound: any,
        readonly failPlayerMimeType: any,
        readonly failPlayerSecurity: any,
        readonly failPlayerData: any;
    };
    readonly over: {
        readonly pageWindow: any,
        readonly appWindow: any,
        readonly desktop: any,
        readonly monitor: any;
    };
    readonly pageEventNames: {
        readonly Open: any,
        readonly Close: any,
        readonly InView: any,
        readonly OutView: any;
    };
    readonly raiseCode: {
        readonly fileNotFound: any,
        readonly fileOpenFailed: any,
        [x: string]: any;
    };
    readonly raiseSystem: {
        readonly fileError: any,
        [x: string]: any;
    };
    readonly renditionType: {
        readonly unknown: any,
        readonly media: any,
        readonly selector: any;
    };
    readonly status: {
        readonly clear: any,
        readonly message: any,
        readonly contacting: any,
        readonly buffering: any,
        readonly init: any,
        readonly seeking: any;
    };
    trace: boolean;
    readonly version: number;
    readonly windowType: {
        readonly docked: any,
        readonly floating: any,
        readonly fullScreen: any;
    };
    //#endregion
    //#region methods
    addStockEvents(player: MediaPlayer,
        annot: ScreenAnnot):
        void;
    alertFileNotFound(oDoc: Doc,
        cFilename: string,
        bCanSkipAlert?: boolean): boolean;
    alertSelectFailed(oDoc: Doc,
        oRejects?: Array<MediaReject>,
        bCanSkipAlert?: boolean,
        bFromUser?: boolean):
        true;
    argsDWIM(args: PlayerArgs): PlayerArgs;
    canPlayOrAlert(args: PlayerArgs): boolean;
    // TODO: Check Return Type
    computerFloatWinRect(doc: Doc,
        floating: object,
        monitorType: number,
        uiSize: [number, number, number, number]):
        [number, number, number, number];
    constrainRectToScreen(rect: [number, number, number, number],
        anchorPt?: [number, number]):
        [number, number, number, number];
    createPlayer(args?: PlayerArgs): MediaPlayer;
    getAltTextData(cAltText: string): MediaData;
    getAltTextSettings(args: PlayerArgs,
        selection: MediaSelection):
        MediaSettings | null;
    getAnnotStockEvents(settings: number): event;
    getPlayers(cMimeType?: string): PlayerInfoList;
    getPlayerStockEvents(settings: MediaSettings): Events;
    getPlayerTraceEvents(): Events;
    getRenditionSettings(args: PlayerArgs): MediaSettings | null;
    getURLData(cURL?: string, cMimeType?: string): MediaData;
    getURLSettings(args: PlayerArgs): MediaSettings;
    getWindowBorderSize(hasTitle?: boolean,
        hasClose?: boolean,
        canResize?: app_media["canResize"]):
        [number, number, number, number];
    openPlayer(args: PlayerArgs): MediaPlayer | null;
    removeStockEvents(player: MediaPlayer): void;
    startPlayer(args:PlayerArgs): MediaPlayer | null;
    
    //#endregion
}