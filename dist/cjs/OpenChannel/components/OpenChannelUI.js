'use strict';

var React = require('react');
var OpenChannel_context = require('../../chunks/bundle-m7ytwpyW.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-8lqFENCn.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('react-dom');
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
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-8ZWsPCOg.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-IM9ReYMH.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CIGEu-M8.js');
require('../../chunks/bundle-Bgprrbe3.js');
require('../../chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('../../chunks/bundle-DNYU-n0R.js');
require('../../chunks/bundle-Cpzu_F_c.js');
require('../../chunks/bundle-YryjcbxB.js');
require('../../chunks/bundle-kho6esBq.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-CyjbhYln.js');
require('./OpenChannelMessage.js');
require('../../chunks/bundle-Ch-SV_mC.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-BNWGP_DJ.js');
require('../../chunks/bundle-6X4nvLqa.js');
require('../../chunks/bundle-B8SVf9Ei.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-D14ErjFX.js');
require('../../Message/context.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../ui/DateSeparator.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-CxCCWx-V.js');
require('../../chunks/bundle-BjEM1mIu.js');
require('../../chunks/bundle-Dlvh67yI.js');
require('../../chunks/bundle-DbUBJ44g.js');
require('../../chunks/bundle-D0fVLgqP.js');
require('@sendbird/chat/message');
require('../../Channel/utils/compareMessagesForGrouping.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.default.createElement(OpenChannel_components_OpenChannelHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React__default.default.createElement(OpenChannel_components_FrozenChannelNotification, null),
        React__default.default.createElement(OpenChannel_components_OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React__default.default.createElement(OpenChannel_components_OpenChannelInput, { ref: messageInputRef })));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelUI.js.map
