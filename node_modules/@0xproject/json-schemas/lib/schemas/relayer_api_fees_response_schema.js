"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayerApiFeesResponseSchema = {
    id: '/RelayerApiFeesResponse',
    type: 'object',
    properties: {
        makerFee: { $ref: '/Number' },
        takerFee: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
    },
    required: ['makerFee', 'takerFee', 'feeRecipient'],
};
//# sourceMappingURL=relayer_api_fees_response_schema.js.map