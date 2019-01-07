export declare const relayerApiFeesPayloadSchema: {
    id: string;
    type: string;
    properties: {
        exchangeContractAddress: {
            $ref: string;
        };
        maker: {
            $ref: string;
        };
        taker: {
            $ref: string;
        };
        makerTokenAddress: {
            $ref: string;
        };
        takerTokenAddress: {
            $ref: string;
        };
        makerTokenAmount: {
            $ref: string;
        };
        takerTokenAmount: {
            $ref: string;
        };
        expirationUnixTimestampSec: {
            $ref: string;
        };
        salt: {
            $ref: string;
        };
    };
    required: string[];
};
