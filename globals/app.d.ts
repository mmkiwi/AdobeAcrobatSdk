/* eslint-disable no-unused-vars */
import { Color } from "./Color";
import { Dialog } from "./Dialog";
import { Doc } from "./Doc";
import { FullScreen } from "./FullScreen";
import { Monitor } from "./Monitor";
import { Monitors } from "./Monitors";
import { PlugIn } from "./PlugIn";
import { Thermometer } from "./Thermometer";
import { TreeItem } from "./TreeItem";
import { IconStream } from "./IconStream";
/* eslint-enable no-unused-vars */

declare interface app {
    //#region Properties
    /**
     * @description An array containing the Doc object for each active document. If no documents are active, activeDocs
     * returns nothing; that is, it has the same behavior as d = new Array(0) in core JavaScript.
     * 
     * In versions of Acrobat earlier than 7.0, executing the script d = app.activeDocs in the console returned [object
     * Global] to the console. Beginning with Acrobat 7.0, no toString() value is output to the console.
     * 
     * **Note:** You should be aware of the following version-related information:
     *    * In Acrobat 5.0, this property returns an array containing the Doc object for each active document.
     *    * In Acrobat 5.0.5, this property was changed to return an array of Doc objects of only those open documents
     *      that have the Doc object disclosed property set to true.
     *    * Beginning with the Acrobat 5.0.5 Accessibility and Forms Patch and continuing with Acrobat 6.0 and later,
     *      the behavior is as follows: During a batch, console or menu event, activeDocs ignores the disclosed property
     *      and returns an array of Doc objects of the active documents. During any other event, activeDocs returns an
     *      array of Doc objects of only those active documents that have disclosed set to true.
     *    * Beginning with Acrobat 7.0, execution of JavaScript through a menu event is no longer privileged. See
     *      Privileged versus non-privileged context for details.
     * The array returned by app.activeDocs includes any documents opened by app.openDoc with the bHidden parameter set
     * to true, subject to the security restrictions described above.
     * @example 
     * // This example searches among the open documents for the document with a
     * // title of myDoc, then inserts a button in that document using the Doc
     * // object addField method. Whether the documents must be disclosed
     * // depends on the version of Acrobat executing this code and on the
     * // placement of the code (for example, console versus mouse-up action).
     *    var d = app.activeDocs;
     *    for (var i=0; i < d.length; i++)
     *    if (d[i].info.Title == "myDoc") {
     *       var f = d[i].addField("myButton", "button", 0 , [20, 100, 100, 20]);
     *       f.setAction("MouseUp","app.beep(0)");
     *       f.fillColor=color.gray;
     *    }
     */
    readonly activeDocs: string[];

    /**
     * @description If true (the default value), calculations can be performed. If false, calculations are not permitted.
     * 
     * The use of this property is discouraged; the Doc object property calculate is preferred.
     */
    calculate: boolean;

    /**
     * @description A wrapper object for holding various constant values. Currently, this property returns an object
     * with a single property, align. 
     * @example See the Doc object methods addWatermarkFromFile and addWatermarkFromText for examples. 
     */
    readonly constants: {
        align: string;
    }

    /**
     * @description Turns the focus rectangle on and off. The focus rectangle is the faint dotted line around buttons,
     * check boxes, radio buttons, and signatures to indicate that the form field has the keyboard focus. A value of
     * true turns on the focus rectangle.
     */
    focusRect: boolean;


    /**
     * @description The version number of the viewer forms software. Check this property to determine whether objects,
     * properties, or methods in newer versions of the software are available if you want to maintain backward
     * compatibility in your scripts. 
     */
    readonly formsVersion: number;

    /**
     * @description An array of file type conversion ID strings. A conversion ID string can be passed to the Doc object
     * saveAs method. 
     * @example 
     * // List all currently supported conversion ID strings.
     * for ( var i = 0; i < app.fromPDFConverters.length; i++)
     *   console.println(app.fromPDFConverters[i]);
     */
    readonly fromPDFConverters: string[];

    /** 
     * @description A FullScreen object, which can be used to access the fullscreen properties.
     */
    readonly fs: FullScreen;

    /**
     * @description The use of this property is discouraged; it has been superseded by the FullScreen object property
     * isFullScreen. The fs method returns a FullScreen object that can be used to access the fullscreen properties.
     * 
     * Controls whether the viewer is in full screen mode or regular viewing mode.
     * 
     * **Note:** A PDF document being viewed from within a web browser cannot be put into full screen mode. Full screen
     * mode can be initiated from within the browser, but applies only to a document open in the Acrobat viewer
     * application, if any, not to the browser itself.
     */
    fullscreen: boolean;

    /** 
     * @description The language of the running Acrobat viewer. It can be one of the following strings.
     * 
     * | String | Language             |
     * |--------|----------------------|
     * | CHS    | Chinese Simplified   |
     * | CHT    | Chinese Traditional  |
     * | DAN    | Danish               |
     * | DEU    | German               |
     * | ENU    | English              |
     * | ESP    | Spanish              |
     * | FRA    | French               |
     * | ITA    | Italian              |
     * | KOR    | Korean               |
     * | JPN    | Japanese             |
     * | NLD    | Dutch                |
     * | NOR    | Norwegian            |
     * | PTB    | Brazilian Portuguese |
     * | SUO    | Finnish              |
     * | SVE    | Swedish              |
     */
    readonly language: string;

