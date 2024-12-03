'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
var ui_Modal = require('../chunks/bundle-mOf92gcC.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var useKeyDown = require('../chunks/bundle-CxCCWx-V.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DPH5liyx.js');
require('../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('../chunks/bundle-C2B_FD-S.js');
require('react-dom');
require('../chunks/bundle-C4475KDA.js');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BDLZ01qm.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-KogLMh5_.js');
require('./SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageFeedbackFailedModal(props) {
    var text = props.text, onCancel = props.onCancel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var modalRef = React.useRef(null);
    var onKeyDown = useKeyDown.useKeyDown(modalRef, {
        Enter: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
        Escape: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
    });
    return (React__default.default.createElement("div", { onKeyDown: onKeyDown },
        React__default.default.createElement(ui_Modal.Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ui_Button.ButtonTypes.PRIMARY, onSubmit: onCancel, onClose: onCancel, submitText: stringSet.BUTTON__OK, renderHeader: function () { return (React__default.default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, text))); }, customFooter: React__default.default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root_failed' },
                React__default.default.createElement(ui_Button.default, { onClick: onCancel },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_3, color: ui_Label.LabelColors.ONCONTENT_1 }, stringSet.BUTTON__OK))) })));
}

module.exports = MessageFeedbackFailedModal;
//# sourceMappingURL=MessageFeedbackFailedModal.js.map
