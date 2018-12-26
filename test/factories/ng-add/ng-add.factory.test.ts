import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Tree } from '@angular-devkit/schematics';
import { NodeDependencyType } from '@schematics/angular/utility/dependencies';

import * as path from 'path';
import * as fs from 'fs';

import { depsToAdd } from '../../../src/utils/get-library';

describe('ng-add package in package.json', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    'schematics',
    path.join(process.cwd(), 'src/collection.json')
  );
  let testTree: UnitTestTree;
  let inputTree: Tree;

  beforeEach(() => {
    inputTree = Tree.empty();
    inputTree.create(
      '/package.json',
      fs.readFileSync(path.join(__dirname, './common/package.json'), 'utf8')
    );
  });

  it('should add ngxs store with plugins in package.json', () => {
    testTree = runner.runSchematic('ng-add', {}, inputTree);
    const packageJsonText = testTree.readContent('/package.json');
    const packageJson = JSON.parse(packageJsonText);
    expect(Object.keys(packageJson.dependencies)).toEqual(
      depsToAdd(NodeDependencyType.Default)
    );
    expect(Object.keys(packageJson.devDependencies)).toEqual(
      depsToAdd(NodeDependencyType.Dev)
    );
  });
});
