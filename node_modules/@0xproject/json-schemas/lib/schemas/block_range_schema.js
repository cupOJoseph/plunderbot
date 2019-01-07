"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockParamSchema = {
    id: '/BlockParam',
    oneOf: [
        {
            type: 'number',
        },
        {
            enum: ['latest', 'earliest', 'pending'],
        },
    ],
};
exports.blockRangeSchema = {
    id: '/BlockRange',
    properties: {
        fromBlock: { $ref: '/BlockParam' },
        toBlock: { $ref: '/BlockParam' },
    },
    type: 'object',
};
//# sourceMappingURL=block_range_schema.js.map