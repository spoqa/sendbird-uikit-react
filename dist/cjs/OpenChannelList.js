'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-C7j8fiNV.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./chunks/bundle-8lqFENCn.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-C2B_FD-S.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./ui/Icon.js');
require('./chunks/bundle-DLuC20f2.js');
require('./chunks/bundle-DPH5liyx.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-CNFrX8wi.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-mOf92gcC.js');
require('./chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-D7Mdigg1.js');
require('./chunks/bundle-CmvLtQdY.js');
require('./chunks/bundle-BB49PpRR.js');
require('react-dom');
require('./chunks/bundle-C4475KDA.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BDLZ01qm.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-KogLMh5_.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-l8Gusx3D.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-CnbBBusa.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React__default.default.createElement(OpenChannelList_context.OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React__default.default.createElement(OpenChannelList_components_OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

module.exports = OpenChannelList;
//# sourceMappingURL=OpenChannelList.js.map
