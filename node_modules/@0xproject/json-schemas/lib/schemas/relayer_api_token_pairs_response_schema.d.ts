export declare const relayerApiTokenPairsResponseSchema: {
    id: string;
    type: string;
    items: {
        properties: {
            tokenA: {
                $ref: string;
            };
            tokenB: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
};
export declare const relayerApiTokenTradeInfoSchema: {
    id: string;
    type: string;
    properties: {
        address: {
            $ref: string;
        };
        minAmount: {
            $ref: string;
        };
        maxAmount: {
            $ref: string;
        };
        precision: {
            type: string;
        };
    };
    required: string[];
};
