import {
  branchAndMerge,
  chain,
  mergeWith,
  Rule,
  SchematicsException
} from '@angular-devkit/schematics';

import { FACTORIES } from './common/factories.enum';
import { isEmpty } from './common/properties';
import { generate } from './generate-factory';
import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { strings, normalize } from '@angular-devkit/core';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { parseName } from '@schematics/angular/utility/parse-name';
import {
  buildRelativePath,
  findModuleFromOptions
} from '@schematics/angular/utility/find-module';
import { InsertChange } from '@schematics/angular/utility/change';

function addDeclarationToNgModule(options: any): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const modulePath = options.module;

    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString();
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const changes = addImportToModule(
      source,
      modulePath,
      `NgxsModule.${
        options.projectType === 'app' ? 'forRoot([' : 'forFeature(['
      }${strings.classify(`${options.name}StateModule`)}])`,
      '@ngxs/store'
    );
    const changes2 = addImportToModule(
      source,
      modulePath,
      `${strings.classify(`${options.name}StateModule`)}`,
      buildRelativePath(
        modulePath,
        normalize(
          `/${options.path}/` +
            (options.flat ? '' : strings.dasherize(options.name) + '/') +
            `${options.name}.state`
        )
      )
    );

    const recorder = host.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    for (const change of changes2) {
      if (change instanceof InsertChange) {
        change.toAdd.toString().match('import')
          ? recorder.insertLeft(change.pos, change.toAdd)
          : undefined;
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}

function getWorkspace(host) {
  const workspaceConfig = host.read('/angular.json');
  if (!workspaceConfig) {
    throw new SchematicsException('Could not find Angular workspace configuration');
  }

  // convert workspace to string
  const workspaceContent = workspaceConfig.toString();

  // parse workspace string into JSON object
  const workspace: any = JSON.parse(workspaceContent);
  return workspace;
}

export function factoryLoader<T>(options: T | any, factory: FACTORIES): Rule {
  return (tree: Tree) => {
    if (isEmpty(options.name)) {
      throw new SchematicsException('Invalid options, "name" is required.');
    }

    // parse workspace string into JSON object
    const workspace = getWorkspace(tree);

    if (!options.project) {
      options.project = workspace.defaultProject;
    }
    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    options.projectType = project.projectType === 'application' ? 'app' : 'lib';

    options.sourceRoot = project.sourceRoot;
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${options.projectType}`;
    }

    const moduleDasherized =
      options.projectType === 'app' ? options.projectType : strings.dasherize(projectName);

    options.modulePath = `${moduleDasherized}.module.ts`;

    options.module = options.modulePath;

    if (options.module) {
      options.module = findModuleFromOptions(tree, options);
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    return chain([
      addDeclarationToNgModule(options),
      branchAndMerge(mergeWith(generate({ options, factory })))
    ]);
  };
}
