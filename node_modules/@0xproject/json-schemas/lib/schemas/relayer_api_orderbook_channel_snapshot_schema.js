"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiOrderbookChannelSnapshotSchema = {
    id: '/RelayerApiOrderbookChannelSnapshot',
    type: 'object',
    properties: {
        type: { enum: ['snapshot'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/RelayerApiOrderbookChannelSnapshotPayload' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
exports.relayerApiOrderbookChannelSnapshotPayload = {
    id: '/RelayerApiOrderbookChannelSnapshotPayload',
    type: 'object',
    properties: {
        bids: { $ref: '/signedOrdersSchema' },
        asks: { $ref: '/signedOrdersSchema' },
    },
    required: ['bids', 'asks'],
};
//# sourceMappingURL=relayer_api_orderbook_channel_snapshot_schema.js.map