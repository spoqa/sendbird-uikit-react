import React__default, { useMemo, useState, useRef } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-CoXgb0Rb.js';
import { g as getChannelTitle } from '../../chunks/bundle-BPh65ylY.js';
import { useThreadContext } from '../context.js';
import ParentMessageInfo from './ParentMessageInfo.js';
import ThreadHeader from './ThreadHeader.js';
import ThreadList from './ThreadList.js';
import ThreadMessageInput from './ThreadMessageInput.js';
import { ParentMessageStateTypes, ThreadListStateTypes } from '../context/types.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ozUngJUV.js';
import { i as isAboutSame } from '../../chunks/bundle-DZkmyY7M.js';
import { MessageProvider } from '../../Message/context.js';
import { M as getHTMLTextDirection } from '../../chunks/bundle-hVzh_gnK.js';
import { c as classnames } from '../../chunks/bundle-CSGqtO-d.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-mp0bcmQc.js';
import 'react-dom';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-DSUBvaRO.js';
import '../../chunks/bundle-BCJ-Fh04.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-Bhr_TR2L.js';
import '../../chunks/bundle-DD_m7E5m.js';
import './ParentMessageInfoItem.js';
import '../../ui/ImageRenderer.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DenfmdNl.js';
import '../../ui/BottomSheet.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-C5rW8psz.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-8Ilf1Buq.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-B8lf1xwE.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-DigmkgLn.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '../../chunks/bundle-D1GtYFN4.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DDj8n5of.js';
import '../../ui/MobileMenu.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-BAzGFrnR.js';
import '../../chunks/bundle-CE5Behab.js';
import '../../ui/Header.js';
import './ThreadListItem.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-BlNFCGuE.js';
import '../../chunks/bundle-D1RBLAur.js';
import '../../chunks/bundle-CEdTfjQa.js';
import '../../chunks/bundle-DhVASTH3.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-DxM-SMP2.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Bk_9JtoO.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-DzAIhFU_.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import '../../chunks/bundle-C6UYwUVp.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-D0c3GRrq.js';
import '../../chunks/bundle-D0Hg0HP0.js';
import '../../GroupChannel/context.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-DR0mix_m.js';
import '../../Channel/hooks/useHandleUploadFiles.js';

var useMemorizedHeader = function (_a) {
    var renderHeader = _a.renderHeader;
    return useMemo(function () {
        if (typeof renderHeader === 'function') {
            return renderHeader();
        }
        return null;
    }, [renderHeader]);
};

var useMemorizedParentMessageInfo = function (_a) {
    var parentMessage = _a.parentMessage, parentMessageState = _a.parentMessageState, renderParentMessageInfo = _a.renderParentMessageInfo, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder;
    return useMemo(function () {
        if (parentMessageState === ParentMessageStateTypes.NIL
            || parentMessageState === ParentMessageStateTypes.LOADING
            || parentMessageState === ParentMessageStateTypes.INVALID) {
            if (typeof renderParentMessageInfoPlaceholder === 'function') {
                return renderParentMessageInfoPlaceholder(parentMessageState);
            }
            switch (parentMessageState) {
                case ParentMessageStateTypes.NIL: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-nil", type: PlaceHolderTypes.NO_RESULTS, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                default: {
                    return null;
                }
            }
        }
        else if (parentMessageState === ParentMessageStateTypes.INITIALIZED) {
            if (typeof renderParentMessageInfo === 'function') {
                return renderParentMessageInfo();
            }
        }
        return null;
    }, [
        parentMessage,
        parentMessageState,
        renderParentMessageInfo,
        renderParentMessageInfoPlaceholder,
    ]);
};

var useMemorizedThreadList = function (_a) {
    var threadListState = _a.threadListState, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder;
    return useMemo(function () {
        if (threadListState === ThreadListStateTypes.NIL
            || threadListState === ThreadListStateTypes.LOADING
            || threadListState === ThreadListStateTypes.INVALID) {
            if (typeof renderThreadListPlaceHolder === 'function') {
                return renderThreadListPlaceHolder(threadListState);
            }
            switch (threadListState) {
                case ThreadListStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ThreadListStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                case ThreadListStateTypes.NIL: {
                    return React__default.createElement(React__default.Fragment, null);
                }
                default: {
                    return null;
                }
            }
        }
        return null;
    }, [
        threadListState,
        renderThreadListPlaceHolder,
    ]);
};

