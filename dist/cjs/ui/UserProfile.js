'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
var UserProfileContext = require('../chunks/bundle-Dpym1DIx.js');
var sendbirdSelectors = require('../sendbirdSelectors.js');
var ui_Avatar = require('../chunks/bundle-CiYpjB6z.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var ui_Button = require('./Button.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DPH5liyx.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('../chunks/bundle-mOf92gcC.js');
require('../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('../chunks/bundle-C2B_FD-S.js');
require('react-dom');
require('../chunks/bundle-C4475KDA.js');
require('./IconButton.js');
require('./Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BDLZ01qm.js');
require('../chunks/bundle-KogLMh5_.js');
require('./SortByRow.js');
require('../chunks/bundle-CnbBBusa.js');
require('./ImageRenderer.js');
require('../chunks/bundle-ByKRIG_M.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function UserProfile(_a) {
    var _b, _c;
    var user = _a.user, currentUserId = _a.currentUserId, _d = _a.disableMessaging, disableMessaging = _d === void 0 ? false : _d, onSuccess = _a.onSuccess;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var createChannel = sendbirdSelectors.getCreateGroupChannel(store);
    var logger = (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.logger;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var currentUserId_ = currentUserId || ((_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId);
    var onStartDirectMessage = UserProfileContext.useUserProfileContext().onStartDirectMessage;
    return (React__default.default.createElement("div", { className: "sendbird__user-profile" },
        React__default.default.createElement("section", { className: "sendbird__user-profile-avatar" },
            React__default.default.createElement(ui_Avatar.Avatar, { height: "80px", width: "80px", src: user === null || user === void 0 ? void 0 : user.profileUrl })),
        React__default.default.createElement("section", { className: "sendbird__user-profile-name" },
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)),
        ((user === null || user === void 0 ? void 0 : user.userId) !== currentUserId_) && !disableMessaging && (React__default.default.createElement("section", { className: "sendbird__user-profile-message" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, onClick: function () {
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
        React__default.default.createElement("div", { className: "sendbird__user-profile-separator" }),
        React__default.default.createElement("section", { className: "sendbird__user-profile-userId" },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird__user-profile-userId--label", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.USER_PROFILE__USER_ID),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird__user-profile-userId--value", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, user === null || user === void 0 ? void 0 : user.userId))));
}

module.exports = UserProfile;
//# sourceMappingURL=UserProfile.js.map