'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-CiYpjB6z.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
var utils = require('../chunks/bundle-B-KBdgGO.js');
require('../chunks/bundle-8lqFENCn.js');
require('./ImageRenderer.js');
require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-ByKRIG_M.js');
require('./Icon.js');
require('../chunks/bundle-DPH5liyx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ChannelAvatar(_a) {
    var channel = _a.channel, theme = _a.theme, _b = _a.height, height = _b === void 0 ? 56 : _b, _c = _a.width, width = _c === void 0 ? 56 : _c;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var memoizedAvatar = React.useMemo(function () {
        return (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-chat-header__avatar--open-channel", src: utils.getOpenChannelAvatar(channel), width: "".concat(width, "px"), height: "".concat(height, "px"), alt: (channel === null || channel === void 0 ? void 0 : channel.name) || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE }));
    }, [channel === null || channel === void 0 ? void 0 : channel.coverUrl, theme]);
    return (React__default.default.createElement(React__default.default.Fragment, null, memoizedAvatar));
}

module.exports = ChannelAvatar;
//# sourceMappingURL=OpenChannelAvatar.js.map
