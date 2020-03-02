import { RDN } from "./RDN";
import { Rights } from "./Rights";
import { Usage } from "./Usage";

export interface Certificate {
    //#region properties
    readonly binary: string;
    readonly issuerDN: RDN;
    readonly keyUsage: Array<string>;
    readonly MD5Hash: string;
    readonly privateKeyValidityEnd: Date;
    readonly privateKeyValidityStart: Date;
    readonly SHA1Hash: string;
    readonly serialNumber: string;
    readonly subjectCN: string;
    readonly subjectDN: string;
    readonly ubRights: Rights;
    readonly usage: Usage;
    readonly validityEnd: Date;
    readonly validityStart: Date;
    //#endregion
}