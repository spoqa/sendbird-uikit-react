import React__default from 'react';
import { u as useCreateChannelContext } from '../../chunks/bundle--DAyK0bh.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-CSGqtO-d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-ozUngJUV.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';

var CreateChannel = function (props) {
    var onCancel = props.onCancel, renderStepOne = props.renderStepOne;
    var _a = useCreateChannelContext(), step = _a.step, setStep = _a.setStep, userListQuery = _a.userListQuery;
    return (React__default.createElement(React__default.Fragment, null,
        step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || (React__default.createElement(SelectChannelType, { onCancel: onCancel }))),
        step === 1 && (React__default.createElement(InviteUsers, { userListQuery: userListQuery, onCancel: function () {
                setStep(0);
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            } }))));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannelUI.js.map
