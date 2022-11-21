import React, { useRef } from "react";
import "./App.css";
import video from "./assets/video.mp4";
import PlayerButton from "./components/PlayerButton";
import MuteButton from "./components/MuteButton";
import SpeedButton from "./components/SpeedButton";
import FullscreenButton from "./components/FullscreenButton";
import VideoProgressBar from "./components/VideoProgressBar";
import MouseMoveControls from "./components/MouseMoveControls";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { FaExpand } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";

function App() {
  const videoRef = useRef(null);
  const { togglePlay, isPlaying } = PlayerButton(videoRef);
  const { toggleMute, isMuted, volume, changeVideoVolume } =
    MuteButton(videoRef);
  const { speed, handleVideoSpeed } = SpeedButton(videoRef);
  const { isFullscreen, makeFullscreen, closeFullscreen } =
    FullscreenButton(videoRef);
  const { progress, handleVideoProgress, handleOnTimeUpdate } =
    VideoProgressBar(videoRef);
  const { showControls } = MouseMoveControls(videoRef);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoRef}
          onTimeUpdate={handleOnTimeUpdate}
          autoPlay
        />
        {showControls && (
          <div className="controls">
            {/* TIMELINE */}
            <div>
              <input
                type="range"
                onChange={(e) => handleVideoProgress(e)}
                min="0"
                max="100"
                step={0.001}
                value={progress}
                class="video-progress-bar"
              />
            </div>
            <div className="actions">
              {/* PlAY AND MUTE THE VIDEO WITH VOLUME RANGE */}
              <div>
                <button onClick={togglePlay} className="play-pause-btn">
                  {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
                </button>
                <button onClick={toggleMute} className="mute-unmute-btn">
                  {isMuted ? (
                    <FaVolumeMute size={25} />
                  ) : (
                    <GoUnmute size={25} />
                  )}
                </button>
                <input
                  type="range"
                  onChange={changeVideoVolume}
                  class="volume-bar"
                  id="volume"
                  min="0"
                  max="1"
                  step={0.1}
                  value={isMuted ? 0 : volume}
                  disabled={isMuted}
                />
              </div>
              <div>
                <p>Title</p>
              </div>
              {/* SPEED AND FULLSCREEN THE VIDEO */}
              <div>
                <select
                  className="velocity"
                  value={speed}
                  onChange={handleVideoSpeed}
                >
                  <option value="0.1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="2">2x</option>
                </select>
                <button
                  onClick={isFullscreen ? closeFullscreen : makeFullscreen}
                  className="fullscreen-btn"
                >
                  {isFullscreen ? (
                    <FaCompress size={25} />
                  ) : (
                    <FaExpand size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
