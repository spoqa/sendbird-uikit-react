'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-8lqFENCn.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-Bgg-hsK-.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-g72Ialyc.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bgprrbe3.js');
require('../../chunks/bundle-CIGEu-M8.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../../chunks/bundle-C4475KDA.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-D0fVLgqP.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CWCj9v3j.js');
require('../../chunks/bundle-Ch-SV_mC.js');
require('../../chunks/bundle-D14a7cTq.js');
require('../../chunks/bundle-8ZWsPCOg.js');
require('../../chunks/bundle-H1TyyvB8.js');
require('../../chunks/bundle-DvrxH41v.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-0ybiannE.js');
require('../../chunks/bundle-D_OV7UYj.js');
require('../../chunks/bundle-CDgOz2Py.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React__default.default.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map