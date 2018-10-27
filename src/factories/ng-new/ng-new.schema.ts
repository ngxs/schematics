export interface NgNewSchema {
    /**
     * The name of the app.
     */
    name: string;
    /**
     * The path of the source directory.
     */
    sourceDir?: string;
    /**
     * The prefix to apply to generated selectors.
     */
    prefix: string;
    /**
     * The file extension to be used for style files.
     */
    style: string;
}