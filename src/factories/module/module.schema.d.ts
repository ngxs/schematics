export interface ModuleSchema {
  /**
   * The name of the store.
   */
  name: string;
  /**
   * The module location and name.
   */
  module: any;
  moduleName?: string;
  /**
   * The name of the project
   */
  project?: string;
  /**
   * The path to create the store.
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
  /**
   * The flat dir output flag
   */

  flat?: boolean;
}
