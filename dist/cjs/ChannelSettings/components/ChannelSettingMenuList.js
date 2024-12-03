'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-8lqFENCn.js');
var React = require('react');
var ui_Label = require('../../chunks/bundle-DLuC20f2.js');
var ui_Icon = require('../../ui/Icon.js');
var utils = require('../../chunks/bundle-D0fVLgqP.js');
var ChannelSettings_components_ChannelSettingsMenuItem = require('./ChannelSettingsMenuItem.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CNFrX8wi.js');
require('@sendbird/chat/groupChannel');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-mOf92gcC.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../../chunks/bundle-C4475KDA.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BDLZ01qm.js');
require('../../chunks/bundle-KogLMh5_.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-8ZWsPCOg.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MenuListByRole = function (_a) {
    var menuItems = _a.menuItems;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var menuItemsByRole = utils.isOperator(channel) ? menuItems.operator : menuItems.nonOperator;
    // State to track the open accordion key
    var _b = React.useState(null), openAccordionKey = _b[0], setOpenAccordionKey = _b[1];
    return (React__default.default.createElement("div", { className: "sendbird-channel-settings__operator" }, Object.entries(menuItemsByRole).map(function (_a) {
        var key = _a[0], item = _a[1];
        if (item.hideMenu)
            return null;
        return (React__default.default.createElement(ChannelSettings_components_ChannelSettingsMenuItem.MenuItem, { key: key, onClick: item.onClick, onKeyDown: item.onKeyDown, renderLeft: function () { return React__default.default.createElement(ui_Icon.default, _tslib.__assign({}, item.icon)); }, renderMiddle: function () { return React__default.default.createElement(ui_Label.Label, _tslib.__assign({}, item.label)); }, renderRight: item.rightComponent, renderAccordion: item.accordionComponent, accordionOpened: openAccordionKey === key, setAccordionOpened: function () {
                setOpenAccordionKey(function (prevKey) { return (prevKey === key ? null : key); });
            } }));
    })));
};

exports.MenuListByRole = MenuListByRole;
exports.default = MenuListByRole;
//# sourceMappingURL=ChannelSettingMenuList.js.map
