'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_ContextMenu = require('../chunks/bundle-KogLMh5_.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_ReactionButton = require('./ReactionButton.js');
var index = require('../chunks/bundle-DiIxiEgV.js');
require('../chunks/bundle-8lqFENCn.js');
require('react-dom');
require('../chunks/bundle-C2B_FD-S.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-g72Ialyc.js');
require('../withSendbird.js');
require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-DPH5liyx.js');
require('../chunks/bundle-DLuC20f2.js');
require('../chunks/bundle-B8SVf9Ei.js');
require('../chunks/bundle-C4475KDA.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageEmojiMenu(_a) {
    var className = _a.className, message = _a.message, userId = _a.userId, _b = _a.spaceFromTrigger, spaceFromTrigger = _b === void 0 ? { x: 0, y: 0 } : _b, emojiContainer = _a.emojiContainer, filterEmojiCategoryIds = _a.filterEmojiCategoryIds, toggleReaction = _a.toggleReaction;
    var triggerRef = React.useRef(null);
    var containerRef = React.useRef(null);
    var filteredEmojis = React.useMemo(function () {
        return index.getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message));
    }, [emojiContainer, filterEmojiCategoryIds]);
    if (index.isPendingMessage(message) || index.isFailedMessage(message)) {
        return null;
    }
    return (React__default.default.createElement("div", { className: index.getClassName([className !== null && className !== void 0 ? className : '', 'sendbird-message-item-reaction-menu']), ref: containerRef },
        React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-message-item-reaction-menu__trigger", ref: triggerRef, width: "32px", height: "32px", onClick: function () {
                    toggleDropdown();
                } },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-message-item-reaction-menu__trigger__icon", testID: "sendbird-message-item-reaction-menu__trigger__icon", type: ui_Icon.IconTypes.EMOJI_MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE, width: "24px", height: "24px" }))); }, menuItems: function (closeDropdown) {
                if (filteredEmojis.length === 0)
                    return null;
                return (React__default.default.createElement(ui_ContextMenu.EmojiListItems, { id: ui_ContextMenu.getObservingId(message.messageId), parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: closeDropdown, spaceFromTrigger: spaceFromTrigger }, filteredEmojis.map(function (emoji) {
                    var _a, _b, _c;
                    var isReacted = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; })) || false;
                    return (React__default.default.createElement(ui_ReactionButton, { key: emoji.key, width: "36px", height: "36px", selected: isReacted, onClick: function () {
                            closeDropdown();
                            toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                        }, testID: "ui_emoji_reactions_menu_".concat(emoji.key) },
                        React__default.default.createElement(ui_ImageRenderer.default, { url: emoji.url, width: "28px", height: "28px", placeHolder: function (_a) {
                                var style = _a.style;
                                return (React__default.default.createElement("div", { style: style },
                                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.QUESTION, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                            } })));
                })));
            } })));
}

exports.MessageEmojiMenu = MessageEmojiMenu;
exports.default = MessageEmojiMenu;
//# sourceMappingURL=MessageItemReactionMenu.js.map
