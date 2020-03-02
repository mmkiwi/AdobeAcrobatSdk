interface annotAttachment {
    readonly contentStream: ReadStream,
    readonly creationDate: Date,
    readonly MIMEtype: string,
    readonly modDate: Date,
    readonly name: string,
    readonly pathname: string,
    readonly size: number;
}