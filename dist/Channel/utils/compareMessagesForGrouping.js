import { f as format } from '../../chunks/bundle-DGIMAot8.js';
import { a as isReadMessage } from '../../chunks/bundle-hVzh_gnK.js';
import { u as useLocalization } from '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import 'react';
import '../../chunks/bundle-CANWvEzj.js';

/**
 * exported, should be backward compatible
 * @returns [chainTop: `boolean`, chainBottom: `boolean`]
 */
var compareMessagesForGrouping = function (prevMessage, currMessage, nextMessage, currentChannel, replyType) {
    if (!currentChannel || currentChannel.channelType !== 'group') {
        return [
            isSameGroup(prevMessage, currMessage),
            isSameGroup(currMessage, nextMessage),
        ];
    }
    if (replyType === 'THREAD' && (currMessage === null || currMessage === void 0 ? void 0 : currMessage.threadInfo)) {
        return [false, false];
    }
    var sendingStatus = (currMessage === null || currMessage === void 0 ? void 0 : currMessage.sendingStatus) || '';
    var isAcceptable = sendingStatus !== 'pending' && sendingStatus !== 'failed';
    return [
        isSameGroup(prevMessage, currMessage, currentChannel) && isAcceptable,
        isSameGroup(currMessage, nextMessage, currentChannel) && isAcceptable,
    ];
};
var getMessageCreatedAt = function (message) {
    var stringSet = useLocalization().stringSet;
    return format(message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT);
};
var isSameGroup = function (message, comparingMessage, currentChannel) {
    var _a, _b;
    if (!(message
        && comparingMessage
        && message.messageType
        && message.messageType !== 'admin'
        && comparingMessage.messageType
        && (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.messageType) !== 'admin'
        && 'sender' in message
        && 'sender' in comparingMessage
        && message.createdAt
        && comparingMessage.createdAt
        && message.sender.userId
        && comparingMessage.sender.userId)) {
        return false;
    }
    return ((message === null || message === void 0 ? void 0 : message.sendingStatus) === (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sendingStatus)
        && ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sender) === null || _b === void 0 ? void 0 : _b.userId)
        && getMessageCreatedAt(message) === getMessageCreatedAt(comparingMessage)) && (currentChannel ? isReadMessage(currentChannel, message) === isReadMessage(currentChannel, comparingMessage) : true);
};
var messages = {
    compareMessagesForGrouping: compareMessagesForGrouping,
    getMessageCreatedAt: getMessageCreatedAt,
    isSameGroup: isSameGroup,
};

export { compareMessagesForGrouping, messages as default, getMessageCreatedAt, isSameGroup };
//# sourceMappingURL=compareMessagesForGrouping.js.map