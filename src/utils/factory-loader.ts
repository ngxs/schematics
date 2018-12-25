import { mergeWith, Rule, SchematicsException } from '@angular-devkit/schematics';

import { FACTORIES } from './common/factories.enum';
import { StarterKitSchema } from '../factories/starter-kit/starter-kit.schema';

import { transform } from './transform-options';
import { generate } from './generate-factory';

export function factoryLoader<T>(options: T | any, factory: FACTORIES): Rule {
  if (typeof options.name !== 'undefined' && !options.name.trim().length) {
    throw new SchematicsException('Invalid options, "name" is required.');
  }

  options = transform<StarterKitSchema>(options);
  return mergeWith(generate({ options, factory }));
}
