import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default, { useState, useContext, useEffect, useMemo } from 'react';
import { O as OperatorList, M as MutedMemberList, B as BannedUserList } from '../../chunks/bundle-DuQc3xPg.js';
import { M as MemberList } from '../../chunks/bundle-Dl1vxExO.js';
import { L as LocalizationContext } from '../../chunks/bundle-CoXgb0Rb.js';
import { IconColors, IconTypes } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { Toggle } from '../../ui/Toggle.js';
import { a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ozUngJUV.js';
import { useChannelSettingsContext } from '../context.js';
import { MenuItemAction } from '../components/ChannelSettingsMenuItem.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CzBWyWNc.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import 'react-dom';
import '../../chunks/bundle-CSGqtO-d.js';
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
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-BCJ-Fh04.js';

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var commonIconProps = {
    fillColor: IconColors.PRIMARY,
    width: 24,
    height: 24,
    className: 'sendbird-channel-settings__accordion-icon',
};
var commonLabelProps = {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1,
};
var useMenuItems = function () {
    var _a = useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var _b = useChannelSettingsContext(), channel = _b.channel, renderUserListItem = _b.renderUserListItem;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel === null || channel === void 0 ? void 0 : channel.isFrozen]);
    return useMemo(function () { return ({
        operator: {
            operators: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.OPERATOR }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__OPERATORS__TITLE }),
                accordionComponent: function () { return React__default.createElement(OperatorList, { renderUserListItem: renderUserListItem }); },
            },
            allUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MEMBERS }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.createElement(MenuItemAction, __assign({}, props)))); },
                accordionComponent: function () { return React__default.createElement(MemberList, { renderUserListItem: renderUserListItem }); },
            },
            mutedUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MUTE }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.createElement(MutedMemberList, { renderUserListItem: renderUserListItem }); },
            },
            bannedUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.BAN }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.createElement(BannedUserList, { renderUserListItem: renderUserListItem }); },
            },
            freezeChannel: {
                hideMenu: channel === null || channel === void 0 ? void 0 : channel.isBroadcast,
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.FREEZE }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__FREEZE_CHANNEL }),
                rightComponent: function () { return React__default.createElement(Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
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
                    } }); },
            },
        },
        nonOperator: {
            allUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MEMBERS }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.createElement(MenuItemAction, __assign({}, props)))); },
                accordionComponent: function () { return React__default.createElement(MemberList, { renderUserListItem: renderUserListItem }); },
            },
        }
    }); }, [channel === null || channel === void 0 ? void 0 : channel.url, frozen]);
};

export { useMenuItems as default, useMenuItems };
//# sourceMappingURL=useMenuList.js.map
