import { CatalogJob } from "../interfaces/CatalogJob";
import { Index } from "../interfaces/Index";

export interface catalog {
    //#region properties
    readonly isIdle: boolean;
    readonly jobs: Array<CatalogJob>;
    //#endregion
    //#region methods
    getIndex(cDIPath: string): Index;
    remove(oJob: CatalogJob): void;
    //#endregion
}