    /** @description A Monitors object, which is an array containing one or more Monitor objects representing each of
     * the display monitors connected to the user’s system. Each access to app.monitors returns a new, up-to-date copy
     * of this array.
     * 
     * A Monitors object also has several methods that can be used to select a display monitor. Alternatively,
     * JavaScript code can look through the array explicitly.
     */
    readonly monitors: Monitors;

    /**
     * @description **Note:** This method has been superseded by the plugIns property.
     * 
     * Indicates the number of plug-ins that have been loaded by Acrobat. 
     */
    readonly numPlugins: number;

    /**
     * Specifies whether cross-document links are opened in the same window or opened in a new window.
     */
    openInPlace: boolean;

    /**
     * @description The platform that the script is currently executing on. There are three valid values:
     *    * WIN
     *    * MAC
     *    * UNIX
     */
    readonly platform: string;

    /**
     * @description An array of PlugIn objects representing the plug-ins that are currently installed in the viewer. 
     */
    readonly plugins: PlugIn[];

    /**
     * A list of available printer color spaces. Each of these values is suitable to use as the value of the
     * colorProfile property of a PrintParams object. 
     */
    readonly printColorProfiles: string[];

    /**
     * A list of available printers. Each of these values is suitable to use in the printerName property of the
     * PrintParams object. If no printers are installed on the system, an empty array is returned.
     */
    readonly printerNames: string[];

    /** 
     * @description If true, the background color and hover color for form fields are shown. 
     */
    runtimeHighlight: boolean;

    /**
     * @description Sets the color for runtime highlighting of form fields.
     * 
     * The value of this property is a color array. (See Color arrays for details.)
     */
    runtimeHighlightColor: Color;

    /**
     * @description A Thermometer object, which is a combined status window/progress bar that indicates to the user that
     * a lengthy operation is in progress.
     */
    readonly thermometer: Thermometer;

    /**
     * Allows a script to show or hide both the horizontal and vertical Acrobat toolbars of Acrobat 9 or earlier. In
     * Acrobat X, allows a script to show or hide the Plugin Addon Tools panel on the right side of the display area.
     * It does not hide the toolbar (Acrobat 9 or earlier) or the tools panel (Acrobat X), in external windows (that is,
     * in an Acrobat window within a web browser).
     */
    toolbar: boolean;

    /**
     * @deprecated
     * @description
     * Allows a script to show or hide the Acrobat horizontal toolbar. It does not hide the toolbar in external windows
     * (that is, in an Acrobat window within a web browser).
     * 
     * **Note:** This property has been deprecated in Acrobat 5.0 and later. If accessed, it acts like toolbar.
     */
    toolbarHorizontal: boolean;

    /**
     * @deprecated
     * @description
     * Allows a script to show or hide the Acrobat vertical toolbar. It does not hide the toolbar in external windows
     * (that is, in an Acrobat window within a web browser).
     * 
     * **Note:** This property has been deprecated in Acrobat 5.0 and later. If accessed, it acts like toolbar.
     */
    toolbarVertical: boolean;

    /**
     * A string that indicates which viewer application is running. It can be one of these values.
     * 
     * | Value        | Description                                                                    |
     * |--------------|--------------------------------------------------------------------------------|
     * | Reader       | Acrobat Reader version 5.0 or earlier / Adobe Reader version 5.1 or later      |
     * | Exchange     | Adobe Acrobat earlier than version 6.0 / Acrobat Standard version 6.0 or later |
     * | Exchange-Pro | Acrobat Pro version 6.0 or later                                               |
     */
    readonly viewerType: string;

    /**
     * @description
     * Indicates the packaging of the running viewer application. It can be one of these values:
     *    * Reader
     *    * Fill-In
     *    * Business Tools
     *    * Full 
     */
    readonly viewerVariation: string

    /**
     * Indicates the version number of the current viewer application. 
     */
    readonly viewerVersion: number;
    //#endregion

    //#region methods
    /**
     * @description
     * Adds a menu item to a menu.
     * 
     * **Note:** Starting Acrobat X, the number of top-level menu items has been reduced. The menu items available from
     * Acrobat X onwards are: File, Edit, View, Window, and Help. If any of your previous scripts referred to a
     * top-level menu item that no longer exists, the reference will not work.
     * 
     * **Note:** This method can only be executed during application initialization or console events. See the event
     * object for a discussion of JavaScript events.
     * 
     * See also addSubMenu, execMenuItem, hideMenuItem, and listMenuItems methods. 
     * 
     * @param params JSON object with parameters
     * 
     */
    addMenuItem(params: {
        /** @description The language-independent name of the menu item. This name can be used by other methods (for 
         * example, hideMenuItem) to access the menu item. */
        cName: string,

        /** @description The user string (language-dependent name) to display as the menu item name. If cUser is not
         * specified, cName is used. */
        cUser?: string,

        /** @description The name of the parent menu item. Its submenu will have the new menu item added to it. If
         * cParent has no submenu, an exception is thrown.
         * 
         * Menu item names can be obtained with the listMenuItems method. */
        cParent: string,

        /** @description The position within the submenu to locate the new menu item. The default behavior is to append
         * to the end of the submenu. Specifying nPos as 0 adds the menu to the top of the submenu. Beginning with
         * Acrobat 6.0, the value of nPos can also be the language-independent name of a menu item.
         * 
         * (Acrobat 6.0) If the value nPos is a string, this string is interpreted as a named item in the menu
         * (a language-independent name of a menu item). The named item determines the position at which the new menu
         * item is to be inserted. See bPrepend for additional details.
         * 
         * The nPos parameter is ignored in certain menus that are alphabetized. The alphabetized menus are
         * 
         *   * The first section of View > Navigation Panels.
         *   * The first section of View > Toolbars.
         * 
         * **Note:** When nPos is a number, nPos is not obeyed in the Tools menu. A menu item introduced into the Tools
         * menu comes in at the top of the menu. nPos is obeyed when it is a string referencing another user-defined
         * menu item.*/
        nPos?: number,

        /** @description An expression string to evaluate when the menu item is selected by the user.
         * **Note:** Beginning with Acrobat 7.0, execution of JavaScript through a menu event is no longer privileged.
         * See Privileged versus non-privileged context for details. */
        cExec: string,

        /** @description An expression string that is evaluated to determine whether to enable the menu item. The
         * default is that the menu item is always enabled. This expression should set event.rc to false to disable the
         * menu item.  */
        cEnable?: string,

        /** @description An expression string that determines whether the menu item has a check mark next to it. The
         * expression should set event.rc to false to uncheck the menu item and true to check it. The default is that
         * the menu item is not marked. */
        cMarked?: string,

        /** @description Determines the position of the new menu item relative to the position specified by nPos. The
         *  default value is false. If bPrepend is true, the rules for insertion are as follows:

         *  * If nPos is a string, the new item is placed before the named item.
         *  * If nPos is a number, the new item is placed before the numbered item.
         *  * If the named item cannot be found or nPos is not between zero and the number of items in the list,
         *    inclusive, the new item is inserted as the first item in the menu (rather than at the end of the menu).
         * 
         * bPrepend is useful when the named item is the first item in a group. */
        bPrepend?: boolean
    }): void,

    /**
     * @description Adds a menu item with a submenu to the application.
     * 
     * See also the addMenuItem, execMenuItem, hideMenuItem, and listMenuItems methods.
     * 
     * **Note:** Starting Acrobat X, the number of top-level menu items has been reduced. The menu items available from
     *           Acrobat X onwards are: File, Edit, View, Window, and Help. If any of your previous scripts referred to
     *           a top-level menu item that no longer exists, the reference will not work.
     * **Note:** This method can only be executed during application initialization or console events. See the event
     *           object for a discussion of JavaScript events.
     * @param params JSON object with parameters
     */
    addSubMenu(params: {
        /** @description The language-independent name of the menu item. This
         * language-independent name is used to access the menu item (for example, for hideMenuItem). */
        cName: string,

        /** @description The user string (language-dependent name) to display as the menu item name. If cUser is not
         * specified, cName is used. */
        cUser: string,

        /** @description The name of the parent menu item to receive the new submenu.
         * 
         * Menu item names can be discovered with listMenuItems.  */
        cParent: string,

        /** @description (optional) The position within the parent’s submenu to
         * locate the new submenu. The default is to append to the end of the
         * parent’s submenu. Specifying nPos as 0 adds the submenu to the top of
         * the parent’s submenu.
         * 
         * The nPos parameter is ignored in certain menus that are alphabetized.
         * The alphabetized menus are
         * 
         *    * The first section of View > Navigational Panels.
         *    * The first section of View > Toolbars.
         * 
         * **Note:** When nPos is a number, nPos is not obeyed in the Tools
         * menu. A menu item introduced into the Tools menu comes in at the top
         * of the menu. nPos is obeyed when nPos is a string referencing another
         * user-defined menu item. */
        nPos?: number
    }): void,

    /**
     * @description Adds a button to the “Add-on” toolbar of Acrobat 9 or earlier. In Acrobat X, adds a button to the 
     * Plugin Addon Tools panel on the right side of the display area.
     * 
     * If there is an active document (for example, docA.pdf) open in Acrobat when this method is called to add a
     * button, Acrobat will remove the button when docA.pdf is either no longer active or is closed. In the former case,
     * the button will be automatically added to the toolbar if docA.pdf becomes the active document again.
     * 
     * The icon size is restricted to 20 by 20 pixels. If an icon of larger dimensions is used, an exception is thrown.
     * 
     * **Note:** (Acrobat 7.0) A number of changes have been made with regard to the secure use of this method.
     * Execution of addToolButton in the console and application initialization is considered privileged execution and
     * is trusted.
     * 
     * If this method is called from nonprivileged script, the warning “JavaScript Window” appears on the “Add-on”
     * toolbar, which will not be dockable. (See Privileged versus non-privileged context.)
     * 
     * See also removeToolButton.
     * 
     * @param params JSON object with parameters
     */
    addToolButton(params: {
        /** @description A unique language-independent identifier for the button. The language-independent name is used
         * to access the button for other methods (for example, removeToolButton).
         * 
         * **Note:** The value of cName must be unique. To avoid a name conflict, check listToolbarButtons, which lists
         * all toolbar button names currently installed. */
        cName: string,

        /** @description An Icon Stream object.
         * Beginning with Acrobat 7.0, this parameter is optional if a cLabel is provided. */
        oIcon?: IconStream,

        /** @description The expression string to evaluate when the button is selected. */
        cExec: string,

        /** @description An expression string that determines whether to enable the toolbutton. The default is that the
         * button is always enabled. This expression should set event.rc to false to disable the button. */
        cEnable?: (string | boolean),

        /** @description An expression string that determines whether the toolbutton is marked. The default is that the
         * button is not marked. This expression should set event.rc to true to mark the button. */
        cMarked?: string,

        /** @description The text to display in the button help text when the mouse is over the toolbutton. The default
         * is not to have a tool tip.
         * 
         * **Note:** Avoid the use of extended characters in the cTooltext string as the string may be truncated. */
        cTooltext?: string,

        /** @description The button number to place the added button before in the toolbar. If nPos is -1 (the default),
         * the button is appended to the toolbar. */
        nPos?: number,

        /** @description A text label to be displayed on the button to the right of the icon. The default is not to have
         * a label. */
        cLabel?: string,
    }): void,

    /** @description Displays an alert dialog box.
     * 
     * **Note:** If this method is called on a button click event using LiveCycle Designer 7 or 8, it appends the title
     * "Warning: JavaScript Window - " in Acrobat 8. */
    alert(params: {
        /** @description A string containing the message to be displayed.  */
        cMsg: string,

        /** @description An icon type. Possible values are these:
         * 
         *    * 0 — Error (default)
         *    * 1 — Warning
         *    * 2 — Question
         *    * 3 — Status
         * 
         * **Note:** In Mac OS, there is no distinction between warnings and questions.  */
        nIcon?: number,
    }): void,

    /** @description Displays an alert dialog box.
     * 
     * **Note:** If this method is called on a button click event using LiveCycle Designer 7 or 8, it appends the title
     * "Warning: JavaScript Window - " in Acrobat 8. 
     *     
     * @param cMsg A string containing the message to be displayed.
     * @param nIcon An icon type. Possible values are these:
         * 
         *    * 0 — Error (default)
         *    * 1 — Warning
         *    * 2 — Question
         *    * 3 — Status
         * 
         * **Note:** In Mac OS, there is no distinction between warnings and questions.
     */
    alert(cMsg: string, nIcon?: number, ): void,

    /** @description Causes the system to play a sound.
     * 
     * **Note:** On Mac OS and UNIX systems the beep type is ignored.
     * @param nType The sound type. Values are associated with sounds as follows:
     * 
     *   * 0 — Error
     *   * 1 — Warning
     *   * 2 — Question
     *   * 3 — Status
     *   * 4 — Default (default value) */
    beep(nType: number): void,

    /** @description Raises the execution privilege of the current stack frame such that methods marked secure can
     * execute without security exceptions. For the method to succeed, there must be a frame on the stack representing
     * the execution of a trusted function, and all frames (including the frame making the call) between the currently
     * executing frame and that frame must represent the execution of trust propagator functions.
     * 
     * Use app.endPriv to revoke privilege. The app.trustedFunction method can create a trusted function, and
     * app.trustPropagatorFunction can create a trust propagator function. The term stack frame is discussed following
     * the description of app.trustedFunction.
     */
    beginPriv(): void,

    /** @description Presents a file system browser and returns an object containing information concerning the user’s
     * response.
     * 
     * **Note:** This method can only be executed during a batch or console event. See the event object for a
     * discussion of JavaScript events. See Privileged versus non-privileged context for details.
     * 
     * @param params JSON object with parameters
     * @returns If the user cancels, the return value is undefined. On error, throws an exception.
     */
    browseForDoc(params?: {
        /** @description A Boolean value that, if true, specifies that the file system browser should be presented as
         * it would be for a save operation. The default is false. */
        bSave?: boolean,
        /** @description A string that specifies the default file name for the file system browser to be populated 
         * with. */
        cFilenameInit?: string,
        /** @description A string that specifies the file system that the file system browser operates on initially. 
         * Two values are supported: "" (the empty string) representing the default file system and “CHTTP”. The
         * default is the default file system. This parameter is only relevant if the web server supports WebDAV. */
        cFSInit?: string
    }): {
        /** @description A string containing the resulting file system name for the chosen file. */
        cFS: string,
        /** @description A string containing the resulting path for the chosen file. */
        cPath: string,
        /** @description A string containing the resulting URL for the chosen file */
        cURL: string
    },

    /** 
     * @description Cancels a previously registered interval initially set by the setInterval method.
     * @param  oInterval The registered interval to cancel.
     */
    clearInterval(oInterval: string): void,

    /**
     * @description Cancels a previously registered time-out interval. Such an interval is initially set by setTimeOut.
     * @param oTime The previously registered time-out interval to cancel.
     */
    clearTimeOut(oTime: string): void,

    /** @description Revokes any privilege bestowed upon the current stack frame by app.beginPriv. Does not revoke
     * privilege bestowed by the current event.
     * 
     * Related methods are app.trustedFunction, app.trustPropagatorFunction and app.beginPriv. */
    endPriv(): void,

    /** @description Presents a modal dialog box to the user. Modal dialog boxes must be closed by the user before the 
     * host application can be directly used again.
     * 
     * The monitor parameter specifies a dialog descriptor, which is a generic object literal that consists of a set of
     * handler functions for various events and a set of properties that describe the contents of the dialog box.
     * 
     * Dialog box items are identified by an ItemID, which is a unique 4-character string. An ItemID is necessary only
     * if the element must be referred to elsewhere in the dialog box description (for example, to set or get a value
     * for the element, to add a handler for the element, or to set a tab order including the element).
     * 
     * **Note:** To distinguish Acrobat dialog boxes from those created by JavaScript, dialog boxes that are added at
     * the document level have a title of “JavaScript Dialog” and display the text “Warning: JavaScript Dialog” at the
     * bottom.
     * @returns A string, which is the ItemID of the element that caused the dialog box to be dismissed. The return 
     * value is “ok” or “cancel” if the dismissing element is the ok or cancel button. */
    execDialog(params: {
        /** @description An object literal. It consists of several handlers (see Dialog box handlers) and a description
         * property that describes the dialog box elements (see description property). 
         */
        monitor: Dialog,

        /** @description A Dialog object that should be reused when displaying this dialog box. It is useful when 
         * displaying a series of dialog boxes (such as a wizard) to prevent one from disappearing before the new one 
         * is displayed. The default is not to reuse a dialog box. */
        inheritDialog?: Dialog,

        /** @description A Doc object to use as the parent for this dialog box. The default parent is the Acrobat 
         * application. */
        parentDoc?: Doc
    }): string


    /**
     *  @description Executes the specified menu item.
     *
     *  Beginning with Acrobat 5.0, app.execMenuItem("SaveAs") can be called, subject to the restrictions described
     *  below. Executing the Save As menu item saves the current file to the user’s hard drive after presenting a dialog
     *  box asking the user to select a folder and file name. The file is saved as a linearized file if “Save As
     *  optimizes for Fast Web View” is checked in the Documents preferences.
     *
     *  ## Note:
     *
     *  *(Acrobat 7.0)* In previous versions of Acrobat, the following code could only be executed during a batch,
     *  console or menu event. `app.execMenuItem("SaveAs");`
     *
     *  Acrobat 7.0 removes this restriction, so that app.execMenuItem("SaveAs") can be executed during a mouse-up
     *  event, for example.
     *
     *  If the user preferences are set to “Save As Optimizes for Fast Web View”, a form object will not survive a Save
     *  As operation. Field objects are no longer valid, and an exception may be thrown when trying to access a Field
     *  object immediately after saving. See the examples that follow.
     *
     *  For security reasons, scripts are not allowed to execute the Quit menu item. Beginning with Acrobat 6.0, scripts
     *  are not allowed to execute the Paste menu item.
     *
     *  *(Acrobat 8.0)* The execution of menu items through execMenuItem method is restricted to a short list of safe
     *  menus. The execMenuItem method will silently fail if a named menu item is executed that is not on the safe menu
     *  list. Menu items may be removed in future releases, or their behavior may change.
     *
     *  To see the list of safe menus, create a form button, and in the Button Properties dialog box, select the Actions
     *  tab. From the Select Action list, select “Execute a menu item”. Finally, click the Add button to see the Menu
     *  Item dialog box with the list of safe menus.
     *
     *  The app.execMenuItem method may be executed, without restriction, in a privileged context, such as in the
     *  console or in a batch sequence. For folder JavaScript, app.execMenuItem can be executed, again, without
     *  restriction, through a trusted function with raised privilege. See Example 4, below.
     *
     *  Another approach to executing app.execMenuItem without restriction is through Sign & Certify. When the document
     *  author signs and certifies the document, privileged methods can be executed from a non-privileged context
     *  provided the document consumer lists the author’s certificate in the list of trusted identities and the consumer
     *  trusts the author for execution of embedded high privilege JavaScript.
     *
     *  To ensure a secure environment, the menu items that can be executed are limited to the following:
     *
     *      * AcroSendMail:SendMail
     *      * HandMenuItem
     *      * ShowHideToolbarBasicTools
     *      * ActualSize
     *      * HelpReader
     *      * ShowHideToolbarCommenting
     *      * AddFileAttachment
     *      * InsertPages
     *      * ShowHideToolbarData
     *      * Annots:Tool:InkMenuItem
     *      * LastPage
     *      * ShowHideToolbarEdit
     *      * BookmarkShowLocation
     *      * NextPage
     *      * ShowHideToolbarEditing
     *      * Close
     *      * OneColumn
     *      * ShowHideToolbarFile
     *      * CropPages
     *      * OpenOrganizer
     *      * ShowHideToolbarFind
     *      * DeletePages
     *      * PageSetup
     *      * ShowHideToolbarForms
     *      * DocHelpUserGuide
     *      * PrevPage
     *      * ShowHideToolbarMeasuring
     *      * ExtractPages
     *      * Print
     *      * ShowHideToolbarNavigation
     *      * Find
     *      * PropertyToolbar
     *      * ShowHideToolbarPageDisplay
     *      * FindCurrentBookmark
     *      * Quit
     *      * ShowHideToolbarPrintProduction
     *      * FindSearch
     *      * ReplacePages
     *      * ShowHideToolbarRedaction
     *      * FirstPage
     *      * RotatePages
     *      * ShowHideToolbarTasks
     *      * FitHeight
     *      * SaveAs
     *      * ShowHideToolbarTypewriter
     *      * FitPage
     *      * Scan
     *      * SinglePage
     *      * FitVisible
     *      * ShowHideAnnotManager
     *      * Spelling
     *      * FitWidth
     *      * ShowHideArticles
     *      * Spelling:Check
     *      * FullScreen
     *      * ShowHideBookmarks
     *      * TwoColumns
     *      * GeneralInfo (Properties)
     *      * ShowHideFields
     *      * TwoPages
     *      * GeneralPrefs
     *      * ShowHideFileAttachment
     *      * Web2PDF:OpenURL
     *      * GoBack
     *      * ShowHideModelTree
     *      * ZoomDragMenuItem
     *      * GoBackDoc
     *      * ShowHideOptCont
     *      * ZoomTo
     *      * GoForward
     *      * ShowHideSignatures
     *      * ZoomViewIn
     *      * GoForwardDoc
     *      * ShowHideThumbnails
     *      * ZoomViewOut
     *      * GoToPage
     *
     *  This list applies only to document-level access to menu items. It does not apply to application-level JavaScript
     *  or JavaScript from a privileged context.
     *
     *  The list is written to the Acrobat registry and can be edited if you determine that the list must be expanded.
     *  If you need to modify the list, you can edit the related registry entries:
     *
     *      * The key for the default list is HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe
     *        Acrobat\9.0\FeatureLockDown\cDefaultExecMenuItems.
     *      * The key for the list used by Tuner is
     *        HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe Acrobat\9.0\FeatureLockDown\cAdminExecMenuItems.
     *
     *  For both keys, the value name is tWhiteList and the type is REG_SZ. The value data contains all menu item names
     *  and each menu item name is separated with the "|" delimiter.
     *
     * @param params  JSON object with parameters
     */
    execMenuItem(params: {
        /** @description The menu item to execute.
         *
         * A list of menu item names can be obtained with listMenuItems.*/
        cMenuItem: string,
        /** @description oDoc is the Doc object of a document that is not hidden (see the Doc object hidden property).
         * If this parameter is present, execMenuItem executes the menu item in the document’s context. */
        oDoc?: Doc
    }): void,

    /**
     *  @description Executes the specified menu item.
     *
     *  Beginning with Acrobat 5.0, app.execMenuItem("SaveAs") can be called, subject to the restrictions described
     *  below. Executing the Save As menu item saves the current file to the user’s hard drive after presenting a dialog
     *  box asking the user to select a folder and file name. The file is saved as a linearized file if “Save As
     *  optimizes for Fast Web View” is checked in the Documents preferences.
     *
     *  ## Note:
     *
     *  *(Acrobat 7.0)* In previous versions of Acrobat, the following code could only be executed during a batch,
     *  console or menu event. `app.execMenuItem("SaveAs");`
     *
     *  Acrobat 7.0 removes this restriction, so that app.execMenuItem("SaveAs") can be executed during a mouse-up
     *  event, for example.
     *
     *  If the user preferences are set to “Save As Optimizes for Fast Web View”, a form object will not survive a Save
     *  As operation. Field objects are no longer valid, and an exception may be thrown when trying to access a Field
     *  object immediately after saving. See the examples that follow.
     *
     *  For security reasons, scripts are not allowed to execute the Quit menu item. Beginning with Acrobat 6.0, scripts
     *  are not allowed to execute the Paste menu item.
     *
     *  *(Acrobat 8.0)* The execution of menu items through execMenuItem method is restricted to a short list of safe
     *  menus. The execMenuItem method will silently fail if a named menu item is executed that is not on the safe menu
     *  list. Menu items may be removed in future releases, or their behavior may change.
     *
     *  To see the list of safe menus, create a form button, and in the Button Properties dialog box, select the Actions
     *  tab. From the Select Action list, select “Execute a menu item”. Finally, click the Add button to see the Menu
     *  Item dialog box with the list of safe menus.
     *
     *  The app.execMenuItem method may be executed, without restriction, in a privileged context, such as in the
     *  console or in a batch sequence. For folder JavaScript, app.execMenuItem can be executed, again, without
     *  restriction, through a trusted function with raised privilege. See Example 4, below.
     *
     *  Another approach to executing app.execMenuItem without restriction is through Sign & Certify. When the document
     *  author signs and certifies the document, privileged methods can be executed from a non-privileged context
     *  provided the document consumer lists the author’s certificate in the list of trusted identities and the consumer
     *  trusts the author for execution of embedded high privilege JavaScript.
     *
     *  To ensure a secure environment, the menu items that can be executed are limited to the following:
     *
     *      * AcroSendMail:SendMail
     *      * HandMenuItem
     *      * ShowHideToolbarBasicTools
     *      * ActualSize
     *      * HelpReader
     *      * ShowHideToolbarCommenting
     *      * AddFileAttachment
     *      * InsertPages
     *      * ShowHideToolbarData
     *      * Annots:Tool:InkMenuItem
     *      * LastPage
     *      * ShowHideToolbarEdit
     *      * BookmarkShowLocation
     *      * NextPage
     *      * ShowHideToolbarEditing
     *      * Close
     *      * OneColumn
     *      * ShowHideToolbarFile
     *      * CropPages
     *      * OpenOrganizer
     *      * ShowHideToolbarFind
     *      * DeletePages
     *      * PageSetup
     *      * ShowHideToolbarForms
     *      * DocHelpUserGuide
     *      * PrevPage
     *      * ShowHideToolbarMeasuring
     *      * ExtractPages
     *      * Print
     *      * ShowHideToolbarNavigation
     *      * Find
     *      * PropertyToolbar
     *      * ShowHideToolbarPageDisplay
     *      * FindCurrentBookmark
     *      * Quit
     *      * ShowHideToolbarPrintProduction
     *      * FindSearch
     *      * ReplacePages
     *      * ShowHideToolbarRedaction
     *      * FirstPage
     *      * RotatePages
     *      * ShowHideToolbarTasks
     *      * FitHeight
     *      * SaveAs
     *      * ShowHideToolbarTypewriter
     *      * FitPage
     *      * Scan
     *      * SinglePage
     *      * FitVisible
     *      * ShowHideAnnotManager
     *      * Spelling
     *      * FitWidth
     *      * ShowHideArticles
     *      * Spelling:Check
     *      * FullScreen
     *      * ShowHideBookmarks
     *      * TwoColumns
     *      * GeneralInfo (Properties)
     *      * ShowHideFields
     *      * TwoPages
     *      * GeneralPrefs
     *      * ShowHideFileAttachment
     *      * Web2PDF:OpenURL
     *      * GoBack
     *      * ShowHideModelTree
     *      * ZoomDragMenuItem
     *      * GoBackDoc
     *      * ShowHideOptCont
     *      * ZoomTo
     *      * GoForward
     *      * ShowHideSignatures
     *      * ZoomViewIn
     *      * GoForwardDoc
     *      * ShowHideThumbnails
     *      * ZoomViewOut
     *      * GoToPage
     *
     *  This list applies only to document-level access to menu items. It does not apply to application-level JavaScript
     *  or JavaScript from a privileged context.
     *
     *  The list is written to the Acrobat registry and can be edited if you determine that the list must be expanded.
     *  If you need to modify the list, you can edit the related registry entries:
     *
     *      * The key for the default list is HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe
     *        Acrobat\9.0\FeatureLockDown\cDefaultExecMenuItems.
     *      * The key for the list used by Tuner is
     *        HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Adobe\Adobe Acrobat\9.0\FeatureLockDown\cAdminExecMenuItems.
     *
     *  For both keys, the value name is tWhiteList and the type is REG_SZ. The value data contains all menu item names
     *  and each menu item name is separated with the "|" delimiter.
     *
     *  @param cMenuItem The menu item to execute. A list of menu item names can be obtained with listMenuItems
     *  @param oDoc oDoc is the Doc object of a document that is not hidden (see the Doc object hidden property). If
     *  this parameter is present, execMenuItem executes the menu item in the document’s context.
     *
     *  @example 
     *  //This example executes the File > Open menu item. It displays a dialog box asking for the file to be opened.
     *  app.execMenuItem("Open");
     *
     *  @example
     *  //This example illustrates how a form object does not survive the execution of app.execMenuItem("SaveAs"), as
     *  //noted above.
     *  var f = this.getField("myField");
     *  // Assume preferences set to save linearized
     *  app.execMenuItem("SaveAs");
     *  // Exception thrown, field not updated
     *  f.value = 3;
     */
    execMenuItem(cMenuItem: string, oDoc?: Doc): void,

    /**
     * @deprecated
     * @description Obtains the name of the nth plug-in that has been loaded by the viewer.
     * 
     * **Note:** This method has been superseded by the plugIns property.
     *
     * @param nIndex The nth plug-in loaded by the viewer.
     * @returns cName, the plug-in name that corresponds to nIndex.
     */
    getNthPlugInName(nIndex: number): string,

    /**
     * @description 
     * Returns the path to folders created during installation. A distinction is made between application folders and
     * user folders. The method throws a GeneralError exception (see Error object) if the path does not exist.
     *
     * **Note:** *(Acrobat 7.0)* This method can only be executed during a batch or console event (see the event
     * object). See also Privileged versus non-privileged context.
     * @param cCategory The category of folder sought. Valid values are app (the default) and user.
     * @param cFolder  A platform-independent string that indicates the folder. Valid values are
     * 
     *   * root
     *   * eBooks
     *   * preferences
     *   * sequences
     *   * documents
     *   * javascript
     *   * stamps
     *   * dictionaries
     *   * plugIns
     *   * spPlugIns
     *   * help
     *   * temp
     *   * messages
     *   * resource
     *   * update 
     * 
     * The default is root.
     */
    getPath(cCategory?: string, cFolder?: string): string,

    /**
     * @description 
     * Returns the path to folders created during installation. A distinction is made between application folders and
     * user folders. The method throws a GeneralError exception (see Error object) if the path does not exist.
     *
     * **Note:** *(Acrobat 7.0)* This method can only be executed during a batch or console event (see the event
     * object). See also Privileged versus non-privileged context.
     * @param params JSON object with parameters
     */
    getPath(params: {
        /** @description The category of folder sought. Valid values are app (the default) and user. */
        cCategory?: string,

        /** @description A platform-independent string that indicates the folder. Valid values are
         *
         *   * root
         *   * eBooks
         *   * preferences
         *   * sequences
         *   * documents
         *   * javascript
         *   * stamps
         *   * dictionaries
         *   * plugIns
         *   * spPlugIns
         *   * help
         *   * temp
         *   * messages
         *   * resource
         *   * update 
         *
         *   The default is root. */
        cFolder?: string
    }): string,

    /** @description Goes to the previous view on the view stack, which is equivalent to clicking the Previous View
     * button on the Acrobat toolbar. 
     *
     * @example 
     * // Create a go-back button. This code could be part of a batch sequence, for example, to place navigation buttons
     * // on the selected PDF documents.
     * var aRect = this.getPageBox();
     * var width = aRect[2] - aRect[0];
     * // The rectangle is 12 points high and 18 points wide, centered at bottom
     * rect = [width/2-8, 10, width/2+8, 22];
     * f = this.addField("goBack", "button", 0, rect);
     * f.textFont="Wingdings";
     * f.textSize=0;
     * f.buttonSetCaption("\u00E7");              // Left pointing arrow
     * f.setAction("MouseUp", "app.goBack()");    // Add an action
     */
    goBack(): void,

    /** @description Goes to the next view on the view stack, which is equivalent to clicking the go Next View button on
     * the Acrobat toolbar. See the example following app.goBack.*/
    goForward(): void,

    /**
     * @description Removes a specified menu item.
     *
     * **Note:** This method can only be executed during a console or application initialization event. See the event
     * object for a discussion of JavaScript events.
     *
     * See also addMenuItem, addSubMenu, execMenuItem, and listMenuItems.
     * @param cName The menu item name to remove. Menu item names can be discovered with listMenuItems.
     */
    hideMenuItem(cName: string): void,

    /**
     * @description Removes the specified toolbar button from the “Add-on” toolbar of Acrobat 9 or earlier. In Acrobat
     * X, hides the specified button from the Plugin Addon Tools panel on the right side of the display area. 
     *
     * **Note:** This method can only be executed during a console or application initialization event. See the event
     * object for a discussion of JavaScript events.
     *
     * @param cName The name of the toolbar button to remove. Toolbar item names can be discovered with
     * listToolbarButtons. 
     */
    hideToolbarButton(cName: string): void,

    /**
     * @description Launches a URL in a browser window.
     *
     * **Note:** Beginning with Acrobat 8.1, File and JavaScript URLs can be executed only when operating in a privileged
     * context, such as during a batch or console event. File and JavaScript URLs begin with the scheme names javascript
     * or file. 
     * @param cUrl A string that specifies the URL to launch.
     * @param bNewFrame If true, this method launches the URL in a new window of the browser application. The default is false.
     */
    launchURL(cUrl: string, bNewFrame?: boolean): void,

    /**
     * @description Launches a URL in a browser window.
     *
     * **Note:** Beginning with Acrobat 8.1, File and JavaScript URLs can be executed only when operating in a privileged
     * context, such as during a batch or console event. File and JavaScript URLs begin with the scheme names javascript
     * or file. 
     * @param params JSON object with parameters
     */
    launchURL(params: {
        /** A string that specifies the URL to launch.*/
        cUrl: string,
        /** If true, this method launches the URL in a new window of the browser application. The default is false. */
        bNewFrame?: boolean
    }): void,

    /** @description Beginning with Acrobat 6.0, returns an array of TreeItem objects, which describes a menu hierarchy.
     * 
     * Prior to Acrobat 6.0, this method returned a list of menu item names to the console.
     * 
     * See also addMenuItem, addSubMenu, execMenuItem, and hideMenuItem.
     * @param cName 
     */
    listMenuItems(): ReadonlyArray<TreeItem>,

    /**
     * @description
     * Beginning with Acrobat 6.0, returns an array of treeItem objects that describes a toolbar hierarchy (with flyout
     * toolbars).
     *
     * Prior to Acrobat 6.0, this method displayed a list of toolbar button names in the console.
     *
     * *(Acrobat 8.0)* In the Documents category of the Preferences dialog box, when “Show each document in its own
     * window (requires restart)” item is checked, the document window must be empty in order for listToolbarButtons to
     * return the array of TreeItem objects.
     */
    listToolbarButtons(): ReadonlyArray<TreeItem>,

    /**
     * @description
     * Specifies a cross-domain policy file from a location specified by the url parameter. Acrobat uses policy files as a permission mechanism to permit PDFs to load data from servers other than their own. With the addition of app.loadPolicyFile(), Acrobat can load policy files from arbitrary locations, as shown in the following example:
     * 
     * `app.loadPolicyFile("http://www.example.com/sub/dir/pf.xml");`
     * 
     * This causes Acrobat to retrieve a policy file from the specified URL when a crossdomain policy check is required. Any permissions granted by the policy file at that location will apply to all content at the same level or lower in the virtual directory hierarchy of the server. The following code continues the previous example:
     * 
     * ```this.getURL("http://www.example.com/sub/dir/vars.txt", true) // allowed
     * this.getURL("http://www.example.com/sub/dir/deep/vars2.txt", true) // allowed
     * this.getURL("http://www.example.com/mydir/vars3.txt", true) // not allowed```
     * 
     * Any number of policy files can be loaded using loadPolicyFile(). When considering a request that requires a policy file, Acrobat always waits for the completion of any policy file downloads before denying a request. As a final fallback, if no policy file specified with loadPolicyFile() authorizes a request, Acrobat consults the original default location, /crossdomain.xml.
     * @param url The url of the location of a cross-domain policy file.
     * 
     * The length of url is limited to 1024 bytes . If a larger string is passed an exception is thrown.
     * 
     * **Note:** This method does not take single object argument with properties that contain the arguments as many JavaScript for Acrobat methods do. The argument of this method is a string.
     */
    loadPolicyFile(url: string): void,
    //#endregion
}
