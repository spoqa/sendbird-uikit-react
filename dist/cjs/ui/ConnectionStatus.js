'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-DPH5liyx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ConnectionStatus() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-connection-status" },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DISCONNECTED, fillColor: ui_Icon.IconColors.SENT, width: "14px", height: "14px" })));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map
