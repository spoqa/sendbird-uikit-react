import React__default, { useContext } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ozUngJUV.js';
import { x as getClassName } from '../chunks/bundle-hVzh_gnK.js';
import { L as LocalizationContext } from '../chunks/bundle-CoXgb0Rb.js';
import '../chunks/bundle-DzrKlXwY.js';
import '../chunks/bundle-CANWvEzj.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';

function UnknownMessageItemBody(_a) {
    var _b;
    var className = _a.className, message = _a.message, _c = _a.isByMe, isByMe = _c === void 0 ? false : _c, _d = _a.mouseHover, mouseHover = _d === void 0 ? false : _d, _e = _a.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__header", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__description", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE)));
}

export { UnknownMessageItemBody as default };
//# sourceMappingURL=UnknownMessageItemBody.js.map
