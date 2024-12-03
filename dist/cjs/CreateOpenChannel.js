'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-CNFrX8wi.js');
require('./chunks/bundle-8lqFENCn.js');
require('./chunks/bundle-DPH5liyx.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-C2B_FD-S.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./ui/Icon.js');
require('./chunks/bundle-DLuC20f2.js');
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
require('./ui/IconButton.js');
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

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.default.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.default.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
