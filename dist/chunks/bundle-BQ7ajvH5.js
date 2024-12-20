import { e as __extends, _ as __assign, c as __spreadArray } from './bundle-DzrKlXwY.js';
import React__default, { useState, useRef, useCallback, useEffect, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { c as classnames } from './bundle-CSGqtO-d.js';
import { Role } from '@sendbird/chat';
import { OpenChannel } from '@sendbird/chat/openChannel';
import SortByRow from '../ui/SortByRow.js';
import '../withSendbird.js';
import '../ui/IconButton.js';
import './bundle-hVzh_gnK.js';
import './bundle-CoXgb0Rb.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './bundle-ozUngJUV.js';

var APP_LAYOUT_ROOT = 'sendbird-app__layout';

var HEIGHT_PADDING = 60;
var MenuItems$1 = /** @class */ (function (_super) {
    __extends(MenuItems, _super);
    function MenuItems(props) {
        var _this = _super.call(this, props) || this;
        _this.menuRef = React__default.createRef();
        _this.setupEvents = function () {
            var closeDropdown = _this.props.closeDropdown;
            var menuRef = _this.menuRef;
            var handleClickOutside = function (event) {
                var _a, _b;
                if ((menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) && !((_b = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, event.target))) {
                    closeDropdown === null || closeDropdown === void 0 ? void 0 : closeDropdown();
                }
            };
            _this.setState({
                handleClickOutside: handleClickOutside,
            });
            document.addEventListener('mousedown', handleClickOutside);
        };
        _this.cleanUpEvents = function () {
            var handleClickOutside = _this.state.handleClickOutside;
            document.removeEventListener('mousedown', handleClickOutside);
        };
        _this.getMenuPosition = function () {
            var _a, _b, _c;
            var _d = _this.props, parentRef = _d.parentRef, openLeft = _d.openLeft;
            var portalElement = document.getElementById(APP_LAYOUT_ROOT);
            var portalRect = ((_a = portalElement === null || portalElement === void 0 ? void 0 : portalElement.getBoundingClientRect) === null || _a === void 0 ? void 0 : _a.call(portalElement)) || {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
            var parentRect = (_c = (_b = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect) === null || _c === void 0 ? void 0 : _c.call(_b);
            var x = ((parentRect === null || parentRect === void 0 ? void 0 : parentRect.x) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.left) || 0) - portalRect.left;
            var y = ((parentRect === null || parentRect === void 0 ? void 0 : parentRect.y) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.top) || 0) - portalRect.top;
            var menuStyle = {
                top: y,
                left: x,
            };
            if (!_this.menuRef.current)
                return menuStyle;
            var rect = _this.menuRef.current.getBoundingClientRect();
            if (y + rect.height + HEIGHT_PADDING > portalRect.height) {
                menuStyle.top -= rect.height;
            }
            if (x + rect.width > portalRect.width && !openLeft) {
                menuStyle.left -= rect.width;
            }
            if (menuStyle.top < 0) {
                menuStyle.top = rect.height < portalRect.height ? (portalRect.height - rect.height) / 2 : 0;
            }
            menuStyle.top += 32;
            if (openLeft) {
                var padding = Number.isNaN(rect.width - 30)
                    ? 108 // default
                    : rect.width - 30;
                menuStyle.left -= padding;
            }
            if (menuStyle.left < 0) {
                menuStyle.left = rect.width < portalRect.width ? (portalRect.width - rect.width) / 2 : 0;
            }
            _this.setState({ menuStyle: menuStyle });
            return menuStyle;
        };
        _this.state = {
            menuStyle: { top: 0, left: 0 },
            handleClickOutside: function () { },
        };
        return _this;
    }
    MenuItems.prototype.componentDidMount = function () {
        this.setupEvents();
        this.getMenuPosition();
    };
    MenuItems.prototype.componentWillUnmount = function () {
        this.cleanUpEvents();
    };
    MenuItems.prototype.render = function () {
        var portalElement = document.getElementById(MENU_ROOT_ID);
        if (!portalElement)
            return React__default.createElement(React__default.Fragment, null);
        var menuStyle = this.state.menuStyle;
        var _a = this.props, children = _a.children, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b, testID = _a.testID, id = _a.id;
        return (createPortal((React__default.createElement("div", { className: classnames(MENU_OBSERVING_CLASS_NAME, className), "data-testid": testID, id: id },
            React__default.createElement("div", { className: "sendbird-dropdown__menu-backdrop" }),
            React__default.createElement("ul", { className: "".concat(className, " sendbird-dropdown__menu"), ref: this.menuRef, style: __assign({ display: 'inline-block', position: 'fixed', left: "".concat(Math.round(menuStyle.left), "px"), top: "".concat(Math.round(menuStyle.top), "px") }, style), "data-testid": "sendbird-dropdown-menu" }, children))), portalElement));
    };
    return MenuItems;
}(React__default.Component));

var MuteMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, testID = _a.testID, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = useState(user.isMuted), isMuted = _g[0], setIsMuted = _g[1];
    var isProcessing = useRef(false);
    var onClickHandler = useCallback(function () {
        if (!isProcessing.current) {
            isProcessing.current = true;
            if (isMuted) {
                channel.unmuteUser(user)
                    .then(function () {
                    setIsMuted(false);
                    onChange(channel, user, false);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
            else {
                channel.muteUser(user)
                    .then(function () {
                    setIsMuted(true);
                    onChange(channel, user, true);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
        }
    }, [isProcessing, isMuted]);
    return (React__default.createElement(MenuItem, { className: className, disable: disable, testID: testID !== null && testID !== void 0 ? testID : dataSbId, onClick: onClickHandler }, children));
};

var OperatorMenuItem = function (_a) {
    var channel = _a.channel, user = _a.user, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, testID = _a.testID, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.onError, onError = _f === void 0 ? function () { } : _f;
    var _g = useState(channel instanceof OpenChannel
        ? channel.isOperator(user)
        : user.role === Role.OPERATOR), isOperator = _g[0], setIsOperator = _g[1];
    var isProcessing = useRef(false);
    var onClickHandler = useCallback(function () {
        if (!isProcessing.current) {
            isProcessing.current = true;
            if (isOperator) {
                channel.removeOperators([user.userId])
                    .then(function () {
                    setIsOperator(false);
                    onChange(channel, user, false);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
            else {
                channel.addOperators([user.userId])
                    .then(function () {
                    setIsOperator(true);
                    onChange(channel, user, true);
                    isProcessing.current = false;
                })
                    .catch(function (err) {
                    onError(err);
                    isProcessing.current = false;
                });
            }
        }
    }, [isProcessing, isOperator]);
    return (React__default.createElement(MenuItem, { className: className, disable: disable, testID: testID !== null && testID !== void 0 ? testID : dataSbId, onClick: onClickHandler }, children));
};

var defaultParentRect = { x: 0, y: 0, left: 0, top: 0, height: 0 };
var EmojiListItems$1 = function (_a) {
    var id = _a.id, children = _a.children, parentRef = _a.parentRef, parentContainRef = _a.parentContainRef, _b = _a.spaceFromTrigger, spaceFromTrigger = _b === void 0 ? { x: 0, y: 0 } : _b, closeDropdown = _a.closeDropdown;
    var _c = useState({ left: 0, top: 0 }), reactionStyle = _c[0], setReactionStyle = _c[1];
    var reactionRef = useRef(null);
    /* showParent & hideParent */
    useEffect(function () {
        if (parentContainRef && (parentContainRef === null || parentContainRef === void 0 ? void 0 : parentContainRef.current)) {
            parentContainRef.current.classList.add('sendbird-reactions--pressed');
        }
        return function () {
            if (parentContainRef && (parentContainRef === null || parentContainRef === void 0 ? void 0 : parentContainRef.current)) {
                parentContainRef.current.classList.remove('sendbird-reactions--pressed');
            }
        };
    }, []);
    /* setupEvents & cleanupEvents */
    useEffect(function () {
        var handleClickOutSide = function (event) {
            var _a, _b;
            if ((reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) && !((_b = (_a = reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, event.target))) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutSide);
        return function () {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);
    /* getBarPosition */
    useEffect(function () {
        var _a, _b, _c, _d;
        var spaceFromTriggerX = (spaceFromTrigger === null || spaceFromTrigger === void 0 ? void 0 : spaceFromTrigger.x) || 0;
        var spaceFromTriggerY = (spaceFromTrigger === null || spaceFromTrigger === void 0 ? void 0 : spaceFromTrigger.y) || 0;
        var portalElement = document.getElementById(APP_LAYOUT_ROOT);
        var portalRect = ((_a = portalElement === null || portalElement === void 0 ? void 0 : portalElement.getBoundingClientRect) === null || _a === void 0 ? void 0 : _a.call(portalElement)) || {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
        var parentRect = (_c = (_b = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect()) !== null && _c !== void 0 ? _c : defaultParentRect;
        var x = ((parentRect === null || parentRect === void 0 ? void 0 : parentRect.x) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.left) || 0) - portalRect.left;
        var y = ((parentRect === null || parentRect === void 0 ? void 0 : parentRect.y) || (parentRect === null || parentRect === void 0 ? void 0 : parentRect.top) || 0) - portalRect.top;
        var reactionStyle = {
            top: y,
            left: x,
        };
        if (!(reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current)) {
            setReactionStyle(reactionStyle);
        }
        else {
            var rect = (_d = reactionRef === null || reactionRef === void 0 ? void 0 : reactionRef.current) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect();
            if (reactionStyle.top < rect.height) {
                reactionStyle.top += parentRect.height;
                reactionStyle.top += spaceFromTriggerY;
            }
            else {
                reactionStyle.top -= rect.height;
                reactionStyle.top -= spaceFromTriggerY;
            }
            reactionStyle.left -= rect.width / 2;
            reactionStyle.left += (parentRect.height / 2) - 2;
            reactionStyle.left += spaceFromTriggerX;
            var maximumLeft = portalRect.width - rect.width;
            if (maximumLeft < reactionStyle.left) {
                reactionStyle.left = maximumLeft;
            }
            if (reactionStyle.left < 0) {
                reactionStyle.left = 0;
            }
            setReactionStyle(reactionStyle);
        }
    }, []);
    var rootElement = document.getElementById(EMOJI_MENU_ROOT_ID);
    if (rootElement) {
        return (createPortal(React__default.createElement("div", { className: MENU_OBSERVING_CLASS_NAME, id: id },
            React__default.createElement("div", { className: "sendbird-dropdown__menu-backdrop" }),
            React__default.createElement("ul", { className: "sendbird-dropdown__reaction-bar", "data-testid": "sendbird-dropdown__reaction-bar", ref: reactionRef, style: {
                    display: 'inline-block',
                    position: 'fixed',
                    left: "".concat(Math.round(reactionStyle.left), "px"),
                    top: "".concat(Math.round(reactionStyle.top), "px"),
                } },
                React__default.createElement(SortByRow, { className: "sendbird-dropdown__reaction-bar__row", maxItemCount: 8, itemWidth: 44, itemHeight: 40 }, children))), rootElement));
    }
    return null;
};

var MessageMenuContext = createContext(undefined);
var MessageMenuProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default.createElement(MessageMenuContext.Provider, { value: value }, children));
};
var useMessageMenuContext = function () {
    var context = useContext(MessageMenuContext);
    if (!context) {
        throw new Error('useMessageMenuContext must be used within a MessageMenuProvider.');
    }
    return context;
};

var MenuItem$1 = function (_a) {
    var className = _a.className, disabled = _a.disabled, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b, testID = _a.testID, onClick = _a.onClick, children = _a.children;
    var handleClickEvent = function (e) {
        if (!disabled && onClick) {
            onClick(e);
        }
    };
    return (React__default.createElement("li", { className: classnames('sendbird-menu-item', className), role: "menuitem", "aria-disabled": disabled, "data-testid": testID, tabIndex: tabIndex, onClick: handleClickEvent, onKeyDown: function (e) { if (e.code === 'Enter')
            handleClickEvent(e); } },
        React__default.createElement(Label, { className: "sendbird-menu-item__text", type: LabelTypography.SUBTITLE_2, color: disabled ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, children)));
};
var BottomSheetMenuItem = function (_a) {
    var className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.tabIndex, tabIndex = _c === void 0 ? 0 : _c, testID = _a.testID, onClick = _a.onClick, children = _a.children;
    return (React__default.createElement("div", { className: classnames('sendbird-message__bottomsheet--action', className), role: "menuitem", tabIndex: tabIndex, "aria-disabled": disabled, onClick: onClick, "data-testid": testID }, children));
};

// # useElementObserve
var MENU_OBSERVING_CLASS_NAME = 'sendbird-observing-message-menu';
var getObservingId = function (txt) { return "m_".concat(txt); };
var MenuItems = MenuItems$1;
var EmojiListItems = EmojiListItems$1;
/**
 * @deprecated
 * Use the `MenuItem` from '@sendbird/uikit-react/ui/MessageMenu' instead
 */
var MenuItem = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onClick = _a.onClick, _c = _a.disable, disable = _c === void 0 ? false : _c, _d = _a.dataSbId, dataSbId = _d === void 0 ? '' : _d, testID = _a.testID;
    return (React__default.createElement(MenuItem$1, { className: classnames.apply(void 0, __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), false), ['sendbird-dropdown__menu-item',
            disable ? 'disable' : ''], false)), disabled: disable, testID: testID !== null && testID !== void 0 ? testID : dataSbId, onClick: onClick }, children));
};
var MENU_ROOT_ID = 'sendbird-dropdown-portal';
var MenuRoot = function () { return (React__default.createElement("div", { id: MENU_ROOT_ID, className: MENU_ROOT_ID })); };
var EMOJI_MENU_ROOT_ID = 'sendbird-emoji-list-portal';
var EmojiReactionListRoot = function () { return React__default.createElement("div", { id: EMOJI_MENU_ROOT_ID }); };
function ContextMenu(_a) {
    var menuTrigger = _a.menuTrigger, menuItems = _a.menuItems, isOpen = _a.isOpen, onClick = _a.onClick;
    var _b = useState(false), showMenu = _b[0], setShowMenu = _b[1];
    return (React__default.createElement("div", { className: "sendbird-context-menu", onClick: onClick }, menuTrigger === null || menuTrigger === void 0 ? void 0 :
        menuTrigger(function () { return setShowMenu(!showMenu); }),
        (showMenu || isOpen) && menuItems(function () { return setShowMenu(false); })));
}

export { APP_LAYOUT_ROOT as A, BottomSheetMenuItem as B, ContextMenu as C, EMOJI_MENU_ROOT_ID as E, MessageMenuProvider as M, OperatorMenuItem as O, MenuItem$1 as a, MenuItems as b, MenuItem as c, MENU_ROOT_ID as d, MENU_OBSERVING_CLASS_NAME as e, EmojiListItems as f, getObservingId as g, MuteMenuItem as h, EmojiReactionListRoot as i, MenuRoot as j, useMessageMenuContext as u };
//# sourceMappingURL=bundle-BQ7ajvH5.js.map
