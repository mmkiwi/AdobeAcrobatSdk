import { app } from "./globals/app";
import { console } from "./globals/console";
import { catalog } from "./globals/catalog";
import { Collab } from "./globals/Collab";
import { color } from "./globals/color";
declare global {
    /** @description A static JavaScript object that represents the Acrobat application. It defines a number of
     * Acrobat-specific functions plus a variety of utility routines and convenience functions. */
    const app: app;
    const console: console;
    const catalog: catalog;
    const color: color;
    const Collab: Collab;
    interface Function {
        toExcString: () => string;
    }
}

export { };