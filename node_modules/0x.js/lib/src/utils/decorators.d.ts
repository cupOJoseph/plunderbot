import { AsyncMethod, SyncMethod } from '../types';
export declare const decorators: {
    asyncZeroExErrorHandler: (target: object, key: string | symbol, descriptor: TypedPropertyDescriptor<AsyncMethod>) => TypedPropertyDescriptor<AsyncMethod>;
    syncZeroExErrorHandler: (target: object, key: string | symbol, descriptor: TypedPropertyDescriptor<SyncMethod>) => TypedPropertyDescriptor<SyncMethod>;
};
