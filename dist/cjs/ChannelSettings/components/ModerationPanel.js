'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CNFrX8wi.js');
var ui_Accordion = require('../../ui/Accordion.js');
var ui_Label = require('../../chunks/bundle-DLuC20f2.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var ui_Toggle = require('../../ui/Toggle.js');
var MutedMemberList = require('../../chunks/bundle-Bnv9x7tz.js');
var MemberList = require('../../chunks/bundle-1rSsA8e-.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-8lqFENCn.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../ui/AccordionGroup.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../ui/Button.js');
require('../../chunks/bundle-Fhf7PKrF.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-KogLMh5_.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-g72Ialyc.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('../../ui/UserListItem.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-C4475KDA.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-CnbBBusa.js');
require('../../chunks/bundle-CdBDHOtM.js');
require('../../chunks/bundle-D0fVLgqP.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DbUBJ44g.js');
require('../../chunks/bundle-8ZWsPCOg.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
/**
 * @deprecated
 * `ModerationPanel` is deprecated.
 * Use `@sendbird/ChannelSettings/components/ChannelSettingMenuList` instead.
 */
function ModerationPanel() {
    var _a = React.useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    React.useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel]);
    return (React__default.default.createElement(ui_Accordion.AccordionGroup, { className: "sendbird-channel-settings__operator" },
        React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__operators-list", id: "operators", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.OPERATOR, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE))); }, renderContent: function () { return React__default.default.createElement(MutedMemberList.OperatorList, null); } }),
        React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__members-list", id: "members", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MEMBERS, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE),
                React__default.default.createElement(ui_Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }))); }, renderContent: function () { return React__default.default.createElement(MemberList.MemberList, null); } }),
        // No muted members in broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.default.createElement(ui_Accordion.default, { id: "mutedMembers", className: "sendbird-channel-settings__muted-members-list", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MUTE, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.default.createElement(MutedMemberList.MutedMemberList, null); } })),
        React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__banned-members-list", id: "bannedUsers", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.BAN, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.default.createElement(MutedMemberList.BannedUserList, null); } }),
        // cannot freeze broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.default.createElement("div", { className: "sendbird-channel-settings__freeze" },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FREEZE, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__FREEZE_CHANNEL),
            React__default.default.createElement(ui_Toggle.Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
                    if (frozen) {
                        channel === null || channel === void 0 ? void 0 : channel.unfreeze().then(function () {
                            setFrozen(function (prev) { return !prev; });
                        });
                    }
                    else {
                        channel === null || channel === void 0 ? void 0 : channel.freeze().then(function () {
                            setFrozen(function (prev) { return !prev; });
                        });
                    }
                } })))));
}

module.exports = ModerationPanel;
//# sourceMappingURL=ModerationPanel.js.map
