import { _ as __assign } from '../../chunks/bundle-DzrKlXwY.js';
import React__default, { useState } from 'react';
import { L as Label } from '../../chunks/bundle-ozUngJUV.js';
import Icon from '../../ui/Icon.js';
import { i as isOperator } from '../../chunks/bundle-Dm9F5YQ1.js';
import { MenuItem } from './ChannelSettingsMenuItem.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-CSGqtO-d.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CoXgb0Rb.js';
import '@sendbird/chat/groupChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import 'react-dom';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BCJ-Fh04.js';

var MenuListByRole = function (_a) {
    var menuItems = _a.menuItems;
    var channel = useChannelSettingsContext().channel;
    var menuItemsByRole = isOperator(channel) ? menuItems.operator : menuItems.nonOperator;
    // State to track the open accordion key
    var _b = useState(null), openAccordionKey = _b[0], setOpenAccordionKey = _b[1];
    return (React__default.createElement("div", { className: "sendbird-channel-settings__operator" }, Object.entries(menuItemsByRole).map(function (_a) {
        var key = _a[0], item = _a[1];
        if (item.hideMenu)
            return null;
        return (React__default.createElement(MenuItem, { key: key, onClick: item.onClick, onKeyDown: item.onKeyDown, renderLeft: function () { return React__default.createElement(Icon, __assign({}, item.icon)); }, renderMiddle: function () { return React__default.createElement(Label, __assign({}, item.label)); }, renderRight: item.rightComponent, renderAccordion: item.accordionComponent, accordionOpened: openAccordionKey === key, setAccordionOpened: function () {
                setOpenAccordionKey(function (prevKey) { return (prevKey === key ? null : key); });
            } }));
    })));
};

export { MenuListByRole, MenuListByRole as default };
//# sourceMappingURL=ChannelSettingMenuList.js.map
