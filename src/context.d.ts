import { IContext, ExternalAPI, IGroup, ITest, IRunOptions } from "./interfaces";
import { IResult } from "./result";
declare class TContext implements IContext {
    readonly name: string;
    readonly rootGroup: IGroup;
    currentGroup: IGroup;
    currentTest: ITest;
    private _name;
    private _rootGroup;
    private definitionsWereExecuted;
    private isDefining;
    private isExecuting;
    private isFinished;
    private definitionErrors;
    private errors;
    readonly isDefinitionsOk: boolean;
    constructor(name: string);
    assertDefinitionStage(msg?: string): void;
    assertExecutionStage(msg?: string): void;
    assertResultsStage(msg?: string): void;
    onError: (error: Error, options: IRunOptions) => void;
    private definitionStarted;
    private lastDefinedPromise;
    private definitionFinished;
    enqueueDefinition(grp: IGroup): void;
    private runDefinitions;
    private runTests;
    run(options?: IRunOptions): Promise<void>;
    getResults(): IResult;
    getAPI(): ExternalAPI;
}
export default TContext;
