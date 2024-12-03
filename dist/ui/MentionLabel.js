import React__default, { useRef, useState, useCallback } from 'react';
import { C as ContextMenu, b as MenuItems } from '../chunks/bundle-BQ7ajvH5.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-ozUngJUV.js';
import UserProfile from './UserProfile.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { c as classnames } from '../chunks/bundle-CSGqtO-d.js';
import '../chunks/bundle-DzrKlXwY.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-BhlLFjHF.js';
import '../withSendbird.js';
import './IconButton.js';
import '../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';
import '../chunks/bundle-CoXgb0Rb.js';
import '../chunks/bundle-CANWvEzj.js';
import '../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-mp0bcmQc.js';
import '../chunks/bundle-D3I4IOQr.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-DTjvrceX.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-C9y-bwLX.js';
import '../chunks/bundle-BcxMj4cx.js';
import './ImageRenderer.js';
import '../chunks/bundle-BG2WZLhb.js';

function MentionLabel(props) {
    var _a, _b, _c;
    var mentionTemplate = props.mentionTemplate, mentionedUserId = props.mentionedUserId, mentionedUserNickname = props.mentionedUserNickname, isByMe = props.isByMe;
    var mentionRef = useRef();
    var sendbirdState = useSendbirdStateContext();
    var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
    var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
    var amIBeingMentioned = userId === mentionedUserId;
    var _d = useState(), user = _d[0], setUser = _d[1];
    var fetchUser = useCallback(function (toggleDropdown) {
        if (user || !(sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery)) {
            toggleDropdown();
            return;
        }
        var query = sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery({
            userIdsFilter: [mentionedUserId],
        });
        query.next().then(function (members) {
            if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
                setUser(members[0]);
            }
            toggleDropdown();
        });
    }, [sdk, mentionedUserId]);
    return (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement("a", { className: classnames('sendbird-word__mention', amIBeingMentioned && 'sendbird-word__mention--me'), onClick: function () { return fetchUser(toggleDropdown); }, ref: mentionRef, "data-userid": mentionedUserId, "data-nickname": mentionedUserNickname, "data-sb-mention": true },
            React__default.createElement(Label, { type: LabelTypography.CAPTION_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, "".concat(mentionTemplate).concat(mentionedUserNickname)))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems
        /**
        * parentRef: For catching location(x, y) of MenuItems
        * parentContainRef: For toggling more options(menus & reactions)
        */
        , { 
            /**
            * parentRef: For catching location(x, y) of MenuItems
            * parentContainRef: For toggling more options(menus & reactions)
            */
            parentRef: mentionRef, parentContainRef: mentionRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
            React__default.createElement(UserProfile, { user: user, onSuccess: closeDropdown, currentUserId: userId }))); } }));
}

export { MentionLabel as default };
//# sourceMappingURL=MentionLabel.js.map
