import React from 'react';
import type SendbirdChat from '@sendbird/chat';
import type { User, SendbirdChatParams, SendbirdError } from '@sendbird/chat';
import type { GroupChannel, GroupChannelCreateParams, GroupChannelModule } from '@sendbird/chat/groupChannel';
import type { OpenChannel, OpenChannelCreateParams, OpenChannelModule } from '@sendbird/chat/openChannel';
import type { FileMessage, FileMessageCreateParams, UserMessage, UserMessageCreateParams, UserMessageUpdateParams } from '@sendbird/chat/message';
import { SBUConfig } from '@sendbird/uikit-tools';
import { Module, ModuleNamespaces } from '@sendbird/chat/lib/__definition';
import type { HTMLTextDirection, RenderUserProfileProps, ReplyType, UserListQuery } from '../types';
import type { ImageCompressionOptions } from './Sendbird';
import { UikitMessageHandler } from './selectors';
import { Logger } from './SendbirdState';
import { MarkAsReadSchedulerType } from './hooks/useMarkAsReadScheduler';
import { MarkAsDeliveredSchedulerType } from './hooks/useMarkAsDeliveredScheduler';
import { PartialDeep } from '../utils/typeHelpers/partialDeep';
import { CoreMessageType } from '../utils';
import { UserActionTypes } from './dux/user/actionTypes';
import { SdkActionTypes } from './dux/sdk/actionTypes';
import { ReconnectType } from './hooks/useConnect/types';
import { SBUGlobalPubSub } from './pubSub/topics';
import { EmojiManager } from './emojiManager';
import { MessageTemplatesInfo, ProcessedMessageTemplate, WaitingTemplateKeyData } from './dux/appInfo/initialState';
import { AppInfoActionTypes } from './dux/appInfo/actionTypes';
export declare const Role: {
    readonly OPERATOR: "operator";
    readonly NONE: "none";
};
export interface SBUEventHandlers {
    reaction?: {
        onPressUserProfile?(member: User): void;
    };
    connection?: {
        onConnected?(user: User): void;
        onFailed?(error: SendbirdError): void;
    };
    modal?: {
        onMounted?(params: {
            id: string;
            close(): void;
        }): void | (() => void);
    };
    message?: {
        onSendMessageFailed?: (message: CoreMessageType, error: unknown) => void;
        onUpdateMessageFailed?: (message: CoreMessageType, error: unknown) => void;
        onFileUploadFailed?: (error: unknown) => void;
    };
}
export interface SendBirdStateConfig {
    renderUserProfile?: (props: RenderUserProfileProps) => React.ReactElement;
    onStartDirectMessage?: (props: GroupChannel) => void;
    allowProfileEdit: boolean;
    isOnline: boolean;
    userId: string;
    appId: string;
    accessToken?: string;
    theme: string;
    htmlTextDirection: HTMLTextDirection;
    forceLeftToRightMessageLayout: boolean;
    pubSub: SBUGlobalPubSub;
    logger: Logger;
    setCurrentTheme: (theme: 'light' | 'dark') => void;
    userListQuery?: () => UserListQuery;
    uikitUploadSizeLimit: number;
    uikitMultipleFilesMessageLimit: number;
    voiceRecord: {
        maxRecordingTime: number;
        minRecordingTime: number;
    };
    userMention: {
        maxMentionCount: number;
        maxSuggestionCount: number;
    };
    imageCompression: ImageCompressionOptions;
    markAsReadScheduler: MarkAsReadSchedulerType;
    markAsDeliveredScheduler: MarkAsDeliveredSchedulerType;
    disableMarkAsDelivered: boolean;
    isMultipleFilesMessageEnabled: boolean;
    common: {
        enableUsingDefaultUserProfile: SBUConfig['common']['enableUsingDefaultUserProfile'];
    };
    groupChannel: {
        enableOgtag: SBUConfig['groupChannel']['channel']['enableOgtag'];
        enableTypingIndicator: SBUConfig['groupChannel']['channel']['enableTypingIndicator'];
        enableReactions: SBUConfig['groupChannel']['channel']['enableReactions'];
        enableMention: SBUConfig['groupChannel']['channel']['enableMention'];
        replyType: SBUConfig['groupChannel']['channel']['replyType'];
        threadReplySelectType: SBUConfig['groupChannel']['channel']['threadReplySelectType'];
        enableVoiceMessage: SBUConfig['groupChannel']['channel']['enableVoiceMessage'];
        typingIndicatorTypes: SBUConfig['groupChannel']['channel']['typingIndicatorTypes'];
        enableDocument: SBUConfig['groupChannel']['channel']['input']['enableDocument'];
        enableFeedback: SBUConfig['groupChannel']['channel']['enableFeedback'];
        enableSuggestedReplies: SBUConfig['groupChannel']['channel']['enableSuggestedReplies'];
        showSuggestedRepliesFor: SBUConfig['groupChannel']['channel']['showSuggestedRepliesFor'];
        suggestedRepliesDirection: SBUConfig['groupChannel']['channel']['suggestedRepliesDirection'];
        enableMarkdownForUserMessage: SBUConfig['groupChannel']['channel']['enableMarkdownForUserMessage'];
        enableFormTypeMessage: SBUConfig['groupChannel']['channel']['enableFormTypeMessage'];
        /**
         * @deprecated Currently, this feature is turned off by default. If you wish to use this feature, contact us: {@link https://dashboard.sendbird.com/settings/contact_us?category=feedback_and_feature_requests&product=UIKit}
         */
        enableReactionsSupergroup: never;
    };
    groupChannelList: {
        enableTypingIndicator: SBUConfig['groupChannel']['channelList']['enableTypingIndicator'];
        enableMessageReceiptStatus: SBUConfig['groupChannel']['channelList']['enableMessageReceiptStatus'];
    };
    groupChannelSettings: {
        enableMessageSearch: SBUConfig['groupChannel']['setting']['enableMessageSearch'];
    };
    openChannel: {
        enableOgtag: SBUConfig['openChannel']['channel']['enableOgtag'];
        enableDocument: SBUConfig['openChannel']['channel']['input']['enableDocument'];
    };
    /**
     * @deprecated Please use `onStartDirectMessage` instead. It's renamed.
     */
    onUserProfileMessage?: (props: GroupChannel) => void;
    /**
     * @deprecated Please use `!config.common.enableUsingDefaultUserProfile` instead.
     * Note that you should use the negation of `config.common.enableUsingDefaultUserProfile`
     * to replace `disableUserProfile`.
     */
    disableUserProfile: boolean;
    /** @deprecated Please use `config.groupChannel.enableReactions` instead * */
    isReactionEnabled: boolean;
    /** @deprecated Please use `config.groupChannel.enableMention` instead * */
    isMentionEnabled: boolean;
    /** @deprecated Please use `config.groupChannel.enableVoiceMessage` instead * */
    isVoiceMessageEnabled?: boolean;
    /** @deprecated Please use `config.groupChannel.replyType` instead * */
    replyType: ReplyType;
    /** @deprecated Please use `config.groupChannelSettings.enableMessageSearch` instead * */
    showSearchIcon?: boolean;
    /** @deprecated Please use `config.groupChannelList.enableTypingIndicator` instead * */
    isTypingIndicatorEnabledOnChannelList?: boolean;
    /** @deprecated Please use `config.groupChannelList.enableMessageReceiptStatus` instead * */
    isMessageReceiptStatusEnabledOnChannelList?: boolean;
    /** @deprecated Please use setCurrentTheme instead * */
    setCurrenttheme: (theme: 'light' | 'dark') => void;
}
export type SendbirdChatType = SendbirdChat & ModuleNamespaces<[GroupChannelModule, OpenChannelModule]>;
export interface SdkStore {
    error: boolean;
    initialized: boolean;
    loading: boolean;
    sdk: SendbirdChatType;
}
export interface UserStore {
    initialized: boolean;
    loading: boolean;
    user: User;
}
export interface AppInfoStore {
    messageTemplatesInfo?: MessageTemplatesInfo;
    waitingTemplateKeysMap: Record<string, WaitingTemplateKeyData>;
}
export interface SendBirdStateStore {
    sdkStore: SdkStore;
    userStore: UserStore;
    appInfoStore: AppInfoStore;
}
export type SendBirdState = {
    config: SendBirdStateConfig;
    stores: SendBirdStateStore;
    dispatchers: {
        sdkDispatcher: React.Dispatch<SdkActionTypes>;
        userDispatcher: React.Dispatch<UserActionTypes>;
        appInfoDispatcher: React.Dispatch<AppInfoActionTypes>;
        reconnect: ReconnectType;
    };
    eventHandlers?: SBUEventHandlers;
    emojiManager: EmojiManager;
    utils: SendbirdProviderUtils;
};
type GetSdk = SendbirdChat | undefined;
type GetConnect = (userId: string, accessToken?: string) => Promise<User>;
type GetDisconnect = () => Promise<void>;
type GetUpdateUserInfo = (nickName: string, profileUrl?: string) => Promise<User>;
type GetCreateGroupChannel = (channelParams: GroupChannelCreateParams) => Promise<GroupChannel>;
type GetCreateOpenChannel = (channelParams: OpenChannelCreateParams) => Promise<OpenChannel>;
type GetGetGroupChannel = (channelUrl: string, isSelected?: boolean) => Promise<GroupChannel>;
type GetGetOpenChannel = (channelUrl: string) => Promise<OpenChannel>;
type GetLeaveGroupChannel = (channel: GroupChannel) => Promise<void>;
type GetEnterOpenChannel = (channel: OpenChannel) => Promise<OpenChannel>;
type GetExitOpenChannel = (channel: OpenChannel) => Promise<void>;
type GetFreezeChannel = (channel: GroupChannel | OpenChannel) => Promise<void>;
type GetUnFreezeChannel = (channel: GroupChannel | OpenChannel) => Promise<void>;
type GetSendUserMessage = (channel: GroupChannel | OpenChannel, userMessageParams: UserMessageCreateParams) => UikitMessageHandler;
type GetSendFileMessage = (channel: GroupChannel | OpenChannel, fileMessageParams: FileMessageCreateParams) => UikitMessageHandler;
type GetUpdateUserMessage = (channel: GroupChannel | OpenChannel, messageId: string | number, params: UserMessageUpdateParams) => Promise<UserMessage>;
type GetDeleteMessage = (channel: GroupChannel | OpenChannel, message: CoreMessageType) => Promise<void>;
type GetResendUserMessage = (channel: GroupChannel | OpenChannel, failedMessage: UserMessage) => Promise<UserMessage>;
type GetResendFileMessage = (channel: GroupChannel | OpenChannel, failedMessage: FileMessage) => Promise<FileMessage>;
export interface sendbirdSelectorsInterface {
    getSdk: (store: SendBirdState) => GetSdk;
    getConnect: (store: SendBirdState) => GetConnect;
    getDisconnect: (store: SendBirdState) => GetDisconnect;
    getUpdateUserInfo: (store: SendBirdState) => GetUpdateUserInfo;
    getCreateGroupChannel: (store: SendBirdState) => GetCreateGroupChannel;
    getCreateOpenChannel: (store: SendBirdState) => GetCreateOpenChannel;
    getGetGroupChannel: (store: SendBirdState) => GetGetGroupChannel;
    getGetOpenChannel: (store: SendBirdState) => GetGetOpenChannel;
    getLeaveGroupChannel: (store: SendBirdState) => GetLeaveGroupChannel;
    getEnterOpenChannel: (store: SendBirdState) => GetEnterOpenChannel;
    getExitOpenChannel: (store: SendBirdState) => GetExitOpenChannel;
    getFreezeChannel: (store: SendBirdState) => GetFreezeChannel;
    getUnFreezeChannel: (store: SendBirdState) => GetUnFreezeChannel;
    getSendUserMessage: (store: SendBirdState) => GetSendUserMessage;
    getSendFileMessage: (store: SendBirdState) => GetSendFileMessage;
    getUpdateUserMessage: (store: SendBirdState) => GetUpdateUserMessage;
    getDeleteMessage: (store: SendBirdState) => GetDeleteMessage;
    getResendUserMessage: (store: SendBirdState) => GetResendUserMessage;
    getResendFileMessage: (store: SendBirdState) => GetResendFileMessage;
}
export interface CommonUIKitConfigProps {
    /** @deprecated Please use `uikitOptions.common.enableUsingDefaultUserProfile` instead * */
    disableUserProfile?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannel.replyType` instead * */
    replyType?: 'NONE' | 'QUOTE_REPLY' | 'THREAD';
    /** @deprecated Please use `uikitOptions.groupChannel.enableReactions` instead * */
    isReactionEnabled?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannel.enableMention` instead * */
    isMentionEnabled?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannel.enableVoiceMessage` instead * */
    isVoiceMessageEnabled?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannelList.enableTypingIndicator` instead * */
    isTypingIndicatorEnabledOnChannelList?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannelList.enableMessageReceiptStatus` instead * */
    isMessageReceiptStatusEnabledOnChannelList?: boolean;
    /** @deprecated Please use `uikitOptions.groupChannelSettings.enableMessageSearch` instead * */
    showSearchIcon?: boolean;
}
export type UIKitOptions = PartialDeep<{
    common: SBUConfig['common'];
    groupChannel: SBUConfig['groupChannel']['channel'];
    groupChannelList: SBUConfig['groupChannel']['channelList'];
    groupChannelSettings: SBUConfig['groupChannel']['setting'];
    openChannel: SBUConfig['openChannel']['channel'];
}>;
export type SendbirdChatInitParams = Omit<SendbirdChatParams<Module[]>, 'appId'>;
export type CustomExtensionParams = Record<string, string>;
export type SendbirdProviderUtils = {
    updateMessageTemplatesInfo: (templateKeys: string[], messageId: number, createdAt: number) => Promise<void>;
    getCachedTemplate: (key: string) => ProcessedMessageTemplate | null;
};
export {};
