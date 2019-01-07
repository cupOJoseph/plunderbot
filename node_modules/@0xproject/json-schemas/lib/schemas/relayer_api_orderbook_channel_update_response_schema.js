"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiOrderbookChannelUpdateSchema = {
    id: '/RelayerApiOrderbookChannelUpdate',
    type: 'object',
    properties: {
        type: { enum: ['update'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/SignedOrder' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
//# sourceMappingURL=relayer_api_orderbook_channel_update_response_schema.js.map