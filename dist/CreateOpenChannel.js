import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-CoXgb0Rb.js';
import './chunks/bundle-DzrKlXwY.js';
import './chunks/bundle-CANWvEzj.js';
import './chunks/bundle-BcxMj4cx.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-CSGqtO-d.js';
import './chunks/bundle-BG2WZLhb.js';
import './ui/Icon.js';
import './chunks/bundle-ozUngJUV.js';
import './ui/Button.js';
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
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-DTjvrceX.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BQ7ajvH5.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-CFsIxv6o.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
