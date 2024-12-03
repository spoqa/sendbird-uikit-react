'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./chunks/bundle-8lqFENCn.js');
var React = require('react');
var GroupChannel_context = require('./GroupChannel/context.js');
var GroupChannel_components_GroupChannelUI = require('./GroupChannel/components/GroupChannelUI.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('./chunks/bundle-Dpym1DIx.js');
require('./withSendbird.js');
require('./chunks/bundle-mOf92gcC.js');
require('./chunks/bundle-DiIxiEgV.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-D7Mdigg1.js');
require('./chunks/bundle-CmvLtQdY.js');
require('./chunks/bundle-BB49PpRR.js');
require('./chunks/bundle-C2B_FD-S.js');
require('react-dom');
require('./chunks/bundle-CNFrX8wi.js');
require('./chunks/bundle-DPH5liyx.js');
require('./chunks/bundle-C4475KDA.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-DLuC20f2.js');
require('./ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BDLZ01qm.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-KogLMh5_.js');
require('./ui/SortByRow.js');
require('./chunks/bundle-0ybiannE.js');
require('./chunks/bundle-D_OV7UYj.js');
require('./chunks/bundle-MabvJwZE.js');
require('./chunks/bundle-Bgprrbe3.js');
require('./chunks/bundle-B1YHU5aC.js');
require('./chunks/bundle-CnbBBusa.js');
require('./chunks/bundle-CWCj9v3j.js');
require('./chunks/bundle-5EzTwUuk.js');
require('./GroupChannel/components/TypingIndicator.js');
require('./chunks/bundle-Cv75E4ZW.js');
require('./ui/ConnectionStatus.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./GroupChannel/components/GroupChannelHeader.js');
require('./chunks/bundle-BXeAAQbL.js');
require('./ui/ChannelAvatar.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./chunks/bundle-B-KBdgGO.js');
require('./chunks/bundle-NEY4G5Ta.js');
require('./ui/Header.js');
require('./ui/TextButton.js');
require('./chunks/bundle-l8Gusx3D.js');
require('./GroupChannel/components/MessageList.js');
require('./GroupChannel/components/Message.js');
require('./chunks/bundle-CxNoxiae.js');
require('./chunks/bundle-Ch-SV_mC.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./ui/DateSeparator.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-CIGEu-M8.js');
require('./chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('./chunks/bundle-DNYU-n0R.js');
require('./chunks/bundle-Cpzu_F_c.js');
require('./chunks/bundle-YryjcbxB.js');
require('./chunks/bundle-kho6esBq.js');
require('./ui/MessageContent.js');
require('./chunks/bundle-DE6Bjqja.js');
require('./chunks/bundle-Bfsxi3N_.js');
require('./chunks/bundle-CyjbhYln.js');
require('./chunks/bundle-4UFjQp2e.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-B8SVf9Ei.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./ui/AdminMessage.js');
require('./ui/QuoteMessage.js');
require('./chunks/bundle-CIgNQEW3.js');
require('./ui/MobileMenu.js');
require('./ui/ThreadReplies.js');
require('./chunks/bundle-CsEPV-q1.js');
require('./ui/OGMessageItemBody.js');
require('./chunks/bundle-D14ErjFX.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./ui/TextMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./chunks/bundle-5qef1An_.js');
require('./ui/FileViewer.js');
require('./chunks/bundle-CxCCWx-V.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/TemplateMessageItemBody.js');
require('./chunks/bundle-BPWzmNxo.js');
require('./ui/FallbackTemplateMessageItemBody.tsx.js');
require('./ui/LoadingTemplateMessageItemBody.tsx.js');
require('./ui/MessageFeedbackFailedModal.js');
require('./ui/FeedbackIconButton.js');
require('./ui/MobileFeedbackMenu.js');
require('./ui/MessageFeedbackModal.js');
require('./ui/Input.js');
require('./chunks/bundle-yirzwLsr.js');
require('./GroupChannel/components/SuggestedReplies.js');
require('./chunks/bundle-Bgg-hsK-.js');
require('./GroupChannel/components/FileViewer.js');
require('./chunks/bundle-ORABwqqd.js');
require('./GroupChannel/components/RemoveMessageModal.js');
require('./chunks/bundle-Lrti0OEF.js');
require('./chunks/bundle-BjEM1mIu.js');
require('./GroupChannel/components/UnreadCount.js');
require('./GroupChannel/components/FrozenNotification.js');
require('./ui/TypingIndicatorBubble.js');
require('./Channel/utils/getMessagePartsInfo.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./chunks/bundle-D0fVLgqP.js');
require('./GroupChannel/components/MessageInputWrapper.js');
require('./chunks/bundle-BdGAi-Uf.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-CjeiLE3a.js');
require('./chunks/bundle-IM9ReYMH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannel = function (props) {
    return (React__default.default.createElement(GroupChannel_context.GroupChannelProvider, _tslib.__assign({}, props),
        React__default.default.createElement(GroupChannel_components_GroupChannelUI.GroupChannelUI, _tslib.__assign({}, props))));
};

exports.GroupChannel = GroupChannel;
exports.default = GroupChannel;
//# sourceMappingURL=GroupChannel.js.map