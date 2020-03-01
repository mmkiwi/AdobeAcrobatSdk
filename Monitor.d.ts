export interface Monitor {
    /**
     * @description The color depth of the monitor; that is, the number of bits per pixel.
     * 
     * @example 
     * // Get the primary monitor and check its color depth. The
     * // Monitors.primary method is use to select the primary monitor.
     * var monitors = app.monitors.primary();
     * console.println("Color depth of primary monitor is " +
     *                 monitors[0].colorDepth);
     */
    readonly colorDepth: number;
}