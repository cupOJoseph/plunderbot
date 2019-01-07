"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiTokenPairsResponseSchema = {
    id: '/RelayerApiTokenPairsResponse',
    type: 'array',
    items: {
        properties: {
            tokenA: { $ref: '/RelayerApiTokenTradeInfo' },
            tokenB: { $ref: '/RelayerApiTokenTradeInfo' },
        },
        required: ['tokenA', 'tokenB'],
        type: 'object',
    },
};
exports.relayerApiTokenTradeInfoSchema = {
    id: '/RelayerApiTokenTradeInfo',
    type: 'object',
    properties: {
        address: { $ref: '/Address' },
        minAmount: { $ref: '/Number' },
        maxAmount: { $ref: '/Number' },
        precision: { type: 'number' },
    },
    required: ['address'],
};
//# sourceMappingURL=relayer_api_token_pairs_response_schema.js.map