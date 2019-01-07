export declare const relayerApiOrderbookChannelUpdateSchema: {
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
