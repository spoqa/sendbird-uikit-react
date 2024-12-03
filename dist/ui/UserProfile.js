import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-CoXgb0Rb.js';
import { u as useUserProfileContext } from '../chunks/bundle-GlbqlLGi.js';
import { getCreateGroupChannel } from '../sendbirdSelectors.js';
import { A as Avatar } from '../chunks/bundle-BcxMj4cx.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ozUngJUV.js';
import Button, { ButtonTypes } from './Button.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-DzrKlXwY.js';
import '../chunks/bundle-CANWvEzj.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import '../chunks/bundle-mp0bcmQc.js';
import '../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';
import '../chunks/bundle-CSGqtO-d.js';
import 'react-dom';
import '../chunks/bundle-D3I4IOQr.js';
import './IconButton.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-DTjvrceX.js';
import '../chunks/bundle-BQ7ajvH5.js';
import './SortByRow.js';
import '../chunks/bundle-C9y-bwLX.js';
import './ImageRenderer.js';
import '../chunks/bundle-BG2WZLhb.js';

function UserProfile(_a) {
    var _b, _c;
    var user = _a.user, currentUserId = _a.currentUserId, _d = _a.disableMessaging, disableMessaging = _d === void 0 ? false : _d, onSuccess = _a.onSuccess;
    var store = useSendbirdStateContext();
    var createChannel = getCreateGroupChannel(store);
    var logger = (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.logger;
    var stringSet = useContext(LocalizationContext).stringSet;
    var currentUserId_ = currentUserId || ((_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId);
    var onStartDirectMessage = useUserProfileContext().onStartDirectMessage;
    return (React__default.createElement("div", { className: "sendbird__user-profile" },
        React__default.createElement("section", { className: "sendbird__user-profile-avatar" },
            React__default.createElement(Avatar, { height: "80px", width: "80px", src: user === null || user === void 0 ? void 0 : user.profileUrl })),
        React__default.createElement("section", { className: "sendbird__user-profile-name" },
            React__default.createElement(Label, { type: LabelTypography.H_2, color: LabelColors.ONBACKGROUND_1 }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)),
        ((user === null || user === void 0 ? void 0 : user.userId) !== currentUserId_) && !disableMessaging && (React__default.createElement("section", { className: "sendbird__user-profile-message" },
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, onClick: function () {
                    // Create 1:1 channel
                    var params = {
                        isDistinct: false,
                        invitedUserIds: (user === null || user === void 0 ? void 0 : user.userId) ? [user === null || user === void 0 ? void 0 : user.userId] : [],
                        operatorUserIds: [currentUserId_],
                    };
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                    createChannel(params)
                        .then(function (groupChannel) {
                        logger.info('UserProfile, channel create', groupChannel);
                        onStartDirectMessage === null || onStartDirectMessage === void 0 ? void 0 : onStartDirectMessage(groupChannel);
                    });
                } }, stringSet.USER_PROFILE__MESSAGE))),
        React__default.createElement("div", { className: "sendbird__user-profile-separator" }),
        React__default.createElement("section", { className: "sendbird__user-profile-userId" },
            React__default.createElement(Label, { className: "sendbird__user-profile-userId--label", type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.USER_PROFILE__USER_ID),
            React__default.createElement(Label, { className: "sendbird__user-profile-userId--value", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, user === null || user === void 0 ? void 0 : user.userId))));
}

export { UserProfile as default };
//# sourceMappingURL=UserProfile.js.map