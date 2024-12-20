import React__default, { useContext } from 'react';
import { M as Modal } from './bundle-mp0bcmQc.js';
import './bundle-DzrKlXwY.js';
import './bundle-ozUngJUV.js';
import { ButtonTypes } from '../ui/Button.js';
import { L as LocalizationContext } from './bundle-CoXgb0Rb.js';
import { useThreadContext } from '../Thread/context.js';
import { g as getModalDeleteMessageTitle } from './bundle-DD_m7E5m.js';

var RemoveMessage = function (props) {
    var _a, _b;
    var onCancel = props.onCancel, onSubmit = props.onSubmit, message = props.message;
    var stringSet = useContext(LocalizationContext).stringSet;
    var deleteMessage = useThreadContext().deleteMessage;
    return (React__default.createElement(Modal, { type: ButtonTypes.DANGER, disabled: ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onCancel: onCancel, onSubmit: function () {
            deleteMessage(message).then(function () {
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
            });
        }, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: getModalDeleteMessageTitle(stringSet, message) }));
};

export { RemoveMessage as R };
//# sourceMappingURL=bundle-Bhr_TR2L.js.map
