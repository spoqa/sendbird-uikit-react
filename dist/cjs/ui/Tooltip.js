'use strict';

var _tslib = require('../chunks/bundle-8lqFENCn.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
require('../chunks/bundle-DPH5liyx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function Tooltip(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? '' : _c;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-tooltip',
        ], false).join(' ') },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-tooltip__text", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONCONTENT_1 }, children)));
}

module.exports = Tooltip;
//# sourceMappingURL=Tooltip.js.map