var ThreadUI = function (_a) {
    var _b, _c, _d, _e;
    var renderHeader = _a.renderHeader, _f = _a.renderParentMessageInfo, renderParentMessageInfo = _f === void 0 ? function () { return React__default.createElement(ParentMessageInfo, { className: "sendbird-thread-ui__parent-message-info" }); } : _f, renderMessage = _a.renderMessage, renderMessageInput = _a.renderMessageInput, renderCustomSeparator = _a.renderCustomSeparator, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder, renderFileUploadIcon = _a.renderFileUploadIcon, renderVoiceMessageIcon = _a.renderVoiceMessageIcon, renderSendMessageIcon = _a.renderSendMessageIcon;
    var _g = useSendbirdStateContext(), stores = _g.stores, config = _g.config;
    var currentUserId = (_d = (_c = (_b = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk) === null || _c === void 0 ? void 0 : _c.currentUser) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = useLocalization().stringSet;
    var _h = useThreadContext(), currentChannel = _h.currentChannel, allThreadMessages = _h.allThreadMessages, parentMessage = _h.parentMessage, parentMessageState = _h.parentMessageState, threadListState = _h.threadListState, hasMorePrev = _h.hasMorePrev, hasMoreNext = _h.hasMoreNext, fetchPrevThreads = _h.fetchPrevThreads, fetchNextThreads = _h.fetchNextThreads, onHeaderActionClick = _h.onHeaderActionClick, onMoveToParentMessage = _h.onMoveToParentMessage;
    var replyCount = allThreadMessages.length;
    var isByMe = currentUserId === ((_e = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _e === void 0 ? void 0 : _e.userId);
    // Memoized custom components
    var MemorizedHeader = useMemorizedHeader({ renderHeader: renderHeader });
    var MemorizedParentMessageInfo = useMemorizedParentMessageInfo({
        parentMessage: parentMessage,
        parentMessageState: parentMessageState,
        renderParentMessageInfo: renderParentMessageInfo,
        renderParentMessageInfoPlaceholder: renderParentMessageInfoPlaceholder,
    });
    var MemorizedThreadList = useMemorizedThreadList({
        threadListState: threadListState,
        renderThreadListPlaceHolder: renderThreadListPlaceHolder,
    });
    // scroll
    var _j = useState(0), scrollBottom = _j[0], setScrollBottom = _j[1];
    var scrollRef = useRef(null);
    var onScroll = function (e) {
        var _a;
        var element = e.target;
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        var threadItemNodes = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.sendbird-thread-list-item');
        var firstNode = threadItemNodes === null || threadItemNodes === void 0 ? void 0 : threadItemNodes[0];
        if (isAboutSame(scrollTop, 0, 10) && hasMorePrev) {
            fetchPrevThreads(function (messages) {
                var _a;
                if (messages) {
                    try {
                        (_a = firstNode === null || firstNode === void 0 ? void 0 : firstNode.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(firstNode, { block: 'start', inline: 'nearest' });
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        if (isAboutSame(clientHeight + scrollTop, scrollHeight, 10) && hasMoreNext) {
            var scrollTop_1 = scrollTop;
            fetchNextThreads(function (messages) {
                if (messages) {
                    try {
                        element.scrollTop = scrollTop_1;
                        if (scrollRef.current) {
                            scrollRef.current.scrollTop = scrollTop_1;
                        }
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        // save the lastest scroll bottom value
        if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
            var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
            setScrollBottom(current.scrollHeight - current.scrollTop - current.offsetHeight);
        }
    };
    return (React__default.createElement("div", { className: 'sendbird-thread-ui' },
        MemorizedHeader || (React__default.createElement(ThreadHeader, { className: "sendbird-thread-ui__header", channelName: getChannelTitle(currentChannel, currentUserId !== null && currentUserId !== void 0 ? currentUserId : '', stringSet), onActionIconClick: onHeaderActionClick, onChannelNameClick: function () {
                onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
            } })),
        React__default.createElement("div", { className: classnames('sendbird-thread-ui--scroll', 'sendbird-conversation__messages'), ref: scrollRef, onScroll: onScroll, dir: getHTMLTextDirection(config === null || config === void 0 ? void 0 : config.htmlTextDirection, config === null || config === void 0 ? void 0 : config.forceLeftToRightMessageLayout) },
            React__default.createElement(MessageProvider, { message: parentMessage, isByMe: isByMe }, MemorizedParentMessageInfo),
            replyCount > 0 && (React__default.createElement("div", { className: "sendbird-thread-ui__reply-counts" },
                React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, "".concat(replyCount, " ").concat(replyCount > 1 ? stringSet.THREAD__THREAD_REPLIES : stringSet.THREAD__THREAD_REPLY)))),
            MemorizedThreadList || (React__default.createElement(ThreadList, { className: "sendbird-thread-ui__thread-list", renderMessage: renderMessage, renderCustomSeparator: renderCustomSeparator, scrollRef: scrollRef, scrollBottom: scrollBottom }))),
        (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || (React__default.createElement(ThreadMessageInput, { className: "sendbird-thread-ui__message-input", renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

export { ThreadUI as default };
//# sourceMappingURL=ThreadUI.js.map
