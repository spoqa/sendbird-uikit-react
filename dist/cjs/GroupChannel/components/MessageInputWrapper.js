'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-8lqFENCn.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-BdGAi-Uf.js');
var GroupChannel_context = require('../context.js');
require('../../chunks/bundle-MabvJwZE.js');
require('../../chunks/bundle-Bgprrbe3.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-DPH5liyx.js');
require('./SuggestedMentionList.js');
require('../../chunks/bundle-Bgg-hsK-.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../chunks/bundle-g72Ialyc.js');
require('../../chunks/bundle-CIGEu-M8.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('../../chunks/bundle-CIgNQEW3.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-mOf92gcC.js');
require('react-dom');
require('../../chunks/bundle-C4475KDA.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-CjeiLE3a.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-Cdd_a0vv.js');
require('dompurify');
require('../../chunks/bundle-DNYU-n0R.js');
require('../../chunks/bundle-Cpzu_F_c.js');
require('../../chunks/bundle-YryjcbxB.js');
require('../../chunks/bundle-kho6esBq.js');
require('../../chunks/bundle-IM9ReYMH.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dpym1DIx.js');
require('../../chunks/bundle-0ybiannE.js');
require('../../chunks/bundle-D_OV7UYj.js');
require('../../chunks/bundle-B1YHU5aC.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-CWCj9v3j.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MessageInputWrapper = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return React__default.default.createElement(MessageInputWrapperView.MessageInputWrapperView, _tslib.__assign({}, props, context));
};

exports.VoiceMessageInputWrapper = MessageInputWrapperView.VoiceMessageInputWrapper;
exports.MessageInputWrapper = MessageInputWrapper;
exports.default = MessageInputWrapper;
//# sourceMappingURL=MessageInputWrapper.js.map
