import { INode, IGroup, IContext } from './interfaces';
import ElapsedTimer from './elapsed-timer';
import { IGroupResult, IResultNode } from './result';
import { IRunOptions } from '.';
declare class TNode implements INode {
    private _name;
    private _parent;
    private _context;
    protected _elapsedTimer: ElapsedTimer;
    protected _finished: boolean;
    protected _elapsed: number;
    protected _executed: boolean;
    protected _skipped: boolean;
    readonly errors: Error[];
    readonly name: string;
    readonly parent: IGroup & TNode;
    readonly isRoot: boolean;
    readonly context: IContext;
    readonly finished: boolean;
    readonly elapsed: number;
    readonly passed: boolean;
    readonly executed: boolean;
    readonly skipped: boolean;
    readonly fullName: string;
    constructor(context: IContext, parent: IGroup & TNode, name: string);
    skip: () => Promise<void>;
    run: (options: IRunOptions) => Promise<void>;
    getResults(parent?: IGroupResult): IResultNode;
    protected runStart(options: IRunOptions): void;
    protected onError(error: Error, options: IRunOptions): void;
    protected runMain(options: IRunOptions): void;
    protected runEnd(options: IRunOptions): void;
}
declare namespace TNode {
    const FullNameDelimiter = "/";
}
export default TNode;
