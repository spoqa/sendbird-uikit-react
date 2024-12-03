import { a as __awaiter, b as __generator, _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default, { forwardRef, useRef, useLayoutEffect, useState, useEffect } from 'react';
import { useGroupChannelHandler } from '@sendbird/uikit-tools';
import { M as getHTMLTextDirection, k as isSendableMessage } from '../../chunks/bundle-hVzh_gnK.js';
import { T as TypingIndicatorType } from '../../chunks/bundle-cicixJP5.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { Message } from './Message.js';
import { UnreadCount } from './UnreadCount.js';
import { FrozenNotification } from './FrozenNotification.js';
import { S as SCROLL_BUFFER } from '../../chunks/bundle-C4rWp9Fy.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import TypingIndicatorBubble from '../../ui/TypingIndicatorBubble.js';
import { useGroupChannelContext } from '../context.js';
import { n as noop, d as deleteNullish } from '../../chunks/bundle-CSGqtO-d.js';
import { getMessagePartsInfo } from '../../Channel/utils/getMessagePartsInfo.js';
import { MessageProvider } from '../../Message/context.js';
import { g as getComponentKeyFromMessage } from '../../chunks/bundle-DzAIhFU_.js';
import { a as isAboutSame } from '../../chunks/bundle-Dm9F5YQ1.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-ozUngJUV.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-AQD0uOCu.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../withSendbird.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-BlNFCGuE.js';
import '../../chunks/bundle-D1RBLAur.js';
import '../../chunks/bundle-CEdTfjQa.js';
import '../../chunks/bundle-BAzGFrnR.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BhlLFjHF.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DenfmdNl.js';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-mp0bcmQc.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DTjvrceX.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-C5rW8psz.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-DxM-SMP2.js';
import '@sendbird/chat/message';
import '../../ui/MobileMenu.js';
import '../../ui/ThreadReplies.js';
import '../../chunks/bundle-DhVASTH3.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-8Ilf1Buq.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-B8lf1xwE.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-DigmkgLn.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Bk_9JtoO.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../chunks/bundle-CE5Behab.js';
import './SuggestedReplies.js';
import '../../chunks/bundle-BeakbtZU.js';
import './FileViewer.js';
import '../../chunks/bundle-CZzv4QJI.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DR0mix_m.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-CTdzloCw.js';
import '../../chunks/bundle-DD_m7E5m.js';
import '../../Channel/utils/compareMessagesForGrouping.js';

var InfiniteList = forwardRef(function (props, listRef) {
    var messages = props.messages, renderMessage = props.renderMessage, scrollPositionRef = props.scrollPositionRef, scrollDistanceFromBottomRef = props.scrollDistanceFromBottomRef, onLoadPrevious = props.onLoadPrevious, onLoadNext = props.onLoadNext, _a = props.loadThreshold, loadThreshold = _a === void 0 ? 0.05 : _a, typingIndicator = props.typingIndicator, _b = props.onScrollPosition, onScrollPosition = _b === void 0 ? noop : _b, initDeps = props.initDeps;
    var isFetching = React__default.useRef(false);
    var direction = React__default.useRef();
    var oldScrollTop = useRef(0);
    // SideEffect: scroll to bottom on initialized
    useLayoutEffect(function () {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, initDeps);
    // SideEffect: keep scroll position
    useLayoutEffect(function () {
        if (listRef.current) {
            if (direction.current === 'top') {
                listRef.current.scrollTop = listRef.current.scrollHeight - scrollPositionRef.current;
            }
            if (direction.current === 'bottom') {
                listRef.current.scrollTop = oldScrollTop.current;
            }
            direction.current = undefined;
        }
    }, [listRef.current, messages.length]);
    var handleScroll = function () { return __awaiter(void 0, void 0, void 0, function () {
        var list, threshold;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!listRef.current)
                        return [2 /*return*/];
                    list = listRef.current;
                    onScrollPosition(getReachedStatus(list));
                    scrollPositionRef.current = list.scrollHeight - list.scrollTop;
                    scrollDistanceFromBottomRef.current = scrollPositionRef.current - list.clientHeight;
                    oldScrollTop.current = list.scrollTop;
                    if (isFetching.current)
                        return [2 /*return*/];
                    threshold = list.clientHeight * Math.min(Math.max(0, loadThreshold), 1);
                    if (!(list.scrollTop <= threshold)) return [3 /*break*/, 2];
                    isFetching.current = true;
                    direction.current = 'top';
                    return [4 /*yield*/, onLoadPrevious()];
                case 1:
                    _a.sent();
                    isFetching.current = false;
                    return [3 /*break*/, 5];
                case 2:
                    if (!(list.scrollHeight - list.scrollTop - list.clientHeight <= threshold)) return [3 /*break*/, 4];
                    isFetching.current = true;
                    direction.current = 'bottom';
                    return [4 /*yield*/, onLoadNext()];
                case 3:
                    _a.sent();
                    isFetching.current = false;
                    return [3 /*break*/, 5];
                case 4:
                    direction.current = undefined;
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement("div", { className: "sendbird-conversation__scroll-container" },
        React__default.createElement("div", { className: "sendbird-conversation__padding" }),
        React__default.createElement("div", { ref: listRef, className: "sendbird-conversation__messages-padding", "data-testid": "sendbird-message-list-container", onScroll: handleScroll },
            messages.map(function (message, index) { return renderMessage({ message: message, index: index }); }),
            typingIndicator)));
});
function getReachedStatus(element) {
    if (isAboutSame(element.scrollTop, 0, SCROLL_BUFFER)) {
        return 'top';
    }
    if (isAboutSame(element.scrollHeight, element.clientHeight + element.scrollTop, SCROLL_BUFFER)) {
        return 'bottom';
    }
    return 'middle';
}

var MessageList = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = props.className, className = _h === void 0 ? '' : _h;
    var _j = deleteNullish(props), _k = _j.renderMessage, renderMessage = _k === void 0 ? function (props) { return React__default.createElement(Message, __assign({}, props)); } : _k, renderMessageContent = _j.renderMessageContent, renderSuggestedReplies = _j.renderSuggestedReplies, renderCustomSeparator = _j.renderCustomSeparator, _l = _j.renderPlaceholderLoader, renderPlaceholderLoader = _l === void 0 ? function () { return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING }); } : _l, _m = _j.renderPlaceholderEmpty, renderPlaceholderEmpty = _m === void 0 ? function () { return React__default.createElement(PlaceHolder, { className: "sendbird-conversation__no-messages", type: PlaceHolderTypes.NO_MESSAGES }); } : _m, _o = _j.renderFrozenNotification, renderFrozenNotification = _o === void 0 ? function () { return React__default.createElement(FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _o;
    var _p = useGroupChannelContext(), channelUrl = _p.channelUrl, hasNext = _p.hasNext, loading = _p.loading, messages = _p.messages, newMessages = _p.newMessages, scrollToBottom = _p.scrollToBottom, isScrollBottomReached = _p.isScrollBottomReached, isMessageGroupingEnabled = _p.isMessageGroupingEnabled, scrollRef = _p.scrollRef, scrollDistanceFromBottomRef = _p.scrollDistanceFromBottomRef, scrollPositionRef = _p.scrollPositionRef, currentChannel = _p.currentChannel, replyType = _p.replyType, scrollPubSub = _p.scrollPubSub, loadNext = _p.loadNext, loadPrevious = _p.loadPrevious, setIsScrollBottomReached = _p.setIsScrollBottomReached, resetNewMessages = _p.resetNewMessages;
    var store = useSendbirdStateContext();
    var _q = useState(), unreadSinceDate = _q[0], setUnreadSinceDate = _q[1];
    useEffect(function () {
        if (isScrollBottomReached) {
            setUnreadSinceDate(undefined);
        }
        else {
            setUnreadSinceDate(new Date());
        }
    }, [isScrollBottomReached]);
    /**
     * 1. Move the message list scroll
     *    when each message's height is changed by `reactions` OR `showEdit`
     * 2. Keep the scrollBottom value after fetching new message list
     */
    var onMessageContentSizeChanged = function (isBottomMessageAffected) {
        if (isBottomMessageAffected === void 0) { isBottomMessageAffected = false; }
        var elem = scrollRef.current;
        if (elem) {
            var latestDistance = scrollDistanceFromBottomRef.current;
            var currentDistance = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
            if (latestDistance < currentDistance && (!isBottomMessageAffected || latestDistance < SCROLL_BUFFER)) {
                var diff = currentDistance - latestDistance;
                // Move the scroll as much as the height of the message has changed
                scrollPubSub.publish('scroll', { top: elem.scrollTop + diff, lazy: false, animated: false });
            }
        }
    };
    var renderer = {
        frozenNotification: function () {
            if (!currentChannel || !currentChannel.isFrozen)
                return null;
            return renderFrozenNotification();
        },
        unreadMessagesNotification: function () {
            if (isScrollBottomReached || !unreadSinceDate)
                return null;
            return (React__default.createElement(UnreadCount, { className: "sendbird-conversation__messages__notification", count: newMessages.length, lastReadAt: unreadSinceDate, onClick: function () { return scrollToBottom(); } }));
        },
        scrollToBottomButton: function () {
            if (!hasNext() && isScrollBottomReached)
                return null;
            return (React__default.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: function () { return scrollToBottom(); }, onKeyDown: function () { return scrollToBottom(); }, tabIndex: 0, role: "button" },
                React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.CHEVRON_DOWN, fillColor: IconColors.PRIMARY })));
        },
    };
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (messages.length === 0) {
        return renderPlaceholderEmpty();
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "sendbird-conversation__messages ".concat(className), dir: getHTMLTextDirection((_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.htmlTextDirection, (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.forceLeftToRightMessageLayout) },
            React__default.createElement(InfiniteList, { ref: scrollRef, initDeps: [channelUrl], scrollPositionRef: scrollPositionRef, scrollDistanceFromBottomRef: scrollDistanceFromBottomRef, onLoadNext: loadNext, onLoadPrevious: loadPrevious, onScrollPosition: function (it) {
                    var isScrollBottomReached = it === 'bottom';
                    if (newMessages.length > 0 && isScrollBottomReached) {
                        resetNewMessages();
                    }
                    setIsScrollBottomReached(isScrollBottomReached);
                }, messages: messages, renderMessage: function (_a) {
                    var message = _a.message, index = _a.index;
                    var _b = getMessagePartsInfo({
                        allMessages: messages,
                        replyType: replyType !== null && replyType !== void 0 ? replyType : 'NONE',
                        isMessageGroupingEnabled: isMessageGroupingEnabled !== null && isMessageGroupingEnabled !== void 0 ? isMessageGroupingEnabled : false,
                        currentIndex: index,
                        currentMessage: message,
                        currentChannel: currentChannel,
                    }), chainTop = _b.chainTop, chainBottom = _b.chainBottom, hasSeparator = _b.hasSeparator;
                    var isOutgoingMessage = isSendableMessage(message) && message.sender.userId === store.config.userId;
                    return (React__default.createElement(MessageProvider, { message: message, key: getComponentKeyFromMessage(message), isByMe: isOutgoingMessage }, renderMessage({
                        handleScroll: onMessageContentSizeChanged,
                        message: message,
                        hasSeparator: hasSeparator,
                        chainTop: chainTop,
                        chainBottom: chainBottom,
                        renderMessageContent: renderMessageContent,
                        renderSuggestedReplies: renderSuggestedReplies,
                        renderCustomSeparator: renderCustomSeparator,
                    })));
                }, typingIndicator: !hasNext()
                    && ((_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.enableTypingIndicator)
                    && ((_g = (_f = (_e = store === null || store === void 0 ? void 0 : store.config) === null || _e === void 0 ? void 0 : _e.groupChannel) === null || _f === void 0 ? void 0 : _f.typingIndicatorTypes) === null || _g === void 0 ? void 0 : _g.has(TypingIndicatorType.Bubble)) && (React__default.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged })) }),
            React__default.createElement(React__default.Fragment, null, renderer.frozenNotification()),
            React__default.createElement(React__default.Fragment, null, renderer.unreadMessagesNotification()),
            React__default.createElement(React__default.Fragment, null, renderer.scrollToBottomButton()))));
};
var TypingIndicatorBubbleWrapper = function (props) {
    var stores = useSendbirdStateContext().stores;
    var _a = useState([]), typingMembers = _a[0], setTypingMembers = _a[1];
    useGroupChannelHandler(stores.sdkStore.sdk, {
        onTypingStatusUpdated: function (channel) {
            if (channel.url === props.channelUrl) {
                setTypingMembers(channel.getTypingUsers());
            }
        },
    });
    return React__default.createElement(TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: props.handleScroll });
};

export { MessageList, MessageList as default };
//# sourceMappingURL=MessageList.js.map