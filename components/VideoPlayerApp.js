import React from "react";

import VideoPlayer from "../volkeno-react-native-video-player";

const VideoPlayerApp = () => {
  return (
    <VideoPlayer
      source={{
        uri:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      }}
    />
  );
};

export default VideoPlayerApp;
