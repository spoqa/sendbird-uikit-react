'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./chunks/bundle-8lqFENCn.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-CNFrX8wi.js');
require('./chunks/bundle-DPH5liyx.js');
require('./chunks/bundle-BozIlhT9.js');
require('./chunks/bundle-mOf92gcC.js');
require('./chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-D7Mdigg1.js');
require('./chunks/bundle-CmvLtQdY.js');
require('./chunks/bundle-BB49PpRR.js');
require('./chunks/bundle-C2B_FD-S.js');
require('react-dom');
require('./chunks/bundle-C4475KDA.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-DLuC20f2.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-BDLZ01qm.js');
require('./chunks/bundle-KogLMh5_.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-CiYpjB6z.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-ByKRIG_M.js');
require('./ui/TextButton.js');
require('./chunks/bundle-l8Gusx3D.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React__default.default.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React__default.default.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
