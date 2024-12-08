import React from 'react';
import './index.scss';
import { Types } from './type';
import { Colors } from './colors';
export interface IconProps {
    className?: string | string[];
    /** Type: Use strings from below list */
    type: Types;
    /** Type: Use Colors from below list */
    fillColor?: Colors;
    width?: string | number;
    height?: string | number;
    onClick?: React.MouseEventHandler<HTMLDivElement> & React.KeyboardEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
    testID?: string;
}
export default function Icon({ className, type, fillColor, width, height, onClick, children, testID, }: IconProps): React.JSX.Element;
export declare const IconTypes: {
    readonly ADD: "ADD";
    readonly ARROW_LEFT: "ARROW_LEFT";
    readonly ATTACH: "ATTACH";
    readonly AUDIO_ON_LINED: "AUDIO_ON_LINED";
    readonly BAN: "BAN";
    readonly BROADCAST: "BROADCAST";
    readonly CAMERA: "CAMERA";
    readonly CHANNELS: "CHANNELS";
    readonly CHAT: "CHAT";
    readonly CHAT_FILLED: "CHAT_FILLED";
    readonly CHEVRON_DOWN: "CHEVRON_DOWN";
    readonly CHEVRON_RIGHT: "CHEVRON_RIGHT";
    readonly CLOSE: "CLOSE";
    readonly COLLAPSE: "COLLAPSE";
    readonly COPY: "COPY";
    readonly CREATE: "CREATE";
    readonly DELETE: "DELETE";
    readonly DISCONNECTED: "DISCONNECTED";
    readonly DOCUMENT: "DOCUMENT";
    readonly DONE: "DONE";
    readonly DONE_ALL: "DONE_ALL";
    readonly DOWNLOAD: "DOWNLOAD";
    readonly EDIT: "EDIT";
    readonly EMOJI_MORE: "EMOJI_MORE";
    readonly ERROR: "ERROR";
    readonly EXPAND: "EXPAND";
    readonly FILE_AUDIO: "FILE_AUDIO";
    readonly FILE_DOCUMENT: "FILE_DOCUMENT";
    readonly FREEZE: "FREEZE";
    readonly GIF: "GIF";
    readonly INFO: "INFO";
    readonly LEAVE: "LEAVE";
    readonly MEMBERS: "MEMBERS";
    readonly MESSAGE: "MESSAGE";
    readonly MODERATIONS: "MODERATIONS";
    readonly MORE: "MORE";
    readonly MUTE: "MUTE";
    readonly NOTIFICATIONS: "NOTIFICATIONS";
    readonly NOTIFICATIONS_OFF_FILLED: "NOTIFICATIONS_OFF_FILLED";
    readonly OPERATOR: "OPERATOR";
    readonly PHOTO: "PHOTO";
    readonly PLAY: "PLAY";
    readonly PLUS: "PLUS";
    readonly QUESTION: "QUESTION";
    readonly REFRESH: "REFRESH";
    readonly REPLY: "REPLY";
    readonly REMOVE: "REMOVE";
    readonly SEARCH: "SEARCH";
    readonly SEND: "SEND";
    readonly SETTINGS_FILLED: "SETTINGS_FILLED";
    readonly SLIDE_LEFT: "SLIDE_LEFT";
    readonly SPINNER: "SPINNER";
    readonly SUPERGROUP: "SUPERGROUP";
    readonly THREAD: "THREAD";
    readonly THUMBNAIL_NONE: "THUMBNAIL_NONE";
    readonly TOGGLE_OFF: "TOGGLE_OFF";
    readonly TOGGLE_ON: "TOGGLE_ON";
    readonly USER: "USER";
    readonly FEEDBACK_LIKE: "FEEDBACK_LIKE";
    readonly FEEDBACK_DISLIKE: "FEEDBACK_DISLIKE";
};
export declare const IconColors: {
    readonly DEFAULT: "DEFAULT";
    readonly PRIMARY: "PRIMARY";
    readonly PRIMARY_2: "PRIMARY_2";
    readonly SECONDARY: "SECONDARY";
    readonly SECONDARY_2: "SECONDARY_2";
    readonly CONTENT: "CONTENT";
    readonly CONTENT_INVERSE: "CONTENT_INVERSE";
    readonly CONTENT_INVERSE_3: "CONTENT_INVERSE_3";
    readonly WHITE: "WHITE";
    readonly GRAY: "GRAY";
    readonly THUMBNAIL_ICON: "THUMBNAIL_ICON";
    readonly SENT: "SENT";
    readonly READ: "READ";
    readonly ON_BACKGROUND_1: "ON_BACKGROUND_1";
    readonly ON_BACKGROUND_2: "ON_BACKGROUND_2";
    readonly ON_BACKGROUND_3: "ON_BACKGROUND_3";
    readonly ON_BACKGROUND_4: "ON_BACKGROUND_4";
    readonly BACKGROUND_3: "BACKGROUND_3";
    readonly ERROR: "ERROR";
};
