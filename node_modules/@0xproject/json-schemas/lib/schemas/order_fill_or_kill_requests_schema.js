"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFillOrKillRequestsSchema = {
    id: '/OrderFillOrKillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: { $ref: '/SignedOrder' },
            fillTakerAmount: { $ref: '/Number' },
        },
        required: ['signedOrder', 'fillTakerAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_fill_or_kill_requests_schema.js.map