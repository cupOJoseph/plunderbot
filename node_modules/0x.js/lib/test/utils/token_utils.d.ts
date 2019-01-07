import { Token } from '../../src/types';
export declare class TokenUtils {
    private _tokens;
    constructor(tokens: Token[]);
    getProtocolTokenOrThrow(): Token;
    getWethTokenOrThrow(): Token;
    getDummyTokens(): Token[];
}
