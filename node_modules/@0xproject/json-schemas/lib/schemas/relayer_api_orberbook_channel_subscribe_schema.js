"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiOrderbookChannelSubscribeSchema = {
    id: '/RelayerApiOrderbookChannelSubscribe',
    type: 'object',
    properties: {
        type: { enum: ['subscribe'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/RelayerApiOrderbookChannelSubscribePayload' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
exports.relayerApiOrderbookChannelSubscribePayload = {
    id: '/RelayerApiOrderbookChannelSubscribePayload',
    type: 'object',
    properties: {
        baseTokenAddress: { $ref: '/Address' },
        quoteTokenAddress: { $ref: '/Address' },
        snapshot: { type: 'boolean' },
        limit: { type: 'number' },
    },
    required: ['baseTokenAddress', 'quoteTokenAddress'],
};
//# sourceMappingURL=relayer_api_orberbook_channel_subscribe_schema.js.map