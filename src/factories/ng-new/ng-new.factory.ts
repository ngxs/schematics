import { NgNewSchema } from "./ng-new.schema";
import { chain, Rule, schematic, SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask, RepositoryInitializerTask } from "@angular-devkit/schematics/tasks";
import { ApplicationSchema } from "./application/application.schema";

export function ngNew(options: NgNewSchema): Rule {
    return chain([
        createNewApplicationWithNgxs(options),
        initializeTask(options)
    ])
}

function createNewApplicationWithNgxs(options) {
    const applicationOptions: ApplicationSchema = parseToApplicationOptions(options);
    return schematic('application', applicationOptions)
}

function parseToApplicationOptions (options: NgNewSchema): ApplicationSchema {
    return {
        name: options.name,
        prefix: options.prefix,
        sourceDir: options.sourceDir || 'app',
        style: options.style
    };
}

function initializeTask(options: NgNewSchema): Rule {
    return (host: Tree, context: SchematicContext) => {
        const packageTask = context.addTask(new NodePackageInstallTask(options.name));

        const dependencies = [packageTask];
        context.addTask(new RepositoryInitializerTask(options.name, {}), dependencies);
    }
}