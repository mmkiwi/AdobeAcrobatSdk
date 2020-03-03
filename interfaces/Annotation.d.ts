import { annotAttachment } from "./annotAttachment";
import { Doc } from "../index";
import { Color } from "./Color";
import { Span } from "./Span";
import { interval } from "./interval";

export type Annotation = CaretAnnotation | CircleAnnotation | FreeTextAnnotation | FileAttachmentAnnotation |
    HighlightAnnotation | InkAnnotation | LineAnnotation | PolygonAnnotation | PolyLineAnnotation | RedactAnnotation | SoundAnnotation | SquareAnnotation | SquigglyAnnotation | StampAnnotation | StrikeOutAnnotation | TextAnnotation | UnderlineAnnotation;

type CaretAnnotation = { readonly type: "Caret"; } & annotMethods &
    Pick<annotProperties, "author" | "borderEffectIntensity" | "borderEffectStyle" | "caretSymbol" | "contents" |
        "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" |
        "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" |
        "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type CircleAnnotation = { readonly type: "Circle"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "dash" | "delay" |
        "fillColor" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" |
        "page" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" |
        "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type FileAttachmentAnnotation = { readonly type: "FileAttachment"; } & annotMethods &
    Pick<annotProperties,
        "attachIcon" | "attachment" | "author" | "borderEffectIntensity" | "borderEffectStyle" | "cAttachmentPath" |
        "contents" | "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" |
        "noView" | "opacity" | "page" | "point" | "print" | "readOnly" | "rect" | "refType" | "richContents" |
        "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type FreeTextAnnotation = { readonly type: "FreeText"; } & annotMethods &
    Pick<annotProperties,
        "alignment" | "author" | "borderEffectIntensity" | "borderEffectStyle" | "callout" | "contents" |
        "creationDate" | "dash" | "delay" | "fillColor" | "hidden" | "inReplyTo" | "intent" | "lineEnding" | "lock" |
        "modDate" | "name" | "noView" | "opacity" | "page" | "print" | "readOnly" | "rect" | "refType" |
        "richContents" | "richDefaults" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" |
        "textFont" | "textSize" | "toggleNoView" | "width">;

type HighlightAnnotation = { readonly type: "Highlight"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" |
        "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" |
        "popupRect" | "print" | "quads" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type InkAnnotation = { readonly type: "Ink"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "dash" | "delay" |
        "gestures" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" |
        "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type LineAnnotation = { readonly type: "Line"; } & annotMethods &
    Pick<annotProperties,
        "arrowBegin" | "arrowEnd" | "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" |
        "creationDate" | "dash" | "delay" | "doCaption" | "fillColor" | "hidden" | "inReplyTo" | "intent" |
        "leaderExtend" | "leaderLength" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "points" |
        "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type PolygonAnnotation = { readonly type: "Polygon"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "dash" | "delay" |
        "fillColor" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" |
        "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "vertices" | "width">;

type PolyLineAnnotation = { readonly type: "PolyLine"; } & annotMethods &
    Pick<annotProperties,
        "arrowBegin" | "arrowEnd" | "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" |
        "creationDate" | "dash" | "delay" | "fillColor" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" |
        "name" | "noView" | "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" |
        "richContents" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "vertices" |
        "width"
    >;

type RedactAnnotation = { readonly type: "Redact"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" |
        "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" |
        "popupRect" | "print" | "quads" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "width" | "alignment" | "overlayText" | "repeat">;

type SoundAnnotation = { readonly type: "Sound"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" |
        "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "point" | "print" |
        "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" | "soundIcon" | "strokeColor" | "style" |
        "subject" | "toggleNoView" | "width">;

type SquareAnnotation = { readonly type: "Square"; } & annotMethods &
    Pick<annotProperties, "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" |
        "dash" | "delay" | "fillColor" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" |
        "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" |
        "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type SquigglyAnnotation = { readonly type: "Squiggly"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" |
        "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" |
        "popupRect" | "print" | "quads" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" |
        "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type StampAnnotation = { readonly type: "Stamp"; } & annotMethods &
    Pick<annotProperties,
        "AP" | "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView">;

type StrikeOutAnnotation = { readonly type: "StrikeOut"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "quads" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type TextAnnotation = { readonly type: "Text"; } &
    ({
        stateModel: "Marked";
        state: "Marked" | "Unmarked";
    } | {
        stateModel: "Review";
        state: "Accepted" | "Rejected" | "Cancelled" | "Completed" | "None";
    }) & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "noteIcon" | "opacity" | "page" | "point" | "popupOpen" | "popupRect" | "print" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type UnderlineAnnotation = { readonly type: "Underline"; } & annotMethods &
    Pick<annotProperties,
        "author" | "borderEffectIntensity" | "borderEffectStyle" | "contents" | "creationDate" | "delay" | "hidden" | "inReplyTo" | "intent" | "lock" | "modDate" | "name" | "noView" | "opacity" | "page" | "popupOpen" | "popupRect" | "print" | "quads" | "readOnly" | "rect" | "refType" | "richContents" | "rotate" | "seqNum" | "strokeColor" | "style" | "subject" | "toggleNoView" | "width">;

type arrow = "None" | "OpenArrow" | "ClosedArrow" | "ROpenArrow" | "RClosedArrow" | "Butt" | "Diamond" | "Circle" |
    "Square" | "Slash";

interface annotMethods {
    destroy(): void;
}

interface annotProperties {
    alignment?: 0 | 1 | 2;
    readonly attachment?: annotAttachment;
    AP?: string;
    arrowBegin?: arrow;
    arrowEnd?: arrow;
    attachIcon?: "Paperclip" | "PushPin" | "Graph" | "Tag";
    author?: string; // ALL
    borderEffectIntensity?: number; // ALL
    borderEffectStyle?: "" | "C"; //ALL
    callout?: [number, number, number, number, number?, number?];
    cAttachmentPath?: string;
    caretSymbol?: "" | "P" | "S";
    contents?: string; //all
    creationDate?: Date; //all
    dash?: number[];
    delay?: boolean; //all
    readonly doc?: Doc; //all
    doCaption?: boolean;
    fillColor?: Color;
    gestures?: [number, number][];
    hidden?: boolean; //all
    inReplyTo?: string; //all
    intent?: string; //PULL OUT
    leaderExtend?: number;
    leaderLength?: number;
    lineEnding?: arrow;
    lock?: boolean; //all
    modDate?: Date; //all
    name: string; //all
    noteIcon?: "Check" | "Circle" | "Comment" | "Cross" | "Help" | "Insert" | "Key" | "NewParagraph" | "Note" | "Paragraph" | "RightArrow" | "RightPointer" | "Star" | "UpArrow" | "UpLeftArrow";
    noView?: boolean; //all
    opacity?: number; //all
    overlayText?: string;
    page?: number; //all
    point?: [number, number];
    points?: [[number, number], [number, number]];
    popupOpen?: boolean;
    popupRect?: [number, number, number, number];
    print?: boolean; //all
    quads?: number[];
    rect?: [number, number, number, number];//all
    readOnly?: boolean; //all
    refType?: "R" | "Group"; //all
    repeat?: boolean;
    richContents?: Span[];
    richDefaults?: Span;
    rotate?: number;
    seqNum?: number;//all
    soundIcon?: "Speaker";
    strokeColor?: Color; //all
    style?: "S" | "D"; //all
    subject?: string; //all
    textFont?: string;
    textSize?: number;
    toggleNoView?: boolean; //all
    vertices?: number[][];
    width?: number;

}