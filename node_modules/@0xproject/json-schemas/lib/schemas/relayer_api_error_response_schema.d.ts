export declare const relayerApiErrorResponseSchema: {
    id: string;
    type: string;
    properties: {
        code: {
            type: string;
        };
        reason: {
            type: string;
        };
        validationErrors: {
            type: string;
            items: {
                type: string;
                properties: {
                    field: {
                        type: string;
                    };
                    code: {
                        type: string;
                    };
                    reason: {
                        type: string;
                    };
                };
                required: string[];
            };
        };
    };
    required: string[];
};
