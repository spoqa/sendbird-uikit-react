'use strict';

var React = require('react');
var CreateChannel_context = require('../../chunks/bundle-fmsme2vq.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-8lqFENCn.js');
require('../../chunks/bundle-CNFrX8wi.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-C4475KDA.js');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var CreateChannel = function (props) {
    var onCancel = props.onCancel, renderStepOne = props.renderStepOne;
    var _a = CreateChannel_context.useCreateChannelContext(), step = _a.step, setStep = _a.setStep, userListQuery = _a.userListQuery;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || (React__default.default.createElement(CreateChannel_components_SelectChannelType, { onCancel: onCancel }))),
        step === 1 && (React__default.default.createElement(CreateChannel_components_InviteUsers, { userListQuery: userListQuery, onCancel: function () {
                setStep(0);
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            } }))));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map
