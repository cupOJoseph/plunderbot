"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsSHA3 = require("js-sha3");
var BASIC_ADDRESS_REGEX = /^(0x)?[0-9a-f]{40}$/i;
var SAME_CASE_ADDRESS_REGEX = /^(0x)?([0-9a-f]{40}|[0-9A-F]{40})$/;
exports.addressUtils = {
    isChecksumAddress: function (address) {
        // Check each case
        var unprefixedAddress = address.replace('0x', '');
        var addressHash = jsSHA3.keccak256(unprefixedAddress.toLowerCase());
        for (var i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && unprefixedAddress[i].toUpperCase() !== unprefixedAddress[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && unprefixedAddress[i].toLowerCase() !== unprefixedAddress[i])) {
                return false;
            }
        }
        return true;
    },
    isAddress: function (address) {
        if (!BASIC_ADDRESS_REGEX.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        else if (SAME_CASE_ADDRESS_REGEX.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        }
        else {
            // Otherwise check each case
            var isValidChecksummedAddress = exports.addressUtils.isChecksumAddress(address);
            return isValidChecksummedAddress;
        }
    },
};
//# sourceMappingURL=address_utils.js.map