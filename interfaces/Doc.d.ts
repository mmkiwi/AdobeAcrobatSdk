import { Icon } from "./Icon";
import { Bookmark } from "./Bookmark";
import { Collection } from "./Collection";
import { Data } from "./Data";
import { HostContainer } from "./HostContainer";
import { DocMedia } from "./Doc.media";
import { Annotation } from "./Annotation";
import { Sound } from "./Sound";
import { Template } from "./Template";
import { XFAObject } from "./XFAObject";

export interface Doc {
    //#region properties
    readonly alternatePresentations?: AlternatePresentation;
    author: string;
    baseURL: string;
    readonly bookmarkRoot: Bookmark;
    calculate: boolean;
    readonly collection: Collection;
    readonly creationDate: Date;
    readonly creator: string;
    readonly dataObjects: Data[];
    delay: boolean;
    /** @description  Specifies whether the document needs to be saved as the result of a changes to the document. It is
     * useful to reset the dirty flag when performing changes that do not warrant saving, such as updating a status
     * field. **Note:** If the document is temporary or newly created, setting dirty to false has no effect. That is,
     * the user is still asked to save changes before closing the document. See requiresFullSave. */
    dirty: boolean;
    /** @description Specifies whether the document should be accessible to JavaScript scripts in other documents. The
     * app.openDoc and app.activeDocs methods check the disclosed property of the document before returning its Doc. */
    disclosed: boolean;
    /** @description An array of two strings in hex-encoded binary format. The first string is a permanent identifier
     * based on the contents of the file at the time it was originally created; it does not change when the file is
     * incrementally updated. The second string is a changing identifier based on the file’s contents at the time it was
     * last updated. These identifiers are defined by the optional ID entry in a PDF file’s trailer dictionary. (See the
     * PDF Reference.) */
    readonly docID: [string, string];
    /** @description The base file name, with extension, of the document referenced by the Doc. The device-independent
     * path is not returned. See also the path and URL properties. The file size of the document can be obtained from
     * the filesize property. */
    readonly documentFileName: string;
    readonly dynamicXFAForm: boolean;
    readonly external: boolean;
    readonly filesize: number;
    readonly hidden: boolean;
    hostContainer: HostContainer;
    readonly icons: Icon[] | null;
    info: {
        Title: string;
        Author: string;
        Authors: string[] | string;
        Subject: string;
        Keywords: string;
        Creator: string;
        Producer: string;
        CreationDate: Date;
        ModDate: Date;
        Trapped: string;
        [x: string]: any;
    };
    readonly innterAppWindowRect: number[];
    readonly innerDocWindowRect: number[];
    readonly isModel: boolean;
    readonly keywords: { [x: string]: string; };
    layout: "SinglePage" | "OneColumn" | "TwoColumnLeft" | "TwoColumnRight" | "TwoPageLeft" | "TwoPageRight";
    media: DocMedia;
    metadata: string;
    readonly modDate: Date;
    readonly mouseX: number;
    readonly mouseY: number;
    noautocomplete: boolean;
    readonly numFields: number;
    readonly numPages: number;
    readonly numTemplates: number;
    readonly path: string;
    readonly outerAppWindowRect: number[];
    readonly outerDocWindowRect: number[];
    pageNum: number;
    readonly pageWindowRect: number[];
    readonly permStatusRead: boolean;
    readonly producer: string;
    readonly requiresFullSave: boolean;
    readonly securityHandler: string | null;
    readonly selectedAnnots: Annotation[];
    readonly sounds: Sound[];
    spellDictionaryOrder: string[];
    spellLanguageOrder: string[];
    subject: string;
    readonly templates: Template[];
    title: string;
    readonly URL: string;
    viewState: object;
    readonly xfa: XFAObject;
    readonly XFAForeground:boolean;
    zoom: number;
    zoomType: "NoVary" | "FitPage" | "FitWidth" | "FitHeight" | "FitVisibleWidth" | "Preferred" | "ReflowWidth"

    //#endregion
    //#region methods
    importIcon(cName: string, cDIPath?: string, nPage?: number): void;
    getIcon(cIcon: string): Icon;
    closeDoc(bNoSave?: boolean): void;
    //#endregion
}