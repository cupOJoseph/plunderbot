"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCancellationRequestsSchema = {
    id: '/OrderCancellationRequests',
    type: 'array',
    items: {
        properties: {
            order: { $ref: '/Order' },
            takerTokenCancelAmount: { $ref: '/Number' },
        },
        required: ['order', 'takerTokenCancelAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_cancel_schema.js.map