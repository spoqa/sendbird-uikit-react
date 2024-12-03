import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-B2_RrSUQ.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-BcxMj4cx.js';
import './chunks/bundle-DzrKlXwY.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-CSGqtO-d.js';
import './chunks/bundle-BG2WZLhb.js';
import './ui/Icon.js';
import './chunks/bundle-ozUngJUV.js';
import './chunks/bundle-CANWvEzj.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-CoXgb0Rb.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
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
import './CreateOpenChannel/context.js';
import './chunks/bundle-C9y-bwLX.js';

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React__default.createElement(OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React__default.createElement(OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

export { OpenChannelList as default };
//# sourceMappingURL=OpenChannelList.js.map
