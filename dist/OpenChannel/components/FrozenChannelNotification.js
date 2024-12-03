import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CoXgb0Rb.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-ozUngJUV.js';
import '../../chunks/bundle-DzrKlXwY.js';
import '../../chunks/bundle-CANWvEzj.js';

var FrozenNotification = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React__default.createElement(Label, { className: "sendbird-frozen-channel-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenChannelNotification.js.map
