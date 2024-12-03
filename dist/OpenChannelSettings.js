import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './chunks/bundle-DzrKlXwY.js';
import './chunks/bundle-CoXgb0Rb.js';
import './chunks/bundle-CANWvEzj.js';
import './chunks/bundle-ozUngJUV.js';
import './ui/Icon.js';
import './chunks/bundle-CSGqtO-d.js';
import './ui/PlaceHolder.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './chunks/bundle-CFsIxv6o.js';
import './ui/OpenChannelAvatar.js';
import './chunks/bundle-BcxMj4cx.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-BG2WZLhb.js';
import './chunks/bundle-DB4au0Ge.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './chunks/bundle-C9y-bwLX.js';
import './chunks/bundle-mp0bcmQc.js';
import './chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-Dhl1ibcV.js';
import './chunks/bundle-jG2aA8Xg.js';
import './chunks/bundle-C4rWp9Fy.js';
import 'react-dom';
import './chunks/bundle-D3I4IOQr.js';
import './ui/IconButton.js';
import './ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DTjvrceX.js';
import './chunks/bundle-BQ7ajvH5.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './chunks/bundle-CMjtVpYR.js';
import './chunks/bundle-GlbqlLGi.js';
import './ui/AccordionGroup.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './ui/Accordion.js';

var OpenChannelSetting = function (props) {
    return (React__default.createElement(OpenChannelSettingsProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick, onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel, onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified, onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile },
        React__default.createElement(OpenChannelUI, { renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI, renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList })));
};

export { OpenChannelSetting as default };
//# sourceMappingURL=OpenChannelSettings.js.map