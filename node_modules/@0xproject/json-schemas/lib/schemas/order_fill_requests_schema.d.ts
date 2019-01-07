export declare const orderFillRequestsSchema: {
    id: string;
    type: string;
    items: {
        properties: {
            signedOrder: {
                $ref: string;
            };
            takerTokenFillAmount: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
};
