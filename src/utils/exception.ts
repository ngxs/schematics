import { SchematicsException } from '@angular-devkit/schematics';

export function factoryException<T>(options: T | any) {
    if (!options.name) {
        throw new SchematicsException(`[WARN!] --name option is required.`);
    }
}
