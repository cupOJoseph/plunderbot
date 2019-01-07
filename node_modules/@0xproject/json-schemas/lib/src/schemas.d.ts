export declare const schemas: {
    numberSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    addressSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    ecSignatureSchema: {
        id: string;
        properties: {
            v: {
                type: string;
                minimum: number;
                maximum: number;
            };
            r: {
                $ref: string;
            };
            s: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
    ecSignatureParameterSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    indexFilterValuesSchema: {
        id: string;
        additionalProperties: {
            oneOf: {
                $ref: string;
            }[];
        };
        type: string;
    };
    orderCancellationRequestsSchema: {
        id: string;
        type: string;
        items: {
            properties: {
                order: {
                    $ref: string;
                };
                takerTokenCancelAmount: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    orderFillOrKillRequestsSchema: {
        id: string;
        type: string;
        items: {
            properties: {
                signedOrder: {
                    $ref: string;
                };
                fillTakerAmount: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    orderFillRequestsSchema: {
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
    orderHashSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    orderSchema: {
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
    signedOrderSchema: {
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
    signedOrdersSchema: {
        id: string;
        type: string;
        items: {
            $ref: string;
        };
    };
    blockParamSchema: {
        id: string;
        oneOf: ({
            type: string;
            enum?: undefined;
        } | {
            enum: string[];
            type?: undefined;
        })[];
    };
    blockRangeSchema: {
        id: string;
        properties: {
            fromBlock: {
                $ref: string;
            };
            toBlock: {
                $ref: string;
            };
        };
        type: string;
    };
    tokenSchema: {
        id: string;
        properties: {
            name: {
                type: string;
            };
            symbol: {
                type: string;
            };
            decimals: {
                type: string;
            };
            address: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
    jsNumber: {
        id: string;
        type: string;
        minimum: number;
    };
    txDataSchema: {
        id: string;
        properties: {
            from: {
                $ref: string;
            };
            to: {
                $ref: string;
            };
            value: {
                oneOf: {
                    $ref: string;
                }[];
            };
            gas: {
                oneOf: {
                    $ref: string;
                }[];
            };
            gasPrice: {
                oneOf: {
                    $ref: string;
                }[];
            };
            data: {
                type: string;
                pattern: string;
            };
            nonce: {
                type: string;
                minimum: number;
            };
        };
        required: string[];
        type: string;
        additionalProperties: boolean;
    };
    relayerApiErrorResponseSchema: {
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
    relayerApiFeesPayloadSchema: {
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
    relayerApiFeesResponseSchema: {
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
    relayerApiOrderBookResponseSchema: {
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
    relayerApiTokenPairsResponseSchema: {
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
    relayerApiTokenTradeInfoSchema: {
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
    relayerApiOrderbookChannelSubscribeSchema: {
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
    relayerApiOrderbookChannelSubscribePayload: {
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
    relayerApiOrderbookChannelUpdateSchema: {
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
    relayerApiOrderbookChannelSnapshotSchema: {
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
    relayerApiOrderbookChannelSnapshotPayload: {
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
};
