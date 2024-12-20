import { _ as __assign, a as __awaiter, b as __generator, c as __spreadArray } from '../../chunks/bundle-DzrKlXwY.js';
import React__default, { useRef, useState, useLayoutEffect, useEffect, useMemo } from 'react';
import { f as format } from '../../chunks/bundle-DGIMAot8.js';
import { u as useLocalization } from '../../chunks/bundle-CoXgb0Rb.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-ozUngJUV.js';
import { R as RemoveMessage } from '../../chunks/bundle-Bhr_TR2L.js';
import FileViewer from '../../ui/FileViewer.js';
import { useThreadContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { S as SuggestedMentionList } from '../../chunks/bundle-D1GtYFN4.js';
import MessageInput from '../../ui/MessageInput.js';
import { ThreadListStateTypes } from '../context/types.js';
import { M as MessageInputKeys } from '../../chunks/bundle-hr_U44Gf.js';
import { d as MENU_ROOT_ID, E as EMOJI_MENU_ROOT_ID, g as getObservingId, e as MENU_OBSERVING_CLASS_NAME } from '../../chunks/bundle-BQ7ajvH5.js';
import { MessageEmojiMenu } from '../../ui/MessageItemReactionMenu.js';
import { x as getClassName, p as isThumbnailMessage, N as isOGMessage, c as isMultipleFilesMessage } from '../../chunks/bundle-hVzh_gnK.js';
import { M as MessageStatus } from '../../chunks/bundle-BlNFCGuE.js';
import EmojiReactions from '../../ui/EmojiReactions.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-D3I4IOQr.js';
import { u as useLongPress } from '../../chunks/bundle-DenfmdNl.js';
import { MobileMenu } from '../../ui/MobileMenu.js';
import { u as useThreadMessageKindKeySelector, a as useFileInfoListWithUploaded, T as ThreadMessageKind } from '../../chunks/bundle-B8lf1xwE.js';
import { d as deleteNullish, c as classnames } from '../../chunks/bundle-CSGqtO-d.js';
import { M as MessageMenu } from '../../chunks/bundle-BAzGFrnR.js';
import { u as useElementObserver } from '../../chunks/bundle-CE5Behab.js';
import { M as MessageProfile, a as MessageBody, b as MessageHeader } from '../../chunks/bundle-DhVASTH3.js';
import { R as Role } from '../../chunks/bundle-DDj8n5of.js';
import { useDirtyGetMentions } from '../../Message/hooks/useDirtyGetMentions.js';
import { g as getIsReactionEnabled } from '../../chunks/bundle-C5rW8psz.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-CFsIxv6o.js';
import '../../chunks/bundle-mp0bcmQc.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-DD_m7E5m.js';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../chunks/bundle-DigmkgLn.js';
import '../../chunks/bundle-DZkmyY7M.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-Dm9F5YQ1.js';
import '@sendbird/chat/message';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-DSUBvaRO.js';
import '../../chunks/bundle-BCJ-Fh04.js';
import '../../chunks/bundle-BeakbtZU.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-BsezbRjg.js';
import 'dompurify';
import '../../chunks/bundle-DHpN8BTy.js';
import '../../chunks/bundle-OKWbLM0b.js';
import '../../chunks/bundle-I9KgD7NR.js';
import '../../chunks/bundle-DUyUoN7x.js';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-D1RBLAur.js';
import '../../chunks/bundle-CEdTfjQa.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-8Ilf1Buq.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-DxM-SMP2.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Bk_9JtoO.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-DzAIhFU_.js';

function ThreadListItemContent(props) {
    var _this = this;
    var _a, _b, _c;
    // Internal props
    var className = props.className, userId = props.userId, channel = props.channel, message = props.message, _d = props.chainTop, chainTop = _d === void 0 ? false : _d, _e = props.chainBottom, chainBottom = _e === void 0 ? false : _e, _f = props.isReactionEnabled, isReactionEnabled = _f === void 0 ? false : _f, _g = props.disableQuoteMessage, disableQuoteMessage = _g === void 0 ? false : _g, replyType = props.replyType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, toggleReaction = props.toggleReaction, onReplyInThread = props.onReplyInThread;
    // Public props for customization
    var _h = deleteNullish(props), _j = _h.renderSenderProfile, renderSenderProfile = _j === void 0 ? function (props) { return React__default.createElement(MessageProfile, __assign({}, props)); } : _j, _k = _h.renderMessageBody, renderMessageBody = _k === void 0 ? function (props) { return React__default.createElement(MessageBody, __assign({}, props)); } : _k, _l = _h.renderMessageHeader, renderMessageHeader = _l === void 0 ? function (props) { return React__default.createElement(MessageHeader, __assign({}, props)); } : _l, _m = _h.renderMessageMenu, renderMessageMenu = _m === void 0 ? function (props) { return React__default.createElement(MessageMenu, __assign({}, props)); } : _m, _o = _h.renderEmojiMenu, renderEmojiMenu = _o === void 0 ? function () { return React__default.createElement(MessageEmojiMenu, __assign({}, props)); } : _o, _p = _h.renderEmojiReactions, renderEmojiReactions = _p === void 0 ? function (props) { return React__default.createElement(EmojiReactions, __assign({}, props)); } : _p, _q = _h.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _q === void 0 ? function (props) { return React__default.createElement(MobileMenu, __assign({}, props)); } : _q;
    var isMobile = useMediaQueryContext().isMobile;
    var _r = useLocalization(), dateLocale = _r.dateLocale, stringSet = _r.stringSet;
    var _s = (useSendbirdStateContext === null || useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext()) || {}, config = _s.config, eventHandlers = _s.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var isMenuMounted = useElementObserver("#".concat(getObservingId(message.messageId), ".").concat(MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(MENU_ROOT_ID),
        document.getElementById(EMOJI_MENU_ROOT_ID),
    ]);
    var _t = useThreadContext(), deleteMessage = _t.deleteMessage, onBeforeDownloadFileMessage = _t.onBeforeDownloadFileMessage, filterEmojiCategoryIds = _t.filterEmojiCategoryIds;
    var isByMe = (userId === ((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'pending')
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'failed');
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage)
        && !disableQuoteMessage);
    var supposedHoverClassName = isMenuMounted ? 'sendbird-mouse-hover' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isOgMessageEnabledInGroupChannel = channel.isGroupChannel() && config.groupChannel.enableOgtag;
    // Mobile
    var mobileMenuRef = useRef(null);
    var _u = useState(false), showMobileMenu = _u[0], setShowMobileMenu = _u[1];
    var longPress = useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    var threadMessageKindKey = useThreadMessageKindKeySelector({
        threadMessageKind: ThreadMessageKind.CHILD,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded(message);
    return (React__default.createElement("div", { className: classnames('sendbird-thread-list-item-content', className, isByMe ? 'outgoing' : 'incoming'), ref: mobileMenuRef },
        React__default.createElement("div", { className: classnames('sendbird-thread-list-item-content__left', isReactionEnabledInChannel && 'use-reaction', isByMe ? 'outgoing' : 'incoming') },
            (!isByMe && !chainBottom) && (renderSenderProfile(__assign(__assign({}, props), { className: 'sendbird-thread-list-item-content__left__avatar', isByMe: isByMe, displayThreadReplies: false }))),
            (isByMe && !isMobile) && (React__default.createElement("div", { className: classnames('sendbird-thread-list-item-content-menu', isReactionEnabledInChannel && 'use-reaction', isByMe ? 'outgoing' : 'incoming', supposedHoverClassName) },
                renderMessageMenu({
                    className: 'sendbird-thread-list-item-content-menu__normal-menu',
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    showEdit: showEdit,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    onReplyInThread: onReplyInThread,
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (React__default.createElement(React__default.Fragment, null, renderEmojiMenu({
                    className: 'sendbird-thread-list-item-content-menu__reaction-menu',
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                })))))),
        React__default.createElement("div", __assign({ className: "sendbird-thread-list-item-content__middle" }, (isMobile) ? __assign({}, longPress) : {}),
            (!isByMe && !chainTop && !useReplying) && renderMessageHeader(props),
            React__default.createElement("div", { className: getClassName(['sendbird-thread-list-item-content__middle__body-container']) },
                (isByMe && !chainBottom) && (React__default.createElement("div", { className: getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'left', supposedHoverClassName]) },
                    React__default.createElement("div", { className: "sendbird-thread-list-item-content__middle__body-container__created-at__component-container" },
                        React__default.createElement(MessageStatus, { message: message, channel: channel })))),
                renderMessageBody({
                    className: 'sendbird-thread-list-item-content__middle__message-item-body',
                    message: message,
                    channel: channel,
                    showFileViewer: showFileViewer,
                    mouseHover: false,
                    isMobile: isMobile,
                    config: config,
                    isReactionEnabledInChannel: isReactionEnabledInChannel,
                    isByMe: isByMe,
                    onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
                    /** This is for internal customization to keep the legacy */
                    customSubcomponentsProps: {
                        ThumbnailMessageItemBody: {
                            style: {
                                width: isMobile ? '100%' : '200px',
                                height: '148px',
                            },
                        },
                        MultipleFilesMessageItemBody: {
                            threadMessageKindKey: threadMessageKindKey,
                            statefulFileInfoList: statefulFileInfoList,
                        },
                    },
                    // TODO: Support these props in Thread
                    // onMessageHeightChange,
                    // onTemplateMessageRenderedCallback,
                }),
                (isReactionEnabledInChannel && ((_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length) > 0) && (React__default.createElement("div", { className: getClassName([
                        'sendbird-thread-list-item-content-reactions',
                        (!isByMe
                            || isThumbnailMessage(message)
                            || (isOgMessageEnabledInGroupChannel && isOGMessage(message))
                            || isMultipleFilesMessage(message)) ? '' : 'primary',
                    ]) }, renderEmojiReactions({
                    userId: userId,
                    message: message,
                    channel: channel,
                    isByMe: isByMe,
                    emojiContainer: emojiContainer,
                    memberNicknamesMap: nicknamesMap,
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))),
                (!isByMe && !chainBottom) && (React__default.createElement(Label, { className: getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'right', supposedHoverClassName]), type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                    locale: dateLocale,
                }))))),
        React__default.createElement("div", { className: classnames('sendbird-thread-list-item-content__right', chainTop && 'chain-top', isByMe ? 'outgoing' : 'incoming') }, (!isByMe && !isMobile) && (React__default.createElement("div", { className: "sendbird-thread-list-item-content-menu ".concat(supposedHoverClassName) },
            isReactionEnabledInChannel && (renderEmojiMenu({
                className: 'sendbird-thread-list-item-content-menu__reaction-menu',
                message: message,
                userId: userId,
                emojiContainer: emojiContainer,
                toggleReaction: toggleReaction,
                filterEmojiCategoryIds: filterEmojiCategoryIds,
            })),
            renderMessageMenu({
                className: 'sendbird-thread-list-item-content-menu__normal-menu',
                channel: channel,
                message: message,
                isByMe: isByMe,
                replyType: replyType,
                showRemove: showRemove,
                resendMessage: resendMessage,
                onReplyInThread: onReplyInThread,
                deleteMessage: deleteMessage,
            })))),
        showMobileMenu && (renderMobileMenuOnLongPress({
            parentRef: mobileMenuRef,
            channel: channel,
            message: message,
            userId: userId,
            replyType: replyType,
            hideMenu: function () {
                setShowMobileMenu(false);
            },
            isReactionEnabled: isReactionEnabled,
            isByMe: isByMe,
            emojiContainer: emojiContainer,
            showEdit: showEdit,
            showRemove: showRemove,
            toggleReaction: toggleReaction,
            isOpenedFromThread: true,
            deleteMessage: deleteMessage,
            onDownloadClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage)
                                return [2 /*return*/];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItemContent: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItemContent: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        }))));
}

