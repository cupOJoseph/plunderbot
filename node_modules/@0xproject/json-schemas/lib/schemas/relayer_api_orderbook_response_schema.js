"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiOrderBookResponseSchema = {
    id: '/RelayerApiOrderBookResponse',
    type: 'object',
    properties: {
        bids: { $ref: '/signedOrdersSchema' },
        asks: { $ref: '/signedOrdersSchema' },
    },
    required: ['bids', 'asks'],
};
//# sourceMappingURL=relayer_api_orderbook_response_schema.js.map