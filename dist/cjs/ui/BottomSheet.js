'use strict';

var React = require('react');
var reactDom = require('react-dom');
var ui_Modal = require('../chunks/bundle-mOf92gcC.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-DPH5liyx.js');
require('../chunks/bundle-C4475KDA.js');
require('./IconButton.js');
require('./Button.js');
require('../chunks/bundle-DLuC20f2.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BDLZ01qm.js');
require('../chunks/bundle-KogLMh5_.js');
require('./SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var BottomSheet = function (props) {
    var _a, _b, _c;
    var _d = props.className, className = _d === void 0 ? '' : _d, children = props.children, onBackdropClick = props.onBackdropClick;
    var logger = (_b = (_a = useSendbirdStateContext.useSendbirdStateContext()) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logger;
    // https://github.com/testing-library/react-testing-library/issues/62#issuecomment-438653348
    var portalRoot = React.useRef();
    portalRoot.current = document.getElementById(ui_Modal.MODAL_ROOT);
    if (!portalRoot.current) {
        portalRoot.current = document.createElement('div');
        portalRoot.current.setAttribute('id', ui_Modal.MODAL_ROOT);
        document.body.appendChild(portalRoot.current);
        (_c = logger === null || logger === void 0 ? void 0 : logger.warning) === null || _c === void 0 ? void 0 : _c.call(logger, '@sendbird/uikit-react/ui/BottomSheet | Should put a ModalRoot to use the BottomSheet.');
    }
    return reactDom.createPortal(React__default.default.createElement("div", { className: "".concat(className, " sendbird-bottomsheet") },
        React__default.default.createElement("div", { className: "sendbird-bottomsheet__content", role: 'dialog', "aria-modal": 'true', "aria-expanded": 'true' }, children),
        React__default.default.createElement("div", { className: "sendbird-bottomsheet__backdrop", onClick: function (e) {
                e === null || e === void 0 ? void 0 : e.stopPropagation();
                onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick();
            } })), portalRoot.current);
};

module.exports = BottomSheet;
//# sourceMappingURL=BottomSheet.js.map
