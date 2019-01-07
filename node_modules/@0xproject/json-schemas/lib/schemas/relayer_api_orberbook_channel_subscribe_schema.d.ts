export declare const relayerApiOrderbookChannelSubscribeSchema: {
    id: string;
    type: string;
    properties: {
        type: {
            enum: string[];
        };
        channel: {
            enum: string[];
        };
        requestId: {
            type: string;
        };
        payload: {
            $ref: string;
        };
    };
    required: string[];
};
export declare const relayerApiOrderbookChannelSubscribePayload: {
    id: string;
    type: string;
    properties: {
        baseTokenAddress: {
            $ref: string;
        };
        quoteTokenAddress: {
            $ref: string;
        };
        snapshot: {
            type: string;
        };
        limit: {
            type: string;
        };
    };
    required: string[];
};
