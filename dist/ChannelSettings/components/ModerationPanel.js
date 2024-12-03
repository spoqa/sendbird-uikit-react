import React__default, { useState, useContext, useEffect } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CoXgb0Rb.js';
import Accordion, { AccordionGroup } from '../../ui/Accordion.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ozUngJUV.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { Toggle } from '../../ui/Toggle.js';
import { O as OperatorList, M as MutedMemberList, B as BannedUserList } from '../../chunks/bundle-DuQc3xPg.js';
import { M as MemberList } from '../../chunks/bundle-Dl1vxExO.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../ui/AccordionGroup.js';
import '../../chunks/bundle-CSGqtO-d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CzBWyWNc.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BQ7ajvH5.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BhlLFjHF.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../ui/UserListItem.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-D3I4IOQr.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-zYy1tQh9.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CbigpPWg.js';
import '../../chunks/bundle-BCJ-Fh04.js';

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
    var _a = useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var channel = useChannelSettingsContext().channel;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel]);
    return (React__default.createElement(AccordionGroup, { className: "sendbird-channel-settings__operator" },
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__operators-list", id: "operators", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.OPERATOR, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE))); }, renderContent: function () { return React__default.createElement(OperatorList, null); } }),
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__members-list", id: "members", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.MEMBERS, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE),
                React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }))); }, renderContent: function () { return React__default.createElement(MemberList, null); } }),
        // No muted members in broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.createElement(Accordion, { id: "mutedMembers", className: "sendbird-channel-settings__muted-members-list", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.MUTE, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.createElement(MutedMemberList, null); } })),
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__banned-members-list", id: "bannedUsers", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.BAN, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.createElement(BannedUserList, null); } }),
        // cannot freeze broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.createElement("div", { className: "sendbird-channel-settings__freeze" },
            React__default.createElement(Icon, { type: IconTypes.FREEZE, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__FREEZE_CHANNEL),
            React__default.createElement(Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
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

export { ModerationPanel as default };
//# sourceMappingURL=ModerationPanel.js.map
