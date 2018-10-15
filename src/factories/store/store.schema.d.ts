import { Path } from '@angular-devkit/core';

export interface StoreSchema {
    /**
     * The name of the service.
     */
    name: string;
    /**
     * The path to create the service.
     */
    path?: string;
    /**
     * The path to insert the service declaration.
     */
    module?: Path;
    /**
     * The source root path
     */
    sourceRoot?: string;
    /**
     * The spec flag
     */
    spec?: boolean;
}
