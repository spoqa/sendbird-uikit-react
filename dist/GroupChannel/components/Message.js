import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default from 'react';
import { useIIFE } from '@sendbird/uikit-tools';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { k as isSendableMessage, g as getSuggestedReplies } from '../../chunks/bundle-hVzh_gnK.js';
import { i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted } from '../../chunks/bundle-DzAIhFU_.js';
import { useGroupChannelContext } from '../context.js';
import { M as MessageView } from '../../chunks/bundle-AQD0uOCu.js';
import { FileViewer } from './FileViewer.js';
import { RemoveMessageModal } from './RemoveMessageModal.js';
import { T as ThreadReplySelectType } from '../../chunks/bundle-CF14vYFB.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-GlbqlLGi.js';
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
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DR0mix_m.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-C5rW8psz.js';
import '../../chunks/bundle-DGIMAot8.js';
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
import './SuggestedReplies.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-CZzv4QJI.js';
import '../../chunks/bundle-CTdzloCw.js';
import '../../chunks/bundle-DD_m7E5m.js';

var Message = function (props) {
    var _a = useSendbirdStateContext(), config = _a.config, emojiManager = _a.emojiManager;
    var _b = useGroupChannelContext(), loading = _b.loading, currentChannel = _b.currentChannel, animatedMessageId = _b.animatedMessageId, setAnimatedMessageId = _b.setAnimatedMessageId, scrollToMessage = _b.scrollToMessage, replyType = _b.replyType, threadReplySelectType = _b.threadReplySelectType, isReactionEnabled = _b.isReactionEnabled, toggleReaction = _b.toggleReaction, nicknamesMap = _b.nicknamesMap, setQuoteMessage = _b.setQuoteMessage, renderUserMentionItem = _b.renderUserMentionItem, filterEmojiCategoryIds = _b.filterEmojiCategoryIds, onQuoteMessageClick = _b.onQuoteMessageClick, onReplyInThreadClick = _b.onReplyInThreadClick, onMessageAnimated = _b.onMessageAnimated, onBeforeDownloadFileMessage = _b.onBeforeDownloadFileMessage, messages = _b.messages, updateUserMessage = _b.updateUserMessage, sendUserMessage = _b.sendUserMessage, resendMessage = _b.resendMessage, deleteMessage = _b.deleteMessage;
    var message = props.message;
    var initialized = !loading && Boolean(currentChannel);
    var shouldRenderSuggestedReplies = useIIFE(function () {
        var _a = config.groupChannel, enableSuggestedReplies = _a.enableSuggestedReplies, showSuggestedRepliesFor = _a.showSuggestedRepliesFor;
        // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
        // because lastMessage is not updated when **Bot** sends messages
        var lastMessageInView = messages[messages.length - 1];
        var hasUnsentMessage = isSendableMessage(lastMessageInView) && lastMessageInView.sendingStatus !== 'succeeded';
        var showSuggestedReplies = showSuggestedRepliesFor === 'all_messages'
            ? true
            : message.messageId === lastMessageInView.messageId;
        return enableSuggestedReplies && getSuggestedReplies(message).length > 0 && !hasUnsentMessage && showSuggestedReplies;
    });
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentChannel, emojiContainer: emojiManager.emojiContainer, editInputDisabled: !initialized
            || isDisabledBecauseFrozen(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || isDisabledBecauseMuted(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || !config.isOnline, shouldRenderSuggestedReplies: shouldRenderSuggestedReplies, isReactionEnabled: isReactionEnabled !== null && isReactionEnabled !== void 0 ? isReactionEnabled : false, replyType: replyType !== null && replyType !== void 0 ? replyType : 'NONE', threadReplySelectType: threadReplySelectType !== null && threadReplySelectType !== void 0 ? threadReplySelectType : ThreadReplySelectType.PARENT, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, filterEmojiCategoryIds: filterEmojiCategoryIds, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThreadClick, sendUserMessage: sendUserMessage, updateUserMessage: updateUserMessage, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); }, usedInLegacy: false, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })));
};

export { Message, Message as default };
//# sourceMappingURL=Message.js.map
