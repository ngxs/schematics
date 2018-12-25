import { Rule } from '@angular-devkit/schematics';

import { FACTORIES } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

import { StoreSchema } from './store.schema';

export function store(options: StoreSchema): Rule {
  return factoryLoader<StoreSchema>(options, FACTORIES.STORE);
}
