import { Rule, SchematicsException } from '@angular-devkit/schematics';

import { FACTORIES, isEmpty } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

import { ActionsSchema } from './actions.schema';

export function actions(options: ActionsSchema): Rule {
  if (isEmpty(options.name)) {
    throw new SchematicsException('Invalid options, "name" is required.');
  }

  return factoryLoader<ActionsSchema>(options, FACTORIES.ACTIONS);
}
