"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = {
    id: '/Order',
    properties: {
        maker: { $ref: '/Address' },
        taker: { $ref: '/Address' },
        makerFee: { $ref: '/Number' },
        takerFee: { $ref: '/Number' },
        makerTokenAmount: { $ref: '/Number' },
        takerTokenAmount: { $ref: '/Number' },
        makerTokenAddress: { $ref: '/Address' },
        takerTokenAddress: { $ref: '/Address' },
        salt: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
        expirationUnixTimestampSec: { $ref: '/Number' },
        exchangeContractAddress: { $ref: '/Address' },
    },
    required: [
        'maker',
        'taker',
        'makerFee',
        'takerFee',
        'makerTokenAmount',
        'takerTokenAmount',
        'salt',
        'feeRecipient',
        'expirationUnixTimestampSec',
        'exchangeContractAddress',
    ],
    type: 'object',
};
exports.signedOrderSchema = {
    id: '/SignedOrder',
    allOf: [
        { $ref: '/Order' },
        {
            properties: {
                ecSignature: { $ref: '/ECSignature' },
            },
            required: ['ecSignature'],
        },
    ],
};
//# sourceMappingURL=order_schemas.js.map