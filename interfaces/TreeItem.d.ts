export interface TreeItem {
    cName: string;
    oChildren?: ReadonlyArray<TreeItem>
}