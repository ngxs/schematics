import { Rule } from '@angular-devkit/schematics';

import { FACTORIES } from '../../utils';
import { factoryLoader } from '../../utils/factory-loader';

import { ActionsSchema } from './actions.schema';

export function actions(options: ActionsSchema): Rule {
  return factoryLoader<ActionsSchema>(options, FACTORIES.ACTIONS);
}
