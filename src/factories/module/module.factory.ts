import { Rule } from '@angular-devkit/schematics';
import { ModuleSchema } from './module.schema';
import { FACTORIES } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

export function module(options: ModuleSchema): Rule {
  return factoryLoader<ModuleSchema>(options, FACTORIES.MODULE);
}
