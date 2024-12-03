import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-DzrKlXwY.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-CZzv4QJI.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-BcxMj4cx.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CSGqtO-d.js';
import '../../chunks/bundle-BG2WZLhb.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-ozUngJUV.js';
import '../../chunks/bundle-CANWvEzj.js';
import '../../chunks/bundle-hVzh_gnK.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-Dhl1ibcV.js';
import '../../chunks/bundle-jG2aA8Xg.js';
import '../../chunks/bundle-C4rWp9Fy.js';
import '../../chunks/bundle-mp0bcmQc.js';
import '../../chunks/bundle-CoXgb0Rb.js';
import '../../chunks/bundle-D3I4IOQr.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-BhlLFjHF.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-DTjvrceX.js';
import '../../chunks/bundle-BQ7ajvH5.js';
import '../../ui/SortByRow.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-GlbqlLGi.js';
import '../../chunks/bundle-ClxGs08a.js';
import '../../chunks/bundle-lXLalIBv.js';
import '../../chunks/bundle-DzAIhFU_.js';
import '../../chunks/bundle-CF14vYFB.js';
import '../../chunks/bundle-DR0mix_m.js';
import '../../chunks/bundle-C9y-bwLX.js';
import '../../chunks/bundle-C5rW8psz.js';

var FileViewer = function (props) {
    var _a = useGroupChannelContext(), deleteMessage = _a.deleteMessage, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var config = useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.createElement(FileViewerView, __assign({}, props, { deleteMessage: deleteMessage, onDownloadClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
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
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: props.message })];
                    case 2:
                        allowDownload = _c.sent();
                        if (!allowDownload) {
                            e.preventDefault();
                            (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'FileViewer: Not allowed to download.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'FileViewer: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); } })));
};

export { FileViewer, FileViewer as default };
//# sourceMappingURL=FileViewer.js.map
