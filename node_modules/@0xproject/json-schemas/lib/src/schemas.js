"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_type_schemas_1 = require("../schemas/basic_type_schemas");
var block_range_schema_1 = require("../schemas/block_range_schema");
var ec_signature_schema_1 = require("../schemas/ec_signature_schema");
var index_filter_values_schema_1 = require("../schemas/index_filter_values_schema");
var order_cancel_schema_1 = require("../schemas/order_cancel_schema");
var order_fill_or_kill_requests_schema_1 = require("../schemas/order_fill_or_kill_requests_schema");
var order_fill_requests_schema_1 = require("../schemas/order_fill_requests_schema");
var order_hash_schema_1 = require("../schemas/order_hash_schema");
var order_schemas_1 = require("../schemas/order_schemas");
var relayer_api_error_response_schema_1 = require("../schemas/relayer_api_error_response_schema");
var relayer_api_fees_payload_schema_1 = require("../schemas/relayer_api_fees_payload_schema");
var relayer_api_fees_response_schema_1 = require("../schemas/relayer_api_fees_response_schema");
var relayer_api_orberbook_channel_subscribe_schema_1 = require("../schemas/relayer_api_orberbook_channel_subscribe_schema");
var relayer_api_orderbook_channel_snapshot_schema_1 = require("../schemas/relayer_api_orderbook_channel_snapshot_schema");
var relayer_api_orderbook_channel_update_response_schema_1 = require("../schemas/relayer_api_orderbook_channel_update_response_schema");
var relayer_api_orderbook_response_schema_1 = require("../schemas/relayer_api_orderbook_response_schema");
var relayer_api_token_pairs_response_schema_1 = require("../schemas/relayer_api_token_pairs_response_schema");
var signed_orders_schema_1 = require("../schemas/signed_orders_schema");
var token_schema_1 = require("../schemas/token_schema");
var tx_data_schema_1 = require("../schemas/tx_data_schema");
exports.schemas = {
    numberSchema: basic_type_schemas_1.numberSchema,
    addressSchema: basic_type_schemas_1.addressSchema,
    ecSignatureSchema: ec_signature_schema_1.ecSignatureSchema,
    ecSignatureParameterSchema: ec_signature_schema_1.ecSignatureParameterSchema,
    indexFilterValuesSchema: index_filter_values_schema_1.indexFilterValuesSchema,
    orderCancellationRequestsSchema: order_cancel_schema_1.orderCancellationRequestsSchema,
    orderFillOrKillRequestsSchema: order_fill_or_kill_requests_schema_1.orderFillOrKillRequestsSchema,
    orderFillRequestsSchema: order_fill_requests_schema_1.orderFillRequestsSchema,
    orderHashSchema: order_hash_schema_1.orderHashSchema,
    orderSchema: order_schemas_1.orderSchema,
    signedOrderSchema: order_schemas_1.signedOrderSchema,
    signedOrdersSchema: signed_orders_schema_1.signedOrdersSchema,
    blockParamSchema: block_range_schema_1.blockParamSchema,
    blockRangeSchema: block_range_schema_1.blockRangeSchema,
    tokenSchema: token_schema_1.tokenSchema,
    jsNumber: tx_data_schema_1.jsNumber,
    txDataSchema: tx_data_schema_1.txDataSchema,
    relayerApiErrorResponseSchema: relayer_api_error_response_schema_1.relayerApiErrorResponseSchema,
    relayerApiFeesPayloadSchema: relayer_api_fees_payload_schema_1.relayerApiFeesPayloadSchema,
    relayerApiFeesResponseSchema: relayer_api_fees_response_schema_1.relayerApiFeesResponseSchema,
    relayerApiOrderBookResponseSchema: relayer_api_orderbook_response_schema_1.relayerApiOrderBookResponseSchema,
    relayerApiTokenPairsResponseSchema: relayer_api_token_pairs_response_schema_1.relayerApiTokenPairsResponseSchema,
    relayerApiTokenTradeInfoSchema: relayer_api_token_pairs_response_schema_1.relayerApiTokenTradeInfoSchema,
    relayerApiOrderbookChannelSubscribeSchema: relayer_api_orberbook_channel_subscribe_schema_1.relayerApiOrderbookChannelSubscribeSchema,
    relayerApiOrderbookChannelSubscribePayload: relayer_api_orberbook_channel_subscribe_schema_1.relayerApiOrderbookChannelSubscribePayload,
    relayerApiOrderbookChannelUpdateSchema: relayer_api_orderbook_channel_update_response_schema_1.relayerApiOrderbookChannelUpdateSchema,
    relayerApiOrderbookChannelSnapshotSchema: relayer_api_orderbook_channel_snapshot_schema_1.relayerApiOrderbookChannelSnapshotSchema,
    relayerApiOrderbookChannelSnapshotPayload: relayer_api_orderbook_channel_snapshot_schema_1.relayerApiOrderbookChannelSnapshotPayload,
};
//# sourceMappingURL=schemas.js.map