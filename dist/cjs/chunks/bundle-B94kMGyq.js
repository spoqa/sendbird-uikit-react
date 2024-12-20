'use strict';

var React = require('react');
var ui_Modal = require('./bundle-mOf92gcC.js');
require('./bundle-8lqFENCn.js');
require('./bundle-DLuC20f2.js');
var ui_Button = require('../ui/Button.js');
var LocalizationContext = require('./bundle-CNFrX8wi.js');
var Thread_context = require('../Thread/context.js');
var stringFormatterUtils = require('./bundle-BjEM1mIu.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var RemoveMessage = function (props) {
    var _a, _b;
    var onCancel = props.onCancel, onSubmit = props.onSubmit, message = props.message;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var deleteMessage = Thread_context.useThreadContext().deleteMessage;
    return (React__default.default.createElement(ui_Modal.Modal, { type: ui_Button.ButtonTypes.DANGER, disabled: ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onCancel: onCancel, onSubmit: function () {
            deleteMessage(message).then(function () {
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
            });
        }, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: stringFormatterUtils.getModalDeleteMessageTitle(stringSet, message) }));
};

exports.RemoveMessage = RemoveMessage;
//# sourceMappingURL=bundle-B94kMGyq.js.map
