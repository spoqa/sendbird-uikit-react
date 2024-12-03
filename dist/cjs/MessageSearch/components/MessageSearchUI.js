'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CNFrX8wi.js');
var MessageSearch_context = require('../context.js');
var ui_MessageSearchItem = require('../../ui/MessageSearchItem.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_MessageSearchFileItem = require('../../ui/MessageSearchFileItem.js');
require('../../chunks/bundle-8lqFENCn.js');
require('../../chunks/bundle-DPH5liyx.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Ch-SV_mC.js');
require('../../chunks/bundle-CmvLtQdY.js');
require('../../chunks/bundle-Bfsxi3N_.js');
require('../../chunks/bundle-CyjbhYln.js');
require('../../chunks/bundle-CiYpjB6z.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-C2B_FD-S.js');
require('../../chunks/bundle-ByKRIG_M.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DLuC20f2.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DiIxiEgV.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-D7Mdigg1.js');
require('../../chunks/bundle-BB49PpRR.js');
require('../../chunks/bundle-CIgNQEW3.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MessageSearchUI = function (_a) {
    var renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderPlaceHolderNoString = _a.renderPlaceHolderNoString, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderSearchItem = _a.renderSearchItem;
    var _b = MessageSearch_context.useMessageSearchContext(), isInvalid = _b.isInvalid, searchString = _b.searchString, requestString = _b.requestString, currentChannel = _b.currentChannel, retryCount = _b.retryCount, setRetryCount = _b.setRetryCount, loading = _b.loading, scrollRef = _b.scrollRef, hasMoreResult = _b.hasMoreResult, onScroll = _b.onScroll, allMessages = _b.allMessages, onResultClick = _b.onResultClick, selectedMessageId = _b.selectedMessageId, setSelectedMessageId = _b.setSelectedMessageId;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var handleRetryToConnect = function () {
        setRetryCount(retryCount + 1);
    };
    var handleOnScroll = function (e) {
        var scrollElement = e.target;
        var scrollTop = scrollElement.scrollTop, scrollHeight = scrollElement.scrollHeight, clientHeight = scrollElement.clientHeight;
        if (!hasMoreResult) {
            return;
        }
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            onScroll(function () {
                // after load more searched messages
            });
        }
    };
    var getChannelName = function () {
        if (currentChannel && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) !== 'Group Channel') {
            return currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name;
        }
        if (currentChannel && ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) === 'Group Channel' || !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name))) {
            return currentChannel.members.map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        }
        return stringSet.NO_TITLE;
    };
    if (isInvalid && searchString && requestString) {
        return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || (React__default.default.createElement("div", { className: "sendbird-message-search" },
            React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG, retryToConnect: handleRetryToConnect })));
    }
    if (loading && searchString && requestString) {
        return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || (React__default.default.createElement("div", { className: "sendbird-message-search" },
            React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.SEARCHING })));
    }
    if (!searchString) {
        return (renderPlaceHolderNoString === null || renderPlaceHolderNoString === void 0 ? void 0 : renderPlaceHolderNoString()) || (React__default.default.createElement("div", { className: "sendbird-message-search" },
            React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.SEARCH_IN, searchInString: getChannelName() })));
    }
    return (React__default.default.createElement("div", { className: "sendbird-message-search", onScroll: handleOnScroll, ref: scrollRef }, (allMessages.length > 0)
        ? (allMessages.map(function (message) {
            if (renderSearchItem) {
                return renderSearchItem({ message: message, onResultClick: onResultClick });
            }
            if (message.messageType === 'file') {
                return (React__default.default.createElement(ui_MessageSearchFileItem, { className: "sendbird-message-search__message-search-item", message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                        onResultClick === null || onResultClick === void 0 ? void 0 : onResultClick(message);
                        setSelectedMessageId(message.messageId);
                    } }));
            }
            return (React__default.default.createElement(ui_MessageSearchItem, { className: "sendbird-message-search__message-search-item", message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                    onResultClick === null || onResultClick === void 0 ? void 0 : onResultClick(message);
                    setSelectedMessageId(message.messageId);
                } }));
        }))
        : (renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList()) || (React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_RESULTS }))));
};

exports.MessageSearchUI = MessageSearchUI;
exports.default = MessageSearchUI;
//# sourceMappingURL=MessageSearchUI.js.map
