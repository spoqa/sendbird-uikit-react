import React__default, { useRef, useMemo } from 'react';
import { C as ContextMenu, f as EmojiListItems, g as getObservingId } from '../chunks/bundle-BQ7ajvH5.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import ReactionButton from './ReactionButton.js';
import { u as getEmojiListByCategoryIds, v as isPendingMessage, w as isFailedMessage, x as getClassName } from '../chunks/bundle-hVzh_gnK.js';
import '../chunks/bundle-DzrKlXwY.js';
import 'react-dom';
import '../chunks/bundle-CSGqtO-d.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-BhlLFjHF.js';
import '../withSendbird.js';
import '../chunks/bundle-CoXgb0Rb.js';
import '../chunks/bundle-CANWvEzj.js';
import '../chunks/bundle-ozUngJUV.js';
import '../chunks/bundle-DenfmdNl.js';
import '../chunks/bundle-D3I4IOQr.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-C4rWp9Fy.js';

function MessageEmojiMenu(_a) {
    var className = _a.className, message = _a.message, userId = _a.userId, _b = _a.spaceFromTrigger, spaceFromTrigger = _b === void 0 ? { x: 0, y: 0 } : _b, emojiContainer = _a.emojiContainer, filterEmojiCategoryIds = _a.filterEmojiCategoryIds, toggleReaction = _a.toggleReaction;
    var triggerRef = useRef(null);
    var containerRef = useRef(null);
    var filteredEmojis = useMemo(function () {
        return getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message));
    }, [emojiContainer, filterEmojiCategoryIds]);
    if (isPendingMessage(message) || isFailedMessage(message)) {
        return null;
    }
    return (React__default.createElement("div", { className: getClassName([className !== null && className !== void 0 ? className : '', 'sendbird-message-item-reaction-menu']), ref: containerRef },
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(IconButton, { className: "sendbird-message-item-reaction-menu__trigger", ref: triggerRef, width: "32px", height: "32px", onClick: function () {
                    toggleDropdown();
                } },
                React__default.createElement(Icon, { className: "sendbird-message-item-reaction-menu__trigger__icon", testID: "sendbird-message-item-reaction-menu__trigger__icon", type: IconTypes.EMOJI_MORE, fillColor: IconColors.CONTENT_INVERSE, width: "24px", height: "24px" }))); }, menuItems: function (closeDropdown) {
                if (filteredEmojis.length === 0)
                    return null;
                return (React__default.createElement(EmojiListItems, { id: getObservingId(message.messageId), parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: closeDropdown, spaceFromTrigger: spaceFromTrigger }, filteredEmojis.map(function (emoji) {
                    var _a, _b, _c;
                    var isReacted = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; })) || false;
                    return (React__default.createElement(ReactionButton, { key: emoji.key, width: "36px", height: "36px", selected: isReacted, onClick: function () {
                            closeDropdown();
                            toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                        }, testID: "ui_emoji_reactions_menu_".concat(emoji.key) },
                        React__default.createElement(ImageRenderer, { url: emoji.url, width: "28px", height: "28px", placeHolder: function (_a) {
                                var style = _a.style;
                                return (React__default.createElement("div", { style: style },
                                    React__default.createElement(Icon, { type: IconTypes.QUESTION, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                            } })));
                })));
            } })));
}

export { MessageEmojiMenu, MessageEmojiMenu as default };
//# sourceMappingURL=MessageItemReactionMenu.js.map
