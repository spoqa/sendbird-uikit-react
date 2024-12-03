import React__default from 'react';
import { u as useOpenChannelContext } from '../../chunks/bundle-13qLWBHK.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-CSGqtO-d.js';
import 'react-dom';
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
import '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BCJ-Fh04.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-D0Hg0HP0.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-hr_U44Gf.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CEdTfjQa.js';
import './OpenChannelMessage.js';
import '../../chunks/bundle-DGIMAot8.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-CU1Svrnb.js';
import '../../chunks/bundle-BavKeSc4.js';
import '../../chunks/bundle-DenfmdNl.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-8Ilf1Buq.js';
import '../../Message/context.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-DigmkgLn.js';
import '../../chunks/bundle-DD_m7E5m.js';
import '../../chunks/bundle-BUgM926U.js';
import '../../chunks/bundle-CbigpPWg.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '@sendbird/chat/message';
import '../../Channel/utils/compareMessagesForGrouping.js';

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.createElement(OpenchannelConversationHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React__default.createElement(FrozenNotification, null),
        React__default.createElement(OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React__default.createElement(OpenChannelInput, { ref: messageInputRef })));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelUI.js.map
