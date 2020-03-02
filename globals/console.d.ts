export interface console {
    //#region methods
    /**
     * @description Prints a string value to the console window with an accompanying carriage return.
     * @param {string} cMessage A string message to print.
     */
    println(cMessage: string) : void;

    /**
     * @description Prints a string value to the console window with an accompanying carriage return.
     * @param params JSON object with parameters
     */
    println(params: {
        /**
         * @description A string message to print.
         * @type {string}
         */
        cMessage: string
    }): void;

    /** @description Shows the console window.
     * @example
     * //Clear and show the console window:
     * console.clear();
     * console.show();
     */
    show(): void;
    //#endregion
}