export interface colorConvertAction {
    //#region properties
    action: number;
    alias: string;
    colorantName: string;
    convertIntent: number;
    convertProfile: string;
    embed: boolean;
    isProcessColor: boolean;
    matchAttributesAll: number;
    matchAttributesAny: number;
    matchIntent: number;
    matchSpaceTypeAll: number;
    matchSpaceTypeAny: number;
    preserveBlack: boolean;
    useBlackPointCompensation: boolean;

    readonly constants: {
        readonly actions: {
            readonly Preserve: number;
            readonly Convert: number;
            readonly Decalibrate: number;
            readonly DownConvert: number;
        }
        readonly objectFlags: {
            readonly ObjImage: number;
            readonly ObjJPEG: number;
            readonly ObjJPEG200: number;
            readonly ObjLossy: number;
            readonly ObjNonLossy: number;
            readonly ObjShade: number;
            readonly ObjTransparent: number;
            readonly ObjOverprinting: number;
            readonly ObjOverprintMode: number;
        }
        readonly renderingIntents: {
            readonly AbsoluteColorimetric: number;
            readonly RelativeColorimetric: number;
            readonly Saturation: number;
            readonly Perceptual: number;
            readonly Any: number;
            readonly Document: number;
        }

        readonly spaceFlags: {
            readonly DeviceSpace: number;
            readonly CalibratedSpace: number;
            readonly AlternateSpace: number;
            readonly BaseSpace: number;
            readonly IndexedSpace: number;
            readonly SeparationSpace: number;
            readonly DeviceNSpace: number;
            readonly NChannelSpace: number;
            readonly RBGSpace: number;
            readonly CMYKSpace: number;
            readonly GraySpace: number;
            readonly LabSpace: number;
        }
    }
    //#endregion
}