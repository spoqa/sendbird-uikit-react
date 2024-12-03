'use strict';

exports.OutgoingMessageStates = void 0;
(function (OutgoingMessageStates) {
    OutgoingMessageStates["NONE"] = "NONE";
    OutgoingMessageStates["PENDING"] = "PENDING";
    OutgoingMessageStates["SENT"] = "SENT";
    OutgoingMessageStates["FAILED"] = "FAILED";
    OutgoingMessageStates["DELIVERED"] = "DELIVERED";
    OutgoingMessageStates["READ"] = "READ";
})(exports.OutgoingMessageStates || (exports.OutgoingMessageStates = {}));
var getOutgoingMessageState = function (channel, message) {
    var _a, _b, _c, _d, _e;
    if (!message || !('sendingStatus' in message))
        return exports.OutgoingMessageStates.NONE;
    if (message.sendingStatus === 'pending') {
        return exports.OutgoingMessageStates.PENDING;
    }
    if (message.sendingStatus === 'failed') {
        return exports.OutgoingMessageStates.FAILED;
    }
    if ((_a = channel === null || channel === void 0 ? void 0 : channel.isGroupChannel) === null || _a === void 0 ? void 0 : _a.call(channel)) {
        /* GroupChannel only */
        if (((_c = (_b = channel).getUnreadMemberCount) === null || _c === void 0 ? void 0 : _c.call(_b, message)) === 0) {
            return exports.OutgoingMessageStates.READ;
        }
        else if (((_e = (_d = channel).getUndeliveredMemberCount) === null || _e === void 0 ? void 0 : _e.call(_d, message)) === 0) {
            return exports.OutgoingMessageStates.DELIVERED;
        }
    }
    if (message.sendingStatus === 'succeeded') {
        return exports.OutgoingMessageStates.SENT;
    }
    return exports.OutgoingMessageStates.NONE;
};

exports.getOutgoingMessageState = getOutgoingMessageState;
//# sourceMappingURL=getOutgoingMessageState.js.map
