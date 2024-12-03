'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-8lqFENCn.js');
var React = require('react');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('../chunks/bundle-mOf92gcC.js');
require('css-vars-ponyfill');
require('../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
var utils = require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-BDLZ01qm.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-C4475KDA.js');
var ui_ContextMenu = require('../chunks/bundle-KogLMh5_.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../chunks/bundle-Dpym1DIx.js');
var ui_Avatar = require('../chunks/bundle-CiYpjB6z.js');
var ui_MutedAvatarOverlay = require('./MutedAvatarOverlay.js');
var ui_Checkbox = require('./Checkbox.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var pxToNumber = require('../chunks/bundle-ByKRIG_M.js');
require('react-dom');
require('./IconButton.js');
require('./Button.js');
require('./Icon.js');
require('../chunks/bundle-g72Ialyc.js');
require('../chunks/bundle-BB49PpRR.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-DPH5liyx.js');
require('./SortByRow.js');
require('./ImageRenderer.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-CnbBBusa.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function UserListItem(_a) {
    var user = _a.user, channel = _a.channel, _b = _a.className, className = _b === void 0 ? undefined : _b, checked = _a.checked, checkBox = _a.checkBox, isOperator = _a.isOperator, disabled = _a.disabled, disableMessaging = _a.disableMessaging, action = _a.action, onChange = _a.onChange, _c = _a.avatarSize, avatarSize = _c === void 0 ? '40px' : _c, onClick = _a.onClick, onUserAvatarClick = _a.onUserAvatarClick, renderListItemMenu = _a.renderListItemMenu, _d = _a.size, size = _d === void 0 ? 'normal' : _d;
    var operator = isOperator !== null && isOperator !== void 0 ? isOperator : (user === null || user === void 0 ? void 0 : user.role) === 'operator';
    var uniqueKey = user.userId;
    var actionRef = React.useRef(null);
    var parentRef = React.useRef(null);
    var avatarRef = React.useRef(null);
    var _e = UserProfileContext.useUserProfileContext(), disableUserProfile = _e.disableUserProfile, renderUserProfile = _e.renderUserProfile;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var currentUser = config.userId;
    var itemClassName = size === 'small' ? 'sendbird-user-list-item--small' : 'sendbird-user-list-item';
    var avatarClassName = size === 'small' ? 'sendbird-user-list-item--small__avatar' : 'sendbird-user-list-item__avatar';
    var titleClassName = size === 'small' ? 'sendbird-user-list-item--small__title' : 'sendbird-user-list-item__title';
    var subtitleClassName = size === 'small' ? 'sendbird-user-list-item--small__subtitle' : 'sendbird-user-list-item__subtitle';
    var checkboxClassName = size === 'small' ? 'sendbird-user-list-item--small__checkbox' : 'sendbird-user-list-item__checkbox';
    var actionClassName = size === 'small' ? 'sendbird-user-list-item--small__action' : 'sendbird-user-list-item__action';
    var operatorClassName = size === 'small' ? 'sendbird-user-list-item--small__operator' : 'sendbird-user-list-item__operator';
    return (React__default.default.createElement("div", { className: utils.classnames.apply(void 0, _tslib.__spreadArray([itemClassName], (Array.isArray(className) ? className : [className]), false)), ref: parentRef },
        React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement(ui_Avatar.Avatar, { className: avatarClassName, ref: avatarRef, src: (user === null || user === void 0 ? void 0 : user.profileUrl) || (user === null || user === void 0 ? void 0 : user.plainProfileUrl) || '', width: avatarSize, height: avatarSize, onClick: function () {
                        var _a;
                        if (!disableUserProfile) {
                            toggleDropdown();
                            (_a = (onUserAvatarClick !== null && onUserAvatarClick !== void 0 ? onUserAvatarClick : onClick)) === null || _a === void 0 ? void 0 : _a();
                        }
                    } }),
                (user === null || user === void 0 ? void 0 : user.isMuted) && (React__default.default.createElement(ui_MutedAvatarOverlay, { height: pxToNumber.pxToNumber(avatarSize), width: pxToNumber.pxToNumber(avatarSize) })))); }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: user,
                    currentUserId: currentUser !== null && currentUser !== void 0 ? currentUser : '',
                    close: closeDropdown,
                    avatarRef: avatarRef,
                })
                : (React__default.default.createElement(ui_ContextMenu.MenuItems, { openLeft: true, parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.default.createElement(ui_UserProfile, { disableMessaging: disableMessaging, user: user, currentUserId: currentUser, onSuccess: closeDropdown })))); } }),
        React__default.default.createElement(ui_Label.Label, { className: titleClassName, type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
            user.nickname || stringSet.NO_NAME,
            (currentUser === user.userId) && (stringSet.CHANNEL_SETTING__MEMBERS__YOU)),
        !user.nickname && (React__default.default.createElement(ui_Label.Label, { className: subtitleClassName, type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)),
        checkBox && (React__default.default.createElement("label", { className: checkboxClassName, htmlFor: uniqueKey },
            React__default.default.createElement(ui_Checkbox, { id: uniqueKey, checked: checked, disabled: disabled, onChange: function (event) { return onChange === null || onChange === void 0 ? void 0 : onChange(event); } }))),
        operator && (React__default.default.createElement(ui_Label.Label, { className: utils.classnames(operatorClassName, checkBox && 'checkbox'), type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.LABEL__OPERATOR)),
        !checkBox && !renderListItemMenu && action && (React__default.default.createElement("div", { className: actionClassName, ref: actionRef }, action({ actionRef: actionRef, parentRef: parentRef }))),
        !checkBox && renderListItemMenu && (React__default.default.createElement("div", { className: actionClassName, ref: actionRef }, renderListItemMenu({ channel: channel, user: user })))));
}

exports.UserListItem = UserListItem;
exports.default = UserListItem;
//# sourceMappingURL=UserListItem.js.map
