import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-CoXgb0Rb.js';
import { x as getClassName } from '../chunks/bundle-hVzh_gnK.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ozUngJUV.js';
import '../chunks/bundle-DzrKlXwY.js';
import '../chunks/bundle-CANWvEzj.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';

function FallbackTemplateMessageItemBody(_a) {
    var className = _a.className, message = _a.message, isByMe = _a.isByMe;
    var stringSet = useContext(LocalizationContext).stringSet;
    var text = message['message'];
    return (React__default.createElement("div", { className: getClassName([
            className !== null && className !== void 0 ? className : '',
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body__fallback_message',
        ]) }, text
        ? React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_1 }, text))
        : React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Label, { className: 'sendbird-template-message-item-body__fallback_message__header', type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_1 }, stringSet.UNKNOWN__TEMPLATE_ERROR),
            React__default.createElement(Label, { className: 'sendbird-template-message-item-body__fallback_message__description', type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_3 }, stringSet.UNKNOWN__CANNOT_READ_TEMPLATE))));
}

export { FallbackTemplateMessageItemBody, FallbackTemplateMessageItemBody as default };
//# sourceMappingURL=FallbackTemplateMessageItemBody.tsx.js.map
