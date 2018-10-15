import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import * as fs from 'fs';
import { Tree } from '@angular-devkit/schematics';
import { LIB_CONFIG, LibConfigInterface, NodeDependencyType } from '../../../src/utils/common/lib.config';

describe('ng-add package in package.json', () => {
    const runner: SchematicTestRunner = new SchematicTestRunner('schematics', path.join(process.cwd(), 'src/collection.json'));
    let testTree: UnitTestTree;
    let inputTree: Tree;

    function actual(type: NodeDependencyType): string[] {
        return LIB_CONFIG
            .filter((pkg: LibConfigInterface) => pkg.type === type)
            .reduce((acc, pkg) => ([...acc, pkg.name]), [])
            .sort();
    }


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
        expect(Object.keys(packageJson.devDependencies)).toEqual(actual(NodeDependencyType.Dev));
        expect(Object.keys(packageJson.dependencies)).toEqual(actual(NodeDependencyType.Default));
    });
});
