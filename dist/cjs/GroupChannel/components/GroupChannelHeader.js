'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-8lqFENCn.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-BXeAAQbL.js');
var GroupChannel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../chunks/bundle-B-KBdgGO.js');
require('../../chunks/bundle-NEY4G5Ta.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-C4475KDA.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../ui/IconButton.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Dpym1DIx.js');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-0ybiannE.js');
require('../../chunks/bundle-D_OV7UYj.js');
require('../../chunks/bundle-MabvJwZE.js');
require('../../chunks/bundle-Bgprrbe3.js');
require('../../chunks/bundle-B1YHU5aC.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-CWCj9v3j.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React__default.default.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
