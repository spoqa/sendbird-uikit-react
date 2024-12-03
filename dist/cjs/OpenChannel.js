'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./chunks/bundle-m7ytwpyW.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./chunks/bundle-CNFrX8wi.js');
require('./chunks/bundle-8lqFENCn.js');
require('./chunks/bundle-DPH5liyx.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-CIGEu-M8.js');
require('./chunks/bundle-Bgprrbe3.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-DLuC20f2.js');
require('./chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('./chunks/bundle-DNYU-n0R.js');
require('./chunks/bundle-Cpzu_F_c.js');
require('./chunks/bundle-YryjcbxB.js');
require('./ui/Icon.js');
require('./chunks/bundle-C2B_FD-S.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-D7Mdigg1.js');
require('./chunks/bundle-CmvLtQdY.js');
require('./chunks/bundle-BB49PpRR.js');
require('./chunks/bundle-kho6esBq.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./chunks/bundle-C4475KDA.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./chunks/bundle-CyjbhYln.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./chunks/bundle-Ch-SV_mC.js');
require('./ui/OpenchannelUserMessage.js');
require('./chunks/bundle-KogLMh5_.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./ui/SortByRow.js');
require('./chunks/bundle-g72Ialyc.js');
require('./ui/UserProfile.js');
require('./chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('./chunks/bundle-mOf92gcC.js');
require('css-vars-ponyfill');
require('./chunks/bundle-BDLZ01qm.js');
require('./sendbirdSelectors.js');
require('./chunks/bundle-CnbBBusa.js');
require('./chunks/bundle-BNWGP_DJ.js');
require('./chunks/bundle-6X4nvLqa.js');
require('./chunks/bundle-B8SVf9Ei.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-D14ErjFX.js');
require('./Message/context.js');
require('./ui/MentionLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./chunks/bundle-l8Gusx3D.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./chunks/bundle-CxCCWx-V.js');
require('./chunks/bundle-BjEM1mIu.js');
require('./chunks/bundle-Dlvh67yI.js');
require('./chunks/bundle-DbUBJ44g.js');
require('./chunks/bundle-D0fVLgqP.js');
require('@sendbird/chat/message');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./chunks/bundle-8ZWsPCOg.js');
require('./chunks/bundle-IM9ReYMH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannel = function (props) {
    return (React__default.default.createElement(OpenChannel_context.OpenChannelProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled, queries: props === null || props === void 0 ? void 0 : props.queries, messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit, onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage, onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage, onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile, onBackClick: props === null || props === void 0 ? void 0 : props.onBackClick },
        React__default.default.createElement(OpenChannel_components_OpenChannelUI, { renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage, renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader, renderInput: props === null || props === void 0 ? void 0 : props.renderInput, renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput, renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList, renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError, renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading })));
};

module.exports = OpenChannel;
//# sourceMappingURL=OpenChannel.js.map
