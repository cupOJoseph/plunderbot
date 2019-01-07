"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexFilterValuesSchema = {
    id: '/IndexFilterValues',
    additionalProperties: {
        oneOf: [{ $ref: '/Number' }, { $ref: '/Address' }, { $ref: '/OrderHashSchema' }],
    },
    type: 'object',
};
//# sourceMappingURL=index_filter_values_schema.js.map