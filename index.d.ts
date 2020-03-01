import {app} from "./app";
import {console} from "./console";

declare global {
    /** @description A static JavaScript object that represents the Acrobat application. It defines a number of
     * Acrobat-specific functions plus a variety of utility routines and convenience functions. */
    const app: app;
    const console: console;
    interface Function{
        toExcString: () => string;
    }
}

export {};
