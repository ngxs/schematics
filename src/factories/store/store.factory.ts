import { Rule, SchematicsException } from '@angular-devkit/schematics';

import { FACTORIES, isEmpty } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

import { StoreSchema } from './store.schema';

export function store(options: StoreSchema): Rule {
  if (isEmpty(options.name)) {
    throw new SchematicsException('Invalid options, "name" is required.');
  }

  return factoryLoader<StoreSchema>(options, FACTORIES.STORE);
}
