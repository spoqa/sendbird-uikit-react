'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-8lqFENCn.js');
require('./chunks/bundle-CNFrX8wi.js');
require('./chunks/bundle-DPH5liyx.js');
require('./chunks/bundle-DLuC20f2.js');
require('./ui/Icon.js');
require('./chunks/bundle-C2B_FD-S.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-l8Gusx3D.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./chunks/bundle-B-KBdgGO.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-CnbBBusa.js');
require('./chunks/bundle-mOf92gcC.js');
require('./chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-D7Mdigg1.js');
require('./chunks/bundle-CmvLtQdY.js');
require('./chunks/bundle-BB49PpRR.js');
require('react-dom');
require('./chunks/bundle-C4475KDA.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BDLZ01qm.js');
require('./chunks/bundle-KogLMh5_.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-BhQTS4bd.js');
require('./chunks/bundle-Dpym1DIx.js');
require('./ui/AccordionGroup.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./ui/Accordion.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannelSetting = function (props) {
    return (React__default.default.createElement(OpenChannelSettings_context.OpenChannelSettingsProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick, onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel, onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified, onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile },
        React__default.default.createElement(OpenChannelSettings_components_OpenChannelSettingsUI, { renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI, renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList })));
};

module.exports = OpenChannelSetting;
//# sourceMappingURL=OpenChannelSettings.js.map
