import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import * as path from 'path';
import { InvalidInputOptions } from "@angular-devkit/schematics/tools/schema-option-transform";


// SchematicTestRunner needs an absolute path to the collection to test.
const collectionPath = path.join(__dirname, '../collection.json');


describe('ngxs-schematic', () => {

    const testRunner = new SchematicTestRunner('ngxs-schematics', collectionPath);
    const workspaceOptions: WorkspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '6.0.0',
    };

    describe('with project', () => {

        const appOptions: ApplicationOptions = {
            name: 'bar',
            inlineStyle: false,
            inlineTemplate: false,
            routing: false,
            style: 'css',
            skipTests: false,
            skipPackageJson: false,
        };

        let appTree: UnitTestTree;
        beforeEach(() => {
            appTree = testRunner.runExternalSchematic(
                '@schematics/angular', 'workspace', workspaceOptions);
            appTree = testRunner.runExternalSchematic(
                '@schematics/angular', 'application', appOptions, appTree);
        });

        it('fails with missing tree', () => {
            expect(() => testRunner.runSchematic('no-store', {
                name: "test"
            }, Tree.empty())).toThrow();
        });

        it('fails with missing params', () => {
            expect(() => testRunner.runSchematic('store', {}, appTree)).toThrowError(InvalidInputOptions,
                'Schematic input does not validate against the Schema: {"spec":true,"flat":false}\n' +
                '    Errors:\n' +
                '\n' +
                '      Data path "" should have required property \'name\'.\', but it threw InvalidInputOptions with message \'Schematic input does not validate against the Schema: {"index"\n' +
                '\n' +
                '    :1}');
        });

        it('works', () => {

            const tree = testRunner.runSchematic('store', { name: 'todos' }, appTree);

            // Listing files
            expect(tree.files.sort()).toEqual([
                "/.editorconfig",
                "/.gitignore",
                "/README.md",
                "/angular.json",
                "/package.json",
                "/projects/bar-e2e/protractor.conf.js",
                "/projects/bar-e2e/tsconfig.e2e.json",
                "/projects/bar-e2e/src/app.e2e-spec.ts",
                "/projects/bar-e2e/src/app.po.ts",
                "/projects/bar/browserslist",
                "/projects/bar/karma.conf.js",
                "/projects/bar/src/app/app.component.css",
                "/projects/bar/src/app/app.component.html",
                "/projects/bar/src/app/app.component.spec.ts",
                "/projects/bar/src/app/app.component.ts",
                "/projects/bar/src/app/app.module.ts",
                "/projects/bar/src/app/todos.state.ts",
                "/projects/bar/src/app/todos.actions.ts",
                "/projects/bar/src/favicon.ico",
                "/projects/bar/src/index.html",
                "/projects/bar/src/main.ts",
                "/projects/bar/src/polyfills.ts",
                "/projects/bar/src/styles.css",
                "/projects/bar/src/test.ts",
                "/projects/bar/src/assets/.gitkeep",
                "/projects/bar/src/environments/environment.prod.ts",
                "/projects/bar/src/environments/environment.ts",
                "/projects/bar/tsconfig.app.json",
                "/projects/bar/tsconfig.spec.json",
                "/projects/bar/tslint.json",
                "/tsconfig.json",
                "/tslint.json"
            ]);
            // -- or --
            expect(tree.files).toContain("/projects/bar/src/app/todos.spec.ts");
            expect(tree.files).toContain("/projects/bar/src/app/todos.state.ts");
            expect(tree.files).toContain("/projects/bar/src/app/todos.actions.ts");
        });
    });

    describe('without project', () => {

        const appOptions: ApplicationOptions = {
            name: 'bar',
            projectRoot: '',
            inlineStyle: false,
            inlineTemplate: false,
            routing: false,
            style: 'css',
            skipTests: false,
            skipPackageJson: false,
        };

        let appTree: UnitTestTree;
        beforeEach(() => {
            appTree = testRunner.runExternalSchematic(
                '@schematics/angular', 'workspace', workspaceOptions);
            appTree = testRunner.runExternalSchematic(
                '@schematics/angular', 'application', appOptions, appTree);
        });

        it('fails with missing tree', () => {
            expect(() => testRunner.runSchematic('store', {}, Tree.empty())).toThrow();
        });

        it('fails with missing params', () => {
            expect(() => testRunner.runSchematic('store', {}, appTree)).toThrow();
        });

        it('works', () => {
            const tree = testRunner.runSchematic('store', {
                name: "todos"
            }, appTree);

            // Listing files
            expect(tree.files).toEqual([
                "/README.md",
                "/angular.json",
                "/package.json",
                "/tsconfig.json",
                "/tslint.json",
                "/.editorconfig",
                "/.gitignore",
                "/src/favicon.ico",
                "/src/index.html",
                "/src/main.ts",
                "/src/polyfills.ts",
                "/src/test.ts",
                "/src/styles.css",
                "/src/browserslist",
                "/src/karma.conf.js",
                "/src/tsconfig.app.json",
                "/src/tsconfig.spec.json",
                "/src/tslint.json",
                "/src/assets/.gitkeep",
                "/src/environments/environment.prod.ts",
                "/src/environments/environment.ts",
                "/src/app/app.module.ts",
                "/src/app/app.component.css",
                "/src/app/app.component.html",
                "/src/app/app.component.spec.ts",
                "/src/app/app.component.ts",
                "/src/app/todos.state.ts",
                "/src/app/todos.actions.ts",
                "/e2e/protractor.conf.js",
                "/e2e/tsconfig.e2e.json",
                "/e2e/src/app.e2e-spec.ts",
                "/e2e/src/app.po.ts"
            ]);
            // -- or --
            expect(tree.files.indexOf("/src/app/todos.spec.ts")).toBeGreaterThanOrEqual(0);
            expect(tree.files.indexOf("/src/app/todos.state.ts")).toBeGreaterThanOrEqual(0);
            expect(tree.files.indexOf("/src/app/todos.actions.ts")).toBeGreaterThanOrEqual(0);
        });

    });
});
