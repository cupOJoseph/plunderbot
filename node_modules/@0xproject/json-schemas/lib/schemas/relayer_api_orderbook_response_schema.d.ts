export declare const relayerApiOrderBookResponseSchema: {
    id: string;
    type: string;
    properties: {
        bids: {
            $ref: string;
        };
        asks: {
            $ref: string;
        };
    };
    required: string[];
};
