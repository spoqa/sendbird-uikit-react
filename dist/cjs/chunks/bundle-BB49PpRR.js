'use strict';

var ONE_MiB = 1024 * 1024;
var SCROLL_BUFFER = 10;
var SCROLL_BOTTOM_DELAY_FOR_SEND = 100;
var SCROLL_BOTTOM_DELAY_FOR_FETCH = 100;
// voice message record
var VOICE_RECORDER_CLICK_BUFFER_TIME = 250;
var VOICE_RECORDER_DEFAULT_MIN = 1000; // 1 seconds
var VOICE_RECORDER_DEFAULT_MAX = 600000; // 10 minutes
var VOICE_RECORDER_AUDIO_BIT_RATE = 12000;
var VOICE_RECORDER_AUDIO_SAMPLE_RATE = 11025;
var BROWSER_SUPPORT_MIME_TYPE_LIST = ['audio/webm', 'audio/mp4', 'audio/mpeg', 'audio/ogg'];
/**
 * Append Audio element to the root
 * because I can't get the Audio element in the useEffect unmount scope
 */
var VOICE_PLAYER_ROOT_ID = 'sendbird-voice-player-provider-root';
var VOICE_PLAYER_AUDIO_ID = 'sendbird-global-audio-player-id';
// voice message file
var VOICE_MESSAGE_FILE_NAME = 'Voice_message.mp3';
var VOICE_MESSAGE_FILE_NAME__XM4A = 'Voice_message.m4a';
var VOICE_MESSAGE_MIME_TYPE = 'audio/mp3;sbu_type=voice';
var VOICE_MESSAGE_MIME_TYPE__XM4A = 'audio/x-m4a;sbu_type=voice';
// meta array
var META_ARRAY_VOICE_DURATION_KEY = 'KEY_VOICE_MESSAGE_DURATION';
var META_ARRAY_MESSAGE_TYPE_KEY = 'KEY_INTERNAL_MESSAGE_TYPE';
var META_ARRAY_MESSAGE_TYPE_VALUE__VOICE = 'voice/mp3';
// delivery receipt in feature list
var DELIVERY_RECEIPT = 'delivery_receipt';
// file viewer slider
var SLIDER_BUTTON_ICON_SIDE_LENGTH = '32px';
// multiple files message file info count limit
var DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT = 10;
var DEFAULT_UPLOAD_SIZE_LIMIT = 25 * 1024 * 1024;
// Local storage item key for sdk templates token
var CACHED_MESSAGE_TEMPLATES_TOKEN_KEY = 'sendbird_message_templates_token_key';
// Local storage item key for templates in JSON string form
var CACHED_MESSAGE_TEMPLATES_KEY = 'sendbird_message_templates_key';
var MESSAGE_TEMPLATE_KEY = 'message_template';

exports.BROWSER_SUPPORT_MIME_TYPE_LIST = BROWSER_SUPPORT_MIME_TYPE_LIST;
exports.CACHED_MESSAGE_TEMPLATES_KEY = CACHED_MESSAGE_TEMPLATES_KEY;
exports.CACHED_MESSAGE_TEMPLATES_TOKEN_KEY = CACHED_MESSAGE_TEMPLATES_TOKEN_KEY;
exports.DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT = DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT;
exports.DEFAULT_UPLOAD_SIZE_LIMIT = DEFAULT_UPLOAD_SIZE_LIMIT;
exports.DELIVERY_RECEIPT = DELIVERY_RECEIPT;
exports.MESSAGE_TEMPLATE_KEY = MESSAGE_TEMPLATE_KEY;
exports.META_ARRAY_MESSAGE_TYPE_KEY = META_ARRAY_MESSAGE_TYPE_KEY;
exports.META_ARRAY_MESSAGE_TYPE_VALUE__VOICE = META_ARRAY_MESSAGE_TYPE_VALUE__VOICE;
exports.META_ARRAY_VOICE_DURATION_KEY = META_ARRAY_VOICE_DURATION_KEY;
exports.ONE_MiB = ONE_MiB;
exports.SCROLL_BOTTOM_DELAY_FOR_FETCH = SCROLL_BOTTOM_DELAY_FOR_FETCH;
exports.SCROLL_BOTTOM_DELAY_FOR_SEND = SCROLL_BOTTOM_DELAY_FOR_SEND;
exports.SCROLL_BUFFER = SCROLL_BUFFER;
exports.SLIDER_BUTTON_ICON_SIDE_LENGTH = SLIDER_BUTTON_ICON_SIDE_LENGTH;
exports.VOICE_MESSAGE_FILE_NAME = VOICE_MESSAGE_FILE_NAME;
exports.VOICE_MESSAGE_FILE_NAME__XM4A = VOICE_MESSAGE_FILE_NAME__XM4A;
exports.VOICE_MESSAGE_MIME_TYPE = VOICE_MESSAGE_MIME_TYPE;
exports.VOICE_MESSAGE_MIME_TYPE__XM4A = VOICE_MESSAGE_MIME_TYPE__XM4A;
exports.VOICE_PLAYER_AUDIO_ID = VOICE_PLAYER_AUDIO_ID;
exports.VOICE_PLAYER_ROOT_ID = VOICE_PLAYER_ROOT_ID;
exports.VOICE_RECORDER_AUDIO_BIT_RATE = VOICE_RECORDER_AUDIO_BIT_RATE;
exports.VOICE_RECORDER_AUDIO_SAMPLE_RATE = VOICE_RECORDER_AUDIO_SAMPLE_RATE;
exports.VOICE_RECORDER_CLICK_BUFFER_TIME = VOICE_RECORDER_CLICK_BUFFER_TIME;
exports.VOICE_RECORDER_DEFAULT_MAX = VOICE_RECORDER_DEFAULT_MAX;
exports.VOICE_RECORDER_DEFAULT_MIN = VOICE_RECORDER_DEFAULT_MIN;
//# sourceMappingURL=bundle-BB49PpRR.js.map
