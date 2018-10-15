export interface StateSchema {
    /**
     * The name of the service.
     */
    name: string;
    /**
     * The path to create the service.
     */
    path?: string;
    /**
     * The source root path
     */
    sourceRoot?: string;
    /**
     * The spec flag
     */
    spec?: boolean;
}
