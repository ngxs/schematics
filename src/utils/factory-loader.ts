import { transform } from './transform-options';
import { StarterKitSchema } from '../factories/starter-kit/starter-kit.schema';
import { mergeWith, Rule } from '@angular-devkit/schematics';
import { generate } from './generate-factory';
import { FACTORIES } from './common/factories.enum';

export function factoryLoader<T>(options: T | any, factory: FACTORIES): Rule {
  options = transform<StarterKitSchema>(options);
  return mergeWith(generate({ options, factory }));
}
