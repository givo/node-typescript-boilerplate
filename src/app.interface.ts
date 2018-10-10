export interface IApp{
    start(): Promise<void>;
    stop(): Promise<void>;
}