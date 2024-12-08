'use strict';

var React = require('react');
var ChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../chunks/bundle-CNFrX8wi.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Modal = require('../../chunks/bundle-mOf92gcC.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../chunks/bundle-CiYpjB6z.js');
require('../../chunks/bundle-8lqFENCn.js');
var ui_Label = require('../../chunks/bundle-DLuC20f2.js');
var ui_Button = require('../../ui/Button.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var uuid = require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-DiIxiEgV.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-C4475KDA.js');
require('../../chunks/bundle-KogLMh5_.js');
require('react-dom');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../ui/SortByRow.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-8ZWsPCOg.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../ui/Icon.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../chunks/bundle-l8Gusx3D.js');
require('../../chunks/bundle-B-KBdgGO.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditDetails = function (props) {
    var _a, _b, _c;
    var onSubmit = props.onSubmit, onCancel = props.onCancel;
    var _d = ChannelSettings_context.useChannelSettingsContext(), channel = _d.channel, onChannelModified = _d.onChannelModified, onBeforeUpdateChannel = _d.onBeforeUpdateChannel, setChannelUpdateId = _d.setChannelUpdateId;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
    var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
    var inputRef = React.useRef(null);
    var formRef = React.useRef(null);
    var hiddenInputRef = React.useRef(null);
    var _e = React.useState(null), currentImg = _e[0], setCurrentImg = _e[1];
    var _f = React.useState(null), newFile = _f[0], setNewFile = _f[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
            var _a, _b, _c;
            if (title !== '' && !((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value)) {
                if ((_b = formRef.current) === null || _b === void 0 ? void 0 : _b.reportValidity) { // might not work in explorer
                    formRef.current.reportValidity();
                }
                return;
            }
            var currentTitle = (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value;
            var currentImg = newFile;
            logger.info('ChannelSettings: Channel information being updated', {
                currentTitle: currentTitle,
                currentImg: currentImg,
            });
            if (onBeforeUpdateChannel) {
                logger.info('ChannelSettings: onBeforeUpdateChannel');
                var params = onBeforeUpdateChannel(currentTitle !== null && currentTitle !== void 0 ? currentTitle : '', currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
                channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (groupChannel) {
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId(uuid.uuidv4());
                    onSubmit();
                });
            }
            else {
                logger.info('ChannelSettings: normal');
                channel === null || channel === void 0 ? void 0 : channel.updateChannel({
                    coverImage: currentImg,
                    name: currentTitle,
                    data: (channel === null || channel === void 0 ? void 0 : channel.data) || '',
                }).then(function (groupChannel) {
                    logger.info('ChannelSettings: Channel information updated', groupChannel);
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId === null || setChannelUpdateId === void 0 ? void 0 : setChannelUpdateId(uuid.uuidv4());
                    onSubmit();
                });
            }
        }, type: ui_Button.ButtonTypes.PRIMARY },
        React__default.default.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React__default.default.createElement("div", { className: "channel-profile-form__img-section" },
                React__default.default.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React__default.default.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React__default.default.createElement(ui_Avatar.Avatar, { height: "80px", width: "80px", src: currentImg })) : (React__default.default.createElement(ui_ChannelAvatar, { height: 80, width: 80, channel: channel, userId: userId, theme: theme }))),
                React__default.default.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                        if (e.target.files) {
                            setCurrentImg(URL.createObjectURL(e.target.files[0]));
                            setNewFile(e.target.files[0]);
                        }
                        if (hiddenInputRef.current) {
                            hiddenInputRef.current.value = '';
                        }
                    } }),
                React__default.default.createElement(ui_TextButton, { className: "channel-profile-form__avatar-button", onClick: function () { var _a; return (_a = hiddenInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, disableUnderline: true },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))),
            React__default.default.createElement("div", { className: "channel-profile-form__name-section" },
                React__default.default.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME),
                React__default.default.createElement(ui_Input.default, { required: title !== '', name: "channel-profile-form__name", ref: inputRef, value: title, placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER })))));
};

module.exports = EditDetails;
//# sourceMappingURL=EditDetailsModal.js.map
