import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default from 'react';
import ThreadListItem from './ThreadListItem.js';
import { useThreadContext } from '../context.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { isSameDay } from 'date-fns';
import { MessageProvider } from '../../Message/context.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../chunks/bundle-ozUngJUV.js';
import '../../chunks/bundle-Bhr_TR2L.js';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-CSGqtO-d.js';
import 'react-dom';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DD_m7E5m.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../chunks/bundle-DigmkgLn.js';
import '../../chunks/bundle-D1GtYFN4.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../context/types.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DenfmdNl.js';
import '../../chunks/bundle-BlNFCGuE.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-D1RBLAur.js';
import '../../chunks/bundle-CEdTfjQa.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-C5rW8psz.js';
import '../../ui/MobileMenu.js';
import '../../chunks/bundle-B8lf1xwE.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BAzGFrnR.js';
import '../../chunks/bundle-CE5Behab.js';
import '../../chunks/bundle-DhVASTH3.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-8Ilf1Buq.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-DxM-SMP2.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Bk_9JtoO.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-DzAIhFU_.js';
import '../../chunks/bundle-DDj8n5of.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-DZkmyY7M.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '../../chunks/bundle-DSUBvaRO.js';
import '../../chunks/bundle-BCJ-Fh04.js';

function ThreadList(_a) {
    var className = _a.className, _b = _a.renderMessage, renderMessage = _b === void 0 ? function (props) { return React__default.createElement(ThreadListItem, __assign({}, props)); } : _b, renderCustomSeparator = _a.renderCustomSeparator, scrollRef = _a.scrollRef, scrollBottom = _a.scrollBottom;
    var config = useSendbirdStateContext().config;
    var userId = config.userId;
    var _c = useThreadContext(), currentChannel = _c.currentChannel, allThreadMessages = _c.allThreadMessages, localThreadMessages = _c.localThreadMessages;
    return (React__default.createElement("div", { className: "sendbird-thread-list ".concat(className) },
        allThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = allThreadMessages[idx - 1];
            var nextMessage = allThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current && scrollBottom) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
                renderCustomSeparator: renderCustomSeparator,
                handleScroll: handleScroll,
            })));
        }),
        localThreadMessages.map(function (message) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
                message: message,
                hasSeparator: false,
                renderCustomSeparator: renderCustomSeparator,
                handleScroll: handleScroll,
            })));
        })));
}

export { ThreadList as default };
//# sourceMappingURL=ThreadList.js.map
