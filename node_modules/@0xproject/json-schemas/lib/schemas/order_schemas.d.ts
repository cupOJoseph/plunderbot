export declare const orderSchema: {
    id: string;
    properties: {
        maker: {
            $ref: string;
        };
        taker: {
            $ref: string;
        };
        makerFee: {
            $ref: string;
        };
        takerFee: {
            $ref: string;
        };
        makerTokenAmount: {
            $ref: string;
        };
        takerTokenAmount: {
            $ref: string;
        };
        makerTokenAddress: {
            $ref: string;
        };
        takerTokenAddress: {
            $ref: string;
        };
        salt: {
            $ref: string;
        };
        feeRecipient: {
            $ref: string;
        };
        expirationUnixTimestampSec: {
            $ref: string;
        };
        exchangeContractAddress: {
            $ref: string;
        };
    };
    required: string[];
    type: string;
};
export declare const signedOrderSchema: {
    id: string;
    allOf: ({
        $ref: string;
        properties?: undefined;
        required?: undefined;
    } | {
        properties: {
            ecSignature: {
                $ref: string;
            };
        };
        required: string[];
        $ref?: undefined;
    })[];
};
