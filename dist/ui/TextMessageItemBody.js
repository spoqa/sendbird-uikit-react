import React__default, { useContext, useMemo } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ozUngJUV.js';
import { x as getClassName, d as isEditedMessage } from '../chunks/bundle-hVzh_gnK.js';
import { L as LocalizationContext } from '../chunks/bundle-CoXgb0Rb.js';
import { t as tokenizeMessage } from '../chunks/bundle-DUyUoN7x.js';
import { T as TextFragment } from '../chunks/bundle-8Ilf1Buq.js';
import { T as TEXT_MESSAGE_BODY_CLASSNAME } from '../chunks/bundle-OKWbLM0b.js';
import '../chunks/bundle-DzrKlXwY.js';
import '../chunks/bundle-CANWvEzj.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';
import '../Message/context.js';
import './MentionLabel.js';
import '../chunks/bundle-BQ7ajvH5.js';
import 'react-dom';
import '../chunks/bundle-CSGqtO-d.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-BhlLFjHF.js';
import '../withSendbird.js';
import './IconButton.js';
import './UserProfile.js';
import '../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-mp0bcmQc.js';
import '../chunks/bundle-D3I4IOQr.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-DTjvrceX.js';
import '../useSendbirdStateContext.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-C9y-bwLX.js';
import '../chunks/bundle-BcxMj4cx.js';
import './ImageRenderer.js';
import '../chunks/bundle-BG2WZLhb.js';
import './LinkLabel.js';

function TextMessageItemBody(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message, _d = _a.isByMe, isByMe = _d === void 0 ? false : _d, _e = _a.mouseHover, mouseHover = _e === void 0 ? false : _e, _f = _a.isMentionEnabled, isMentionEnabled = _f === void 0 ? false : _f, _g = _a.isReactionEnabled, isReactionEnabled = _g === void 0 ? false : _g, _h = _a.isMarkdownEnabled, isMarkdownEnabled = _h === void 0 ? false : _h;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled
        && (message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate)
        && message.mentionedMessageTemplate.length > 0
        && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
        && message.mentionedUsers.length > 0;
    var tokens = useMemo(function () {
        var _a;
        if (isMessageMentioned) {
            return tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: isMarkdownEnabled,
            });
        }
        return tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: isMarkdownEnabled,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    return (React__default.createElement(Label, { type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 },
        React__default.createElement("div", { className: getClassName([
                className,
                TEXT_MESSAGE_BODY_CLASSNAME,
                isByMe ? 'outgoing' : 'incoming',
                mouseHover ? 'mouse-hover' : '',
                (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
            ]) },
            React__default.createElement(TextFragment, { tokens: tokens }),
            isEditedMessage(message) && (React__default.createElement(Label, { className: "sendbird-text-message-item-body__message edited", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))));
}

export { TextMessageItemBody as default };
//# sourceMappingURL=TextMessageItemBody.js.map
