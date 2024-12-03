'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
var index = require('../chunks/bundle-DiIxiEgV.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DPH5liyx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function FallbackTemplateMessageItemBody(_a) {
    var className = _a.className, message = _a.message, isByMe = _a.isByMe;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var text = message['message'];
    return (React__default.default.createElement("div", { className: index.getClassName([
            className !== null && className !== void 0 ? className : '',
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body__fallback_message',
        ]) }, text
        ? React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, text))
        : React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__header', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, stringSet.UNKNOWN__TEMPLATE_ERROR),
            React__default.default.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__description', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_3 }, stringSet.UNKNOWN__CANNOT_READ_TEMPLATE))));
}

exports.FallbackTemplateMessageItemBody = FallbackTemplateMessageItemBody;
exports.default = FallbackTemplateMessageItemBody;
//# sourceMappingURL=FallbackTemplateMessageItemBody.tsx.js.map
