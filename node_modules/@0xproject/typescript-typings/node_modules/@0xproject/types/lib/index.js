"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbiType;
(function (AbiType) {
    AbiType["Function"] = "function";
    AbiType["Constructor"] = "constructor";
    AbiType["Event"] = "event";
    AbiType["Fallback"] = "fallback";
})(AbiType = exports.AbiType || (exports.AbiType = {}));
var SolidityTypes;
(function (SolidityTypes) {
    SolidityTypes["Address"] = "address";
    SolidityTypes["Uint256"] = "uint256";
    SolidityTypes["Uint8"] = "uint8";
    SolidityTypes["Uint"] = "uint";
})(SolidityTypes = exports.SolidityTypes || (exports.SolidityTypes = {}));
// Earliest is omitted by design. It is simply an alias for the `0` constant and
// is thus not very helpful. Moreover, this type is used in places that only accept
// `latest` or `pending`.
var BlockParamLiteral;
(function (BlockParamLiteral) {
    BlockParamLiteral["Latest"] = "latest";
    BlockParamLiteral["Pending"] = "pending";
})(BlockParamLiteral = exports.BlockParamLiteral || (exports.BlockParamLiteral = {}));
/**
 * Errors originating from the 0x exchange contract
 */
var ExchangeContractErrs;
(function (ExchangeContractErrs) {
    ExchangeContractErrs["OrderFillExpired"] = "ORDER_FILL_EXPIRED";
    ExchangeContractErrs["OrderCancelExpired"] = "ORDER_CANCEL_EXPIRED";
    ExchangeContractErrs["OrderCancelAmountZero"] = "ORDER_CANCEL_AMOUNT_ZERO";
    ExchangeContractErrs["OrderAlreadyCancelledOrFilled"] = "ORDER_ALREADY_CANCELLED_OR_FILLED";
    ExchangeContractErrs["OrderFillAmountZero"] = "ORDER_FILL_AMOUNT_ZERO";
    ExchangeContractErrs["OrderRemainingFillAmountZero"] = "ORDER_REMAINING_FILL_AMOUNT_ZERO";
    ExchangeContractErrs["OrderFillRoundingError"] = "ORDER_FILL_ROUNDING_ERROR";
    ExchangeContractErrs["FillBalanceAllowanceError"] = "FILL_BALANCE_ALLOWANCE_ERROR";
    ExchangeContractErrs["InsufficientTakerBalance"] = "INSUFFICIENT_TAKER_BALANCE";
    ExchangeContractErrs["InsufficientTakerAllowance"] = "INSUFFICIENT_TAKER_ALLOWANCE";
    ExchangeContractErrs["InsufficientMakerBalance"] = "INSUFFICIENT_MAKER_BALANCE";
    ExchangeContractErrs["InsufficientMakerAllowance"] = "INSUFFICIENT_MAKER_ALLOWANCE";
    ExchangeContractErrs["InsufficientTakerFeeBalance"] = "INSUFFICIENT_TAKER_FEE_BALANCE";
    ExchangeContractErrs["InsufficientTakerFeeAllowance"] = "INSUFFICIENT_TAKER_FEE_ALLOWANCE";
    ExchangeContractErrs["InsufficientMakerFeeBalance"] = "INSUFFICIENT_MAKER_FEE_BALANCE";
    ExchangeContractErrs["InsufficientMakerFeeAllowance"] = "INSUFFICIENT_MAKER_FEE_ALLOWANCE";
    ExchangeContractErrs["TransactionSenderIsNotFillOrderTaker"] = "TRANSACTION_SENDER_IS_NOT_FILL_ORDER_TAKER";
    ExchangeContractErrs["MultipleMakersInSingleCancelBatchDisallowed"] = "MULTIPLE_MAKERS_IN_SINGLE_CANCEL_BATCH_DISALLOWED";
    ExchangeContractErrs["InsufficientRemainingFillAmount"] = "INSUFFICIENT_REMAINING_FILL_AMOUNT";
    ExchangeContractErrs["MultipleTakerTokensInFillUpToDisallowed"] = "MULTIPLE_TAKER_TOKENS_IN_FILL_UP_TO_DISALLOWED";
    ExchangeContractErrs["BatchOrdersMustHaveSameExchangeAddress"] = "BATCH_ORDERS_MUST_HAVE_SAME_EXCHANGE_ADDRESS";
    ExchangeContractErrs["BatchOrdersMustHaveAtLeastOneItem"] = "BATCH_ORDERS_MUST_HAVE_AT_LEAST_ONE_ITEM";
})(ExchangeContractErrs = exports.ExchangeContractErrs || (exports.ExchangeContractErrs = {}));
//# sourceMappingURL=index.js.map