'use strict';

var React = require('react');
var index$1 = require('../../chunks/bundle-CyjbhYln.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_context = require('../../chunks/bundle-m7ytwpyW.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
var Message_context = require('../../Message/context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-Dlvh67yI.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-8lqFENCn.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../../chunks/bundle-C4475KDA.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-8ZWsPCOg.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-IM9ReYMH.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../chunks/bundle-Ch-SV_mC.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BNWGP_DJ.js');
require('../../chunks/bundle-6X4nvLqa.js');
require('../../chunks/bundle-B8SVf9Ei.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-D14ErjFX.js');
require('../../chunks/bundle-kho6esBq.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CIGEu-M8.js');
require('../../chunks/bundle-Bgprrbe3.js');
require('../../chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('../../chunks/bundle-DNYU-n0R.js');
require('../../chunks/bundle-Cpzu_F_c.js');
require('../../chunks/bundle-YryjcbxB.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-CxCCWx-V.js');
require('../../chunks/bundle-BjEM1mIu.js');
require('../../chunks/bundle-DbUBJ44g.js');
require('../../chunks/bundle-D0fVLgqP.js');
require('@sendbird/chat/message');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelMessageList(props, ref) {
    var _a = OpenChannel_context.useOpenChannelContext(), _b = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _b === void 0 ? true : _b, allMessages = _a.allMessages, hasMore = _a.hasMore, onScroll = _a.onScroll;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var userId = store.config.userId;
    var localRef = React.useRef(null);
    var scrollRef = ref || localRef;
    var _c = React.useState(false), showScrollDownButton = _c[0], setShowScrollDownButton = _c[1];
    var scrollToBottom = function () {
        if (scrollRef && 'current' in scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
            setShowScrollDownButton(false);
        }
    };
    var handleOnScroll = index.useHandleOnScrollCallback({
        setShowScrollDownButton: setShowScrollDownButton,
        hasMore: hasMore,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var memoizedMessageList = React.useMemo(function () {
        var _a;
        if (allMessages.length > 0) {
            return (allMessages.map(function (message, index) {
                var _a;
                var previousMessage = allMessages[index - 1];
                var nextMessage = allMessages[index - 1];
                var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
                var currentCreatedAt = message === null || message === void 0 ? void 0 : message.createdAt;
                // https://stackoverflow.com/a/41855608
                var hasSeparator = !(previousMessageCreatedAt && (index$1.isSameDay(currentCreatedAt, previousMessageCreatedAt)));
                var _b = isMessageGroupingEnabled
                    ? Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(previousMessage, message, nextMessage)
                    : [false, false], chainTop = _b[0], chainBottom = _b[1];
                var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
                var key = (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId);
                return (React__default.default.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: key },
                    React__default.default.createElement(OpenChannel_components_OpenChannelMessage, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage })));
            }));
        }
        return (((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-openchannel-conversation-scroll__container__place-holder", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES })));
    }, [allMessages]);
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container" },
            React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__padding" }),
            React__default.default.createElement("div", { className: [
                    'sendbird-openchannel-conversation-scroll__container__item-container',
                    (allMessages.length > 0) ? '' : 'no-messages',
                ].join(' '), onScroll: handleOnScroll, ref: scrollRef }, memoizedMessageList)),
        showScrollDownButton && (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button", onClick: scrollToBottom, onKeyDown: scrollToBottom, tabIndex: 0, role: "button" },
            React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.CONTENT })))));
}
var OpenChannelMessageList$1 = React__default.default.forwardRef(OpenChannelMessageList);

module.exports = OpenChannelMessageList$1;
//# sourceMappingURL=OpenChannelMessageList.js.map