function ThreadListItem(props) {
    var _this = this;
    var _a, _b, _c, _d;
    var className = props.className, message = props.message, chainTop = props.chainTop, chainBottom = props.chainBottom, hasSeparator = props.hasSeparator, renderCustomSeparator = props.renderCustomSeparator, handleScroll = props.handleScroll;
    var _e = useSendbirdStateContext(), stores = _e.stores, config = _e.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_b = (_a = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.userId;
    var _f = useLocalization(), dateLocale = _f.dateLocale, stringSet = _f.stringSet;
    var threadContext = useThreadContext === null || useThreadContext === void 0 ? void 0 : useThreadContext();
    var currentChannel = threadContext.currentChannel, nicknamesMap = threadContext.nicknamesMap, emojiContainer = threadContext.emojiContainer, toggleReaction = threadContext.toggleReaction, threadListState = threadContext.threadListState, updateMessage = threadContext.updateMessage, resendMessage = threadContext.resendMessage, deleteMessage = threadContext.deleteMessage, isMuted = threadContext.isMuted, isChannelFrozen = threadContext.isChannelFrozen, onBeforeDownloadFileMessage = threadContext.onBeforeDownloadFileMessage;
    var openingMessage = threadContext === null || threadContext === void 0 ? void 0 : threadContext.message;
    var _g = useState(false), showEdit = _g[0], setShowEdit = _g[1];
    var _h = useState(false), showRemove = _h[0], setShowRemove = _h[1];
    var _j = useState(false), showFileViewer = _j[0], setShowFileViewer = _j[1];
    var isReactionEnabled = getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    // Move to message
    var messageScrollRef = useRef(null);
    useLayoutEffect(function () {
        var _a;
        if ((openingMessage === null || openingMessage === void 0 ? void 0 : openingMessage.messageId) === (message === null || message === void 0 ? void 0 : message.messageId) && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            (_a = messageScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'center', inline: 'center' });
        }
    }, [openingMessage, messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current]);
    // reactions
    useLayoutEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
    }, [showEdit, (_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length]);
    // mention
    var editMessageInputRef = useRef(null);
    var _k = useState(''), mentionNickname = _k[0], setMentionNickname = _k[1];
    var _l = useState([]), mentionedUsers = _l[0], setMentionedUsers = _l[1];
    var _m = useState([]), mentionedUserIds = _m[0], setMentionedUserIds = _m[1];
    var _o = useState(null), messageInputEvent = _o[0], setMessageInputEvent = _o[1];
    var _p = useState(null), selectedUser = _p[0], setSelectedUser = _p[1];
    var _q = useState([]), mentionSuggestedUsers = _q[0], setMentionSuggestedUsers = _q[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === Role.OPERATOR));
    var mentionNodes = useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    useEffect(function () {
        setMentionedUsers(mentionedUsers.filter(function (_a) {
            var userId = _a.userId;
            var i = mentionedUserIds.indexOf(userId);
            if (i < 0) {
                return false;
            }
            else {
                mentionedUserIds.splice(i, 1);
                return true;
            }
        }));
    }, [mentionedUserIds]);
    // edit input
    var disabled = !(threadListState === ThreadListStateTypes.INITIALIZED)
        || !isOnline
        || isMuted
        || isChannelFrozen;
    // memorize
    var MemorizedSeparator = useMemo(function () {
        if (typeof renderCustomSeparator === 'function') {
            return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message });
        }
    }, [message, renderCustomSeparator]);
    // Edit message
    if (showEdit && message.isUserMessage()) {
        return (React__default.createElement(React__default.Fragment, null,
            displaySuggestedMentionList && (React__default.createElement(SuggestedMentionList, { targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React__default.createElement(MessageInput, { isEdit: true, channel: currentChannel, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: message, onStartTyping: function () {
                    var _a;
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateMessage({
                        messageId: messageId,
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionTemplate: mentionTemplate,
                    });
                    setShowEdit(false);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEdit(false);
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUserMentioned: function (user) {
                    if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
                        setSelectedUser(null);
                        setMentionNickname('');
                    }
                }, onMentionStringChange: function (mentionText) {
                    setMentionNickname(mentionText);
                }, onMentionedUserIdsUpdated: function (userIds) {
                    setMentionedUserIds(userIds);
                }, onKeyDown: function (e) {
                    if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === MessageInputKeys.Enter && ableMention) || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React__default.createElement("div", { ref: messageScrollRef, className: classnames('sendbird-thread-list-item', className), "data-testid": "sendbird-thread-list-item" },
        hasSeparator && (message === null || message === void 0 ? void 0 : message.createdAt) && (MemorizedSeparator || (React__default.createElement(DateSeparator, null,
            React__default.createElement(Label, { type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__THREAD_LIST__DATE_SEPARATOR, { locale: dateLocale }))))),
        React__default.createElement(ThreadListItemContent, __assign({}, props, { userId: userId, channel: currentChannel, message: message, chainTop: chainTop, chainBottom: chainBottom, isReactionEnabled: isReactionEnabled, disableQuoteMessage: true, replyType: replyType, nicknamesMap: nicknamesMap, emojiContainer: emojiContainer, resendMessage: resendMessage, showRemove: setShowRemove, showFileViewer: setShowFileViewer, toggleReaction: toggleReaction, showEdit: setShowEdit })),
        showRemove && (React__default.createElement(RemoveMessage, { message: message, onCancel: function () { return setShowRemove(false); } })),
        showFileViewer && (React__default.createElement(FileViewer, { message: message, isByMe: ((_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(message);
                setShowFileViewer(false);
            }, onDownloadClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage)
                                return [2 /*return*/];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItem: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItem: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); } }))));
}

export { ThreadListItem as default };
//# sourceMappingURL=ThreadListItem.js.map
