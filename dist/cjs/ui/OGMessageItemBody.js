'use strict';

var React = require('react');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-DLuC20f2.js');
var index = require('../chunks/bundle-DiIxiEgV.js');
var LocalizationContext = require('../chunks/bundle-CNFrX8wi.js');
var index$1 = require('../chunks/bundle-D14ErjFX.js');
var tokenize = require('../chunks/bundle-kho6esBq.js');
var consts = require('../chunks/bundle-YryjcbxB.js');
var MediaQueryContext = require('../chunks/bundle-C4475KDA.js');
var utils = require('../chunks/bundle-C2B_FD-S.js');
require('../chunks/bundle-8lqFENCn.js');
require('../chunks/bundle-DPH5liyx.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('../Message/context.js');
require('./MentionLabel.js');
require('../chunks/bundle-KogLMh5_.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-g72Ialyc.js');
require('../withSendbird.js');
require('./IconButton.js');
require('./UserProfile.js');
require('../chunks/bundle-Dpym1DIx.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-mOf92gcC.js');
require('./Button.js');
require('css-vars-ponyfill');
require('../chunks/bundle-BDLZ01qm.js');
require('../useSendbirdStateContext.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-CnbBBusa.js');
require('../chunks/bundle-CiYpjB6z.js');
require('../chunks/bundle-ByKRIG_M.js');
require('./LinkLabel.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OGMessageItemBody(_a) {
    var _b, _c, _d, _e;
    var className = _a.className, message = _a.message, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, _g = _a.mouseHover, mouseHover = _g === void 0 ? false : _g, _h = _a.isMentionEnabled, isMentionEnabled = _h === void 0 ? false : _h, _j = _a.isReactionEnabled, isReactionEnabled = _j === void 0 ? false : _j, _k = _a.isMarkdownEnabled, isMarkdownEnabled = _k === void 0 ? false : _k, _l = _a.onMessageHeightChange, onMessageHeightChange = _l === void 0 ? function () {
        /* noop */
    } : _l;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && (message === null || message === void 0 ? void 0 : message.mentionedUsers) && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
    var tokens = React.useMemo(function () {
        var _a;
        if (isMessageMentioned) {
            return tokenize.tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: isMarkdownEnabled,
            });
        }
        return tokenize.tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: isMarkdownEnabled,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    var openOpenGraphURL = function () { var _a; return utils.openURL((_a = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _a === void 0 ? void 0 : _a.url); };
    return (React__default.default.createElement("div", { className: index.getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-og-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            isReactionEnabled && ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : '',
        ]) },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 },
            React__default.default.createElement("div", { className: consts.OG_MESSAGE_BODY_CLASSNAME },
                React__default.default.createElement(index$1.TextFragment, { tokens: tokens }),
                index.isEditedMessage(message) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-og-message-item-body__text-bubble__message", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
        ((_e = message.ogMetaData) === null || _e === void 0 ? void 0 : _e.defaultImage) && (React__default.default.createElement(OGImageSection, { onClick: openOpenGraphURL, ogImage: message.ogMetaData.defaultImage, onMessageHeightChange: onMessageHeightChange })),
        message.ogMetaData && (React__default.default.createElement(OGDescriptionSection, { onClick: openOpenGraphURL, ogMetaData: message.ogMetaData, onMessageHeightChange: onMessageHeightChange })),
        React__default.default.createElement("div", { className: "sendbird-og-message-item-body__cover" })));
}
var OGImageSection = function (props) {
    var onClick = props.onClick, ogImage = props.ogImage, onMessageHeightChange = props.onMessageHeightChange;
    var imageRef = React.useRef(null);
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    return (React__default.default.createElement("div", { ref: imageRef, className: utils.classnames('sendbird-og-message-item-body__og-thumbnail', !ogImage.url && 'sendbird-og-message-item-body__og-thumbnail__empty'), onClick: function () { return onClick(); } },
        React__default.default.createElement(ui_ImageRenderer.default, { className: "sendbird-og-message-item-body__og-thumbnail__image", url: ogImage.url || '', alt: ogImage.alt || '', width: "100%", height: isMobile ? '136px' : '240px', onLoad: onMessageHeightChange, onError: function () {
                var _a, _b;
                try {
                    (_b = (_a = imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add('sendbird-og-message-item-body__og-thumbnail__empty');
                }
                catch (error) {
                    // do nothing
                }
            }, defaultComponent: React__default.default.createElement("div", { className: "sendbird-og-message-item-body__og-thumbnail__place-holder" },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-og-message-item-body__og-thumbnail__place-holder__icon", type: ui_Icon.IconTypes.THUMBNAIL_NONE, width: "56px", height: "56px" })) })));
};
var OGDescriptionSection = function (props) {
    var onClick = props.onClick, ogMetaData = props.ogMetaData, onMessageHeightChange = props.onMessageHeightChange;
    React.useEffect(function () {
        onMessageHeightChange();
    }, [ogMetaData.title, ogMetaData.description, ogMetaData.url]);
    return (React__default.default.createElement("div", { className: "sendbird-og-message-item-body__description", onClick: function () { return onClick(); } },
        ogMetaData.title && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-og-message-item-body__description__title", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, ogMetaData.title)),
        ogMetaData.description && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-og-message-item-body__description__description", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, ogMetaData.description)),
        ogMetaData.url && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-og-message-item-body__description__url", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ogMetaData.url))));
};

module.exports = OGMessageItemBody;
//# sourceMappingURL=OGMessageItemBody.js.map
