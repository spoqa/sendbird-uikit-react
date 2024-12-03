'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-8lqFENCn.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-DiIxiEgV.js');
var utils = require('../../chunks/bundle-MabvJwZE.js');
var GroupChannel_context = require('../context.js');
var MessageView = require('../../chunks/bundle-CxNoxiae.js');
var GroupChannel_components_FileViewer = require('./FileViewer.js');
var GroupChannel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
var _const = require('../../chunks/bundle-Bgprrbe3.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dpym1DIx.js');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('react-dom');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-C4475KDA.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-0ybiannE.js');
require('../../chunks/bundle-D_OV7UYj.js');
require('../../chunks/bundle-B1YHU5aC.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-CWCj9v3j.js');
require('../../chunks/bundle-Ch-SV_mC.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CIGEu-M8.js');
require('../../chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('../../chunks/bundle-DNYU-n0R.js');
require('../../chunks/bundle-Cpzu_F_c.js');
require('../../chunks/bundle-YryjcbxB.js');
require('../../chunks/bundle-kho6esBq.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-DE6Bjqja.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Bfsxi3N_.js');
require('../../chunks/bundle-CyjbhYln.js');
require('../../chunks/bundle-4UFjQp2e.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-B8SVf9Ei.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-CIgNQEW3.js');
require('../../ui/MobileMenu.js');
require('../../ui/ThreadReplies.js');
require('../../chunks/bundle-CsEPV-q1.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-D14ErjFX.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-5qef1An_.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-CxCCWx-V.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-BPWzmNxo.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../chunks/bundle-yirzwLsr.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-Bgg-hsK-.js');
require('../../chunks/bundle-ORABwqqd.js');
require('../../chunks/bundle-Lrti0OEF.js');
require('../../chunks/bundle-BjEM1mIu.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var Message = function (props) {
    var _a = useSendbirdStateContext.useSendbirdStateContext(), config = _a.config, emojiManager = _a.emojiManager;
    var _b = GroupChannel_context.useGroupChannelContext(), loading = _b.loading, currentChannel = _b.currentChannel, animatedMessageId = _b.animatedMessageId, setAnimatedMessageId = _b.setAnimatedMessageId, scrollToMessage = _b.scrollToMessage, replyType = _b.replyType, threadReplySelectType = _b.threadReplySelectType, isReactionEnabled = _b.isReactionEnabled, toggleReaction = _b.toggleReaction, nicknamesMap = _b.nicknamesMap, setQuoteMessage = _b.setQuoteMessage, renderUserMentionItem = _b.renderUserMentionItem, filterEmojiCategoryIds = _b.filterEmojiCategoryIds, onQuoteMessageClick = _b.onQuoteMessageClick, onReplyInThreadClick = _b.onReplyInThreadClick, onMessageAnimated = _b.onMessageAnimated, onBeforeDownloadFileMessage = _b.onBeforeDownloadFileMessage, messages = _b.messages, updateUserMessage = _b.updateUserMessage, sendUserMessage = _b.sendUserMessage, resendMessage = _b.resendMessage, deleteMessage = _b.deleteMessage;
    var message = props.message;
    var initialized = !loading && Boolean(currentChannel);
    var shouldRenderSuggestedReplies = uikitTools.useIIFE(function () {
        var _a = config.groupChannel, enableSuggestedReplies = _a.enableSuggestedReplies, showSuggestedRepliesFor = _a.showSuggestedRepliesFor;
        // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
        // because lastMessage is not updated when **Bot** sends messages
        var lastMessageInView = messages[messages.length - 1];
        var hasUnsentMessage = index.isSendableMessage(lastMessageInView) && lastMessageInView.sendingStatus !== 'succeeded';
        var showSuggestedReplies = showSuggestedRepliesFor === 'all_messages'
            ? true
            : message.messageId === lastMessageInView.messageId;
        return enableSuggestedReplies && index.getSuggestedReplies(message).length > 0 && !hasUnsentMessage && showSuggestedReplies;
    });
    return (React__default.default.createElement(MessageView.MessageView, _tslib.__assign({}, props, { channel: currentChannel, emojiContainer: emojiManager.emojiContainer, editInputDisabled: !initialized
            || utils.isDisabledBecauseFrozen(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || utils.isDisabledBecauseMuted(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || !config.isOnline, shouldRenderSuggestedReplies: shouldRenderSuggestedReplies, isReactionEnabled: isReactionEnabled !== null && isReactionEnabled !== void 0 ? isReactionEnabled : false, replyType: replyType !== null && replyType !== void 0 ? replyType : 'NONE', threadReplySelectType: threadReplySelectType !== null && threadReplySelectType !== void 0 ? threadReplySelectType : _const.ThreadReplySelectType.PARENT, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, filterEmojiCategoryIds: filterEmojiCategoryIds, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThreadClick, sendUserMessage: sendUserMessage, updateUserMessage: updateUserMessage, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.default.createElement(GroupChannel_components_FileViewer.FileViewer, _tslib.__assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.default.createElement(GroupChannel_components_RemoveMessageModal.RemoveMessageModal, _tslib.__assign({}, props)); }, usedInLegacy: false, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })));
};

exports.Message = Message;
exports.default = Message;
//# sourceMappingURL=Message.js.map
