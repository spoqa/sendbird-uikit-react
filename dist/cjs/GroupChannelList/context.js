'use strict';

var _tslib = require('../chunks/bundle-8lqFENCn.js');
var React = require('react');
var groupChannel = require('@sendbird/chat/groupChannel');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../chunks/bundle-Dpym1DIx.js');
var useMarkAsDeliveredScheduler = require('../chunks/bundle-D9UEqnPl.js');
var utils = require('../chunks/bundle-C2B_FD-S.js');
require('../withSendbird.js');
require('../chunks/bundle-mOf92gcC.js');
require('../chunks/bundle-DiIxiEgV.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-D7Mdigg1.js');
require('../chunks/bundle-CmvLtQdY.js');
require('../chunks/bundle-BB49PpRR.js');
require('react-dom');
require('../chunks/bundle-CNFrX8wi.js');
require('../chunks/bundle-DPH5liyx.js');
require('../chunks/bundle-C4475KDA.js');
require('../ui/IconButton.js');
require('../ui/Button.js');
require('../chunks/bundle-DLuC20f2.js');
require('../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-g72Ialyc.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BDLZ01qm.js');
require('../chunks/bundle-KogLMh5_.js');
require('../ui/SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListContext = React__default.default.createContext(null);
var GroupChannelListProvider = function (props) {
    var _a, _b, _c;
    var children = props.children, _d = props.className, className = _d === void 0 ? '' : _d, selectedChannelUrl = props.selectedChannelUrl, _e = props.disableAutoSelect, disableAutoSelect = _e === void 0 ? false : _e, allowProfileEdit = props.allowProfileEdit, isTypingIndicatorEnabled = props.isTypingIndicatorEnabled, isMessageReceiptStatusEnabled = props.isMessageReceiptStatusEnabled, channelListQueryParams = props.channelListQueryParams, onThemeChange = props.onThemeChange, _f = props.onChannelSelect, onChannelSelect = _f === void 0 ? utils.noop : _f, _g = props.onChannelCreated, onChannelCreated = _g === void 0 ? utils.noop : _g, onCreateChannelClick = props.onCreateChannelClick, onBeforeCreateChannel = props.onBeforeCreateChannel, onUserProfileUpdated = props.onUserProfileUpdated;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var config = globalStore.config, stores = globalStore.stores;
    var sdkStore = stores.sdkStore;
    var sdk = sdkStore.sdk;
    var isConnected = useMarkAsDeliveredScheduler.useOnlineStatus(sdk, config.logger);
    var scheduler = useMarkAsDeliveredScheduler.useMarkAsDeliveredScheduler({ isConnected: isConnected }, config);
    var channelListDataSource = uikitTools.useGroupChannelList(sdk, {
        collectionCreator: getCollectionCreator(sdk, channelListQueryParams),
        markAsDelivered: function (channels) { return channels.forEach(scheduler.push); },
        onChannelsDeleted: function (channelUrls) {
            channelUrls.forEach(function (url) {
                if (url === selectedChannelUrl)
                    onChannelSelect(null);
            });
        },
    });
    var refreshing = channelListDataSource.refreshing, initialized = channelListDataSource.initialized, groupChannels = channelListDataSource.groupChannels, refresh = channelListDataSource.refresh, loadMore = channelListDataSource.loadMore;
    // SideEffect: Auto select channel
    React.useEffect(function () {
        var _a;
        if (!disableAutoSelect && stores.sdkStore.initialized && initialized) {
            if (!selectedChannelUrl)
                onChannelSelect((_a = groupChannels[0]) !== null && _a !== void 0 ? _a : null);
        }
    }, [disableAutoSelect, stores.sdkStore.initialized, initialized, selectedChannelUrl]);
    // Recreates the GroupChannelCollection when `channelListQueryParams` change
    React.useEffect(function () {
        refresh();
    }, [
        Object.keys(channelListQueryParams !== null && channelListQueryParams !== void 0 ? channelListQueryParams : {}).sort()
            .map(function (key) { return "".concat(key, "=").concat(encodeURIComponent(JSON.stringify(channelListQueryParams[key]))); })
            .join('&'),
    ]);
    var _h = React.useState([]), typingChannelUrls = _h[0], setTypingChannelUrls = _h[1];
    uikitTools.useGroupChannelHandler(sdk, {
        onTypingStatusUpdated: function (channel) {
            var _a;
            var channelList = typingChannelUrls.filter(function (channelUrl) { return channelUrl !== channel.url; });
            if (((_a = channel.getTypingUsers()) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                setTypingChannelUrls(channelList.concat(channel.url));
            }
            else {
                setTypingChannelUrls(channelList);
            }
        },
    });
    return (React__default.default.createElement(GroupChannelListContext.Provider, { value: {
            className: className,
            selectedChannelUrl: selectedChannelUrl,
            disableAutoSelect: disableAutoSelect,
            allowProfileEdit: (_a = allowProfileEdit !== null && allowProfileEdit !== void 0 ? allowProfileEdit : config.allowProfileEdit) !== null && _a !== void 0 ? _a : true,
            isTypingIndicatorEnabled: (_b = isTypingIndicatorEnabled !== null && isTypingIndicatorEnabled !== void 0 ? isTypingIndicatorEnabled : config.groupChannelList.enableTypingIndicator) !== null && _b !== void 0 ? _b : false,
            isMessageReceiptStatusEnabled: (_c = isMessageReceiptStatusEnabled !== null && isMessageReceiptStatusEnabled !== void 0 ? isMessageReceiptStatusEnabled : config.groupChannelList.enableMessageReceiptStatus) !== null && _c !== void 0 ? _c : false,
            onChannelSelect: onChannelSelect,
            onChannelCreated: onChannelCreated,
            onThemeChange: onThemeChange,
            onCreateChannelClick: onCreateChannelClick,
            onBeforeCreateChannel: onBeforeCreateChannel,
            onUserProfileUpdated: onUserProfileUpdated,
            typingChannelUrls: typingChannelUrls,
            refreshing: refreshing,
            initialized: initialized,
            groupChannels: groupChannels,
            refresh: refresh,
            loadMore: loadMore,
        } },
        React__default.default.createElement(UserProfileContext.UserProfileProvider, _tslib.__assign({}, props),
            React__default.default.createElement("div", { className: "sendbird-channel-list ".concat(className) }, children))));
};
var useGroupChannelListContext = function () {
    var context = React.useContext(GroupChannelListContext);
    if (!context)
        throw new Error('GroupChannelListContext not found. Use within the GroupChannelList module.');
    return context;
};
function getCollectionCreator(sdk, channelListQueryParams) {
    return function (defaultParams) {
        var params = _tslib.__assign(_tslib.__assign({}, defaultParams), channelListQueryParams);
        var filter = new groupChannel.GroupChannelFilter(params);
        filter.setSearchFilter(['metadata_key'], 'isMatching');
        filter.setSearchFilter(['metadata_values'], 'true');
        return sdk.groupChannel.createGroupChannelCollection(_tslib.__assign(_tslib.__assign({}, params), { filter: filter }));
    };
}

exports.GroupChannelListContext = GroupChannelListContext;
exports.GroupChannelListProvider = GroupChannelListProvider;
exports.useGroupChannelListContext = useGroupChannelListContext;
//# sourceMappingURL=context.js.map
