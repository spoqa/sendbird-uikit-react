import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-hVzh_gnK.js';
import { b as isDisabledBecauseFrozen, c as isDisabledBecauseMuted } from '../../chunks/bundle-Dm9F5YQ1.js';
import { M as MessageView } from '../../chunks/bundle-AQD0uOCu.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-CSGqtO-d.js';
import 'react-dom';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-ozUngJUV.js';
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
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-C5rW8psz.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DSUBvaRO.js';
import '../../chunks/bundle-BCJ-Fh04.js';
import '../../chunks/bundle-Cjuwgydf.js';
import '../../chunks/bundle-De3kTvCq.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DZkmyY7M.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DzAIhFU_.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-BlNFCGuE.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-D1RBLAur.js';
import '../../chunks/bundle-CEdTfjQa.js';
import '../../chunks/bundle-BAzGFrnR.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-DenfmdNl.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-DxM-SMP2.js';
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
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-CZzv4QJI.js';
import '../../chunks/bundle-CTdzloCw.js';
import '../../chunks/bundle-DD_m7E5m.js';

var Message = function (props) {
    var _a, _b;
    var config = useSendbirdStateContext().config;
    var _c = useChannelContext(), initialized = _c.initialized, currentGroupChannel = _c.currentGroupChannel, animatedMessageId = _c.animatedMessageId, setAnimatedMessageId = _c.setAnimatedMessageId, updateMessage = _c.updateMessage, scrollToMessage = _c.scrollToMessage, replyType = _c.replyType, threadReplySelectType = _c.threadReplySelectType, isReactionEnabled = _c.isReactionEnabled, toggleReaction = _c.toggleReaction, emojiContainer = _c.emojiContainer, nicknamesMap = _c.nicknamesMap, setQuoteMessage = _c.setQuoteMessage, resendMessage = _c.resendMessage, deleteMessage = _c.deleteMessage, renderUserMentionItem = _c.renderUserMentionItem, onReplyInThread = _c.onReplyInThread, onQuoteMessageClick = _c.onQuoteMessageClick, onMessageAnimated = _c.onMessageAnimated, sendMessage = _c.sendMessage, localMessages = _c.localMessages, allMessages = _c.allMessages;
    var message = props.message;
    if (!currentGroupChannel)
        return null;
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || isDisabledBecauseFrozen(currentGroupChannel) || isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
            && (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === allMessages[allMessages.length - 1].messageId
            // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
            // because lastMessage is not updated when **Bot** sends messages
            )
            // the options should appear only when there's no failed or pending messages
            && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0
            && getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
            sendMessage({
                message: params.message,
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, updateUserMessage: function (messageId, params) {
            var _a;
            updateMessage({
                messageId: messageId,
                message: (_a = params.message) !== null && _a !== void 0 ? _a : '',
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); } })));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
