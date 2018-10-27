import { ApplicationSchema } from "./application.schema";
import { Rule } from "@angular-devkit/schematics";
import { factoryLoader } from "../../../utils/factory-loader";
import { FACTORIES } from "../../../utils";

export function application(options: ApplicationSchema): Rule {
    return factoryLoader<ApplicationSchema>(options, FACTORIES.APPLICATION);
}