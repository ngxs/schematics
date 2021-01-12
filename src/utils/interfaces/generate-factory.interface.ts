import { FACTORIES } from '../common/factories.enum';

export interface SchemaOptions {
  name: string;
  path: string;
  spec: boolean;
  flat: boolean;
}

export interface GenerateFactoryInterface {
  workspace: Partial<any>;
  application: Partial<any>;
  options: Partial<SchemaOptions>;
  factory: FACTORIES;
  isSpec: boolean;
}
