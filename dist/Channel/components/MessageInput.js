import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-C6UYwUVp.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-DzAIhFU_.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-ozUngJUV.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-CSGqtO-d.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../chunks/bundle-BhlLFjHF.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-DxM-SMP2.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-mp0bcmQc.js';
import 'react-dom';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-D0c3GRrq.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../chunks/bundle-D0Hg0HP0.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-C5rW8psz.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../chunks/bundle-DSUBvaRO.js';
import '../../chunks/bundle-BCJ-Fh04.js';
import '../../chunks/bundle-Cjuwgydf.js';
import '../../chunks/bundle-De3kTvCq.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DZkmyY7M.js';

var MessageInputWrapper = function (props) {
    var context = useChannelContext();
    var quoteMessage = context.quoteMessage, currentGroupChannel = context.currentGroupChannel, sendMessage = context.sendMessage, sendFileMessage = context.sendFileMessage, sendVoiceMessage = context.sendVoiceMessage, sendMultipleFilesMessage = context.sendMultipleFilesMessage;
    return (React__default.createElement(MessageInputWrapperView, __assign({}, props, context, { currentChannel: currentGroupChannel, messages: context.allMessages, sendUserMessage: function (params) {
            return sendMessage({
                message: params.message,
                mentionTemplate: params.mentionedMessageTemplate,
                mentionedUsers: params.mentionedUsers,
                quoteMessage: quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined,
            });
        }, sendFileMessage: function (params) {
            return sendFileMessage(params.file, quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        }, sendVoiceMessage: function (_a, duration) {
            var file = _a.file;
            return sendVoiceMessage(file, duration, quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        }, sendMultipleFilesMessage: function (_a) {
            var fileInfoList = _a.fileInfoList;
            return sendMultipleFilesMessage(fileInfoList.map(function (fileInfo) { return fileInfo.file; }), quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        } })));
};

export { MessageInputWrapper, MessageInputWrapper as default };
//# sourceMappingURL=MessageInput.js.map
