import { i as isSameDay } from '../../chunks/bundle-CEdTfjQa.js';
import { compareMessagesForGrouping } from './compareMessagesForGrouping.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-DzrKlXwY.js';
import 'react';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-C4rWp9Fy.js';

/**
 * exported, should be backward compatible
 */
var getMessagePartsInfo = function (_a) {
    var _b = _a.allMessages, allMessages = _b === void 0 ? [] : _b, _c = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _c === void 0 ? true : _c, _d = _a.currentIndex, currentIndex = _d === void 0 ? 0 : _d, currentMessage = _a.currentMessage, _e = _a.currentChannel, currentChannel = _e === void 0 ? null : _e, _f = _a.replyType, replyType = _f === void 0 ? '' : _f;
    var previousMessage = allMessages[currentIndex - 1];
    var nextMessage = allMessages[currentIndex + 1];
    var _g = isMessageGroupingEnabled
        ? compareMessagesForGrouping(previousMessage, currentMessage, nextMessage, currentChannel, replyType)
        : [false, false], chainTop = _g[0], chainBottom = _g[1];
    var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
    var currentCreatedAt = currentMessage.createdAt;
    // NOTE: for pending/failed messages
    var isLocalMessage = 'sendingStatus' in currentMessage && (currentMessage.sendingStatus !== 'succeeded');
    // https://stackoverflow.com/a/41855608
    var hasSeparator = isLocalMessage ? false : !(previousMessageCreatedAt && (isSameDay(currentCreatedAt, previousMessageCreatedAt)));
    return {
        chainTop: chainTop,
        chainBottom: chainBottom,
        hasSeparator: hasSeparator,
    };
};

export { getMessagePartsInfo };
//# sourceMappingURL=getMessagePartsInfo.js.map
