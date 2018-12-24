import { Rule, SchematicsException } from '@angular-devkit/schematics';

import { FACTORIES, isEmpty } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

import { StateSchema } from './state.schema';

export function state(options: StateSchema): Rule {
  if (isEmpty(options.name)) {
    throw new SchematicsException('Invalid options, "name" is required.');
  }

  return factoryLoader<StateSchema>(options, FACTORIES.STATE);
}
