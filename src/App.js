import React, { useRef } from "react";
import "./App.css";
import video from "./assets/video.mp4";
import PlayerButton from "./components/PlayerButton";
import MuteButton from "./components/MuteButton";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";

function App() {
  const videoRef = useRef(null);
  const { togglePlay, isPlaying } = PlayerButton(videoRef);
  const { toggleMute, isMuted, volume, changeVideoVolume } =
    MuteButton(videoRef);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video src={video} ref={videoRef} autoPlay />
        <div className="controls">
          {/* TIMELINE */}
          <div>
            <input
              type="range"
              min="0"
              max="100"
              step={0.001}
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
                {isMuted ? <FaVolumeMute size={25} /> : <GoUnmute size={25}/>}
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
              <button>SPPED</button>
              <button>FULLSCREEN</button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
