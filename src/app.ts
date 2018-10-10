import { IApp } from "./app.interface";

export class App implements IApp{
    protected _args: string[];

    public get value() : string[] {
        return this._args;
    }

    constructor(){
        this._args = [];
    }

    public async start(): Promise<void> {
        console.log('app started');

        //@ts-ignore process is accessible
        this._args = process.argv.slice(2);
    }   

    public async stop(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}