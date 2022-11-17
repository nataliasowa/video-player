import React, { useRef } from "react";
import "./App.css";
import video from "./assets/video.mp4";
import PlayerButton from "./components/PlayerButton";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function App() {
  const videoRef = useRef(null);
  const { togglePlay, isPlaying } = PlayerButton(videoRef);
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
            {/* PlAY AND MUTE THE VIDEO */}
            <div>
              <button onClick={togglePlay} className="play-pause-btn">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button>MUTE</button>
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
