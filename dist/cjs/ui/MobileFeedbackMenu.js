'use strict';

var React = require('react');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
require('react-dom');
require('../chunks/bundle-mOf92gcC.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-C4475KDA.js');
require('./IconButton.js');
require('./Button.js');
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
require('../chunks/bundle-DPH5liyx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MobileFeedbackMenu(props) {
    var hideMenu = props.hideMenu, onEditFeedback = props.onEditFeedback, onRemoveFeedback = props.onRemoveFeedback;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return (React__default.default.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
        React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-options-menu' },
            React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onEditFeedback();
                } },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.EDIT_COMMENT)),
            React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onRemoveFeedback();
                } },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ERROR }, stringSet.REMOVE_FEEDBACK)))));
}

module.exports = MobileFeedbackMenu;
//# sourceMappingURL=MobileFeedbackMenu.js.map
