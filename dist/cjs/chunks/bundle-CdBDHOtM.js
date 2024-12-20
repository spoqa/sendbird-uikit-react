'use strict';

var consts = require('./bundle-BB49PpRR.js');
var utils = require('./bundle-D0fVLgqP.js');
var uikitTools = require('@sendbird/uikit-tools');
var useThrottleCallback = require('./bundle-DbUBJ44g.js');

var BUFFER_DELAY = 100;
function useOnScrollPositionChangeDetector(params) {
    var onReachedTop = params.onReachedTop, onReachedBottom = params.onReachedBottom, onInBetween = params.onInBetween;
    var cb = uikitTools.usePreservedCallback(function (event) {
        if (event === null || event === void 0 ? void 0 : event.target) {
            var _a = event.target, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            var positionEvent = {
                distanceFromBottom: scrollHeight - scrollTop - clientHeight,
            };
            if (onReachedTop && utils.isAboutSame(scrollTop, 0, consts.SCROLL_BUFFER)) {
                onReachedTop(positionEvent);
            }
            else if (onReachedBottom && utils.isAboutSame(scrollHeight, clientHeight + scrollTop, consts.SCROLL_BUFFER)) {
                onReachedBottom(positionEvent);
            }
            else if (onInBetween) {
                onInBetween(positionEvent);
            }
        }
    });
    return useThrottleCallback.useThrottleCallback(cb, BUFFER_DELAY, { trailing: true });
}

exports.useOnScrollPositionChangeDetector = useOnScrollPositionChangeDetector;
//# sourceMappingURL=bundle-CdBDHOtM.js.map
