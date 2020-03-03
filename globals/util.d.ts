import { Icon } from "../interfaces/Icon";
import { IconStream } from "../interfaces/IconStream";

export interface util {
    //#region methods
    iconStreamFromIcon(oIcon: Icon): IconStream;
    //#endregion
}