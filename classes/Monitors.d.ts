import {Monitor} from "./Monitor";

export interface Monitors {
    [Symbol.iterator](): Iterator<Monitor>;

    /**
     * @description Returns a copy of the Monitors object, filtered to include the monitor or monitors with the
     * greatest color depth.
     * 
     * If nMinColor is specified, returns an empty Monitors array if the best color depth is less than nMinColor.
     * 
     * @param nMinColor The minimal color depth required for the monitor.
     */
    bestFit(nMinColor?: number): Monitor;
}