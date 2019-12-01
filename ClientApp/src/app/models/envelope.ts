export interface Envelope<T> {
    operationId: string;
    resultContent: T;
}