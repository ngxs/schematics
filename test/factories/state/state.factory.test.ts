import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { StateSchema } from '../../../src/factories/state/state.schema';
import { FACTORIES } from '../../../src/utils';

describe('Generate ngxs state', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner('.', path.join(process.cwd(), 'src/collection.json'));
  it('should manage name only', () => {
    const options: StateSchema = {
      name: 'todos'
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.STATE, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/todos/todos.state.ts']);
  });

  it('should manage name with spec', () => {
    const options: StateSchema = {
      name: 'auth',
      spec: true
    };
    const tree: UnitTestTree = runner.runSchematic('state', options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/auth/auth.state.spec.ts', '/src/auth/auth.state.ts']);
  });
});
