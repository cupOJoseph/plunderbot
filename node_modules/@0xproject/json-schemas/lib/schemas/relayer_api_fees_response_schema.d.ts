export declare const relayerApiFeesResponseSchema: {
    id: string;
    type: string;
    properties: {
        makerFee: {
            $ref: string;
        };
        takerFee: {
            $ref: string;
        };
        feeRecipient: {
            $ref: string;
        };
    };
    required: string[];
};
