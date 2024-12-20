'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-CiYpjB6z.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-8lqFENCn.js');
require('./ImageRenderer.js');
require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-ByKRIG_M.js');
require('../chunks/bundle-DPH5liyx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenchannelConversationHeader(_a) {
    var coverImage = _a.coverImage, title = _a.title, subTitle = _a.subTitle, amIOperator = _a.amIOperator, onActionClick = _a.onActionClick;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            coverImage ? (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "18px", height: "18px" }))),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onActionClick },
                React__default.default.createElement(ui_Icon.default, { type: (amIOperator
                        ? ui_Icon.IconTypes.INFO
                        : ui_Icon.IconTypes.MEMBERS), fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenchannelConversationHeader.js.map
