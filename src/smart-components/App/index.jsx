/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Sendbird from '../../lib/Sendbird';

import ChannelList from '../ChannelList';
import Channel from '../Channel';
import ChannelSettings from '../ChannelSettings';
import MessageSearchPannel from '../MessageSearch';

import './index.scss';

export default function App(props) {
  const {
    appId,
    userId,
    accessToken,
    theme,
    userListQuery,
    nickname,
    profileUrl,
    dateLocale,
    config = {},
    useReaction,
    isMentionEnabled,
    replyType,
    useMessageGrouping,
    colorSet,
    stringSet,
    allowProfileEdit,
    disableUserProfile,
    renderUserProfile,
    showSearchIcon,
    onProfileEditSuccess,
    imageCompression,
    disableAutoSelect,
  } = props;
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [highlightedMessage, setHighlightedMessage] = useState(null);
  const [startingPoint, setStartingPoint] = useState(null);

  return (
    <Sendbird
      stringSet={stringSet}
      appId={appId}
      userId={userId}
      accessToken={accessToken}
      theme={theme}
      nickname={nickname}
      profileUrl={profileUrl}
      dateLocale={dateLocale}
      userListQuery={userListQuery}
      config={config}
      colorSet={colorSet}
      disableUserProfile={disableUserProfile}
      renderUserProfile={renderUserProfile}
      imageCompression={imageCompression}
      useReaction={useReaction}
      isMentionEnabled={isMentionEnabled}
    >
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <ChannelList
            allowProfileEdit={allowProfileEdit}
            onProfileEditSuccess={onProfileEditSuccess}
            disableAutoSelect={disableAutoSelect}
            onChannelSelect={(channel) => {
              setStartingPoint(null);
              setHighlightedMessage(null);
              if (channel && channel.url) {
                setCurrentChannelUrl(channel.url);
              } else {
                setCurrentChannelUrl('');
              }
            }}
          />
        </div>
        <div
          className={`
            ${showSettings ? 'sendbird-app__conversation--settings-open' : ''}
            ${showSearch ? 'sendbird-app__conversation--search-open' : ''}
            sendbird-app__conversation-wrap
          `}
        >
          <Channel
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSearch(false);
              setShowSettings(!showSettings);
            }}
            onSearchClick={() => {
              setShowSettings(false);
              setShowSearch(!showSearch);
            }}
            showSearchIcon={showSearchIcon}
            startingPoint={startingPoint}
            highlightedMessage={highlightedMessage}
            useReaction={useReaction}
            replyType={replyType}
            useMessageGrouping={useMessageGrouping}
          />
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <ChannelSettings
              className="sendbird-channel-settings"
              channelUrl={currentChannelUrl}
              onCloseClick={() => {
                setShowSettings(false);
              }}
            />
          </div>
        )}
        {showSearch && (
          <div className="sendbird-app__searchpanel-wrap">
            <MessageSearchPannel
              channelUrl={currentChannelUrl}
              onResultClick={(message) => {
                if (message.messageId === highlightedMessage) {
                  setHighlightedMessage(null);
                  setTimeout(() => {
                    setHighlightedMessage(message.messageId);
                  });
                } else {
                  setStartingPoint(message.createdAt);
                  setHighlightedMessage(message.messageId);
                }
              }}
              onCloseClick={() => {
                setShowSearch(false);
              }}
            />
          </div>
        )}
      </div>
    </Sendbird>
  );
}

App.propTypes = {
  appId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  accessToken: PropTypes.string,
  theme: PropTypes.string,
  userListQuery: PropTypes.func,
  nickname: PropTypes.string,
  profileUrl: PropTypes.string,
  allowProfileEdit: PropTypes.bool,
  disableUserProfile: PropTypes.bool,
  renderUserProfile: PropTypes.func,
  onProfileEditSuccess: PropTypes.func,
  dateLocale: PropTypes.shape({}),
  config: PropTypes.shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  useReaction: PropTypes.bool,
  replyType: PropTypes.oneOf(['NONE', 'QUOTE_REPLY', 'THREAD']),
  showSearchIcon: PropTypes.bool,
  useMessageGrouping: PropTypes.bool,
  stringSet: PropTypes.objectOf(PropTypes.string),
  colorSet: PropTypes.objectOf(PropTypes.string),
  imageCompression: PropTypes.shape({
    compressionRate: PropTypes.number,
    resizingWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    resizingHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  disableAutoSelect: PropTypes.bool,
  isMentionEnabled: PropTypes.bool,
};

App.defaultProps = {
  accessToken: '',
  theme: 'light',
  nickname: '',
  profileUrl: '',
  userListQuery: null,
  dateLocale: null,
  allowProfileEdit: false,
  onProfileEditSuccess: null,
  disableUserProfile: false,
  showSearchIcon: false,
  renderUserProfile: null,
  config: {},
  useReaction: true,
  isMentionEnabled: false,
  replyType: 'NONE',
  useMessageGrouping: true,
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  disableAutoSelect: false,
};
