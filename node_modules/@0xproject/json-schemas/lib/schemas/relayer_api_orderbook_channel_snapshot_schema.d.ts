export declare const relayerApiOrderbookChannelSnapshotSchema: {
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
export declare const relayerApiOrderbookChannelSnapshotPayload: {
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
