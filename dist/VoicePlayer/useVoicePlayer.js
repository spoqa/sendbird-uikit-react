import { useEffect } from 'react';
import { u as useVoicePlayerContext, A as AudioUnitDefaultValue, g as generateGroupKey } from '../chunks/bundle-DTjvrceX.js';
import { V as VOICE_PLAYER_AUDIO_ID, a as VOICE_MESSAGE_MIME_TYPE } from '../chunks/bundle-C4rWp9Fy.js';
import { u as useVoiceRecorderContext } from '../chunks/bundle-mp0bcmQc.js';
import '../chunks/bundle-DzrKlXwY.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';
import '../chunks/bundle-Dhl1ibcV.js';
import '../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-jG2aA8Xg.js';
import '../chunks/bundle-CSGqtO-d.js';
import 'react-dom';
import '../chunks/bundle-CoXgb0Rb.js';
import '../chunks/bundle-CANWvEzj.js';
import '../chunks/bundle-D3I4IOQr.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-ozUngJUV.js';
import '../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-BQ7ajvH5.js';
import '../ui/SortByRow.js';

var useVoicePlayer = function (_a) {
    var _b;
    var _c = _a.key, key = _c === void 0 ? '' : _c, _d = _a.channelUrl, channelUrl = _d === void 0 ? '' : _d, audioFile = _a.audioFile, _e = _a.audioFileUrl, audioFileUrl = _e === void 0 ? '' : _e, _f = _a.audioFileMimeType, audioFileMimeType = _f === void 0 ? VOICE_MESSAGE_MIME_TYPE : _f;
    var groupKey = generateGroupKey(channelUrl, key);
    var _g = useVoicePlayerContext(), play = _g.play, pause = _g.pause, stop = _g.stop, voicePlayerStore = _g.voicePlayerStore;
    var isRecordable = useVoiceRecorderContext().isRecordable;
    var currentAudioUnit = ((_b = voicePlayerStore === null || voicePlayerStore === void 0 ? void 0 : voicePlayerStore.audioStorage) === null || _b === void 0 ? void 0 : _b[groupKey]) || AudioUnitDefaultValue();
    var playVoicePlayer = function () {
        if (!isRecordable) {
            play === null || play === void 0 ? void 0 : play({
                groupKey: groupKey,
                audioFile: audioFile,
                audioFileUrl: audioFileUrl,
                audioFileMimeType: audioFileMimeType,
            });
        }
    };
    var pauseVoicePlayer = function () {
        pause === null || pause === void 0 ? void 0 : pause(groupKey);
    };
    var stopVoicePlayer = function (text) {
        if (text === void 0) { text = ''; }
        stop === null || stop === void 0 ? void 0 : stop(text);
    };
    useEffect(function () {
        return function () {
            var _a;
            if (audioFile || audioFileUrl) {
                // Can't get the current AudioPlayer through the React hooks(useReducer or useState) in this scope
                var voiceAudioPlayerElement = document.getElementById(VOICE_PLAYER_AUDIO_ID);
                (_a = voiceAudioPlayerElement === null || voiceAudioPlayerElement === void 0 ? void 0 : voiceAudioPlayerElement.pause) === null || _a === void 0 ? void 0 : _a.call(voiceAudioPlayerElement);
            }
        };
    }, []);
    return ({
        play: playVoicePlayer,
        pause: pauseVoicePlayer,
        stop: stopVoicePlayer,
        /**
         * The reason why we multiply this by *1000 is,
         * The unit of playbackTime and duration should be millisecond
         */
        playbackTime: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.playbackTime) || 0) * 1000,
        duration: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.duration) || 0) * 1000,
        playingStatus: currentAudioUnit.playingStatus,
    });
};

export { useVoicePlayer };
//# sourceMappingURL=useVoicePlayer.js.map
