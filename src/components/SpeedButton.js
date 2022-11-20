import { useState } from "react";

const SpeedButton = (videoRef) => {
  const [speed, setSpeed] = useState(1);

  const handleVideoSpeed = (e) => {
    const speed = Number(e.target.value);
    videoRef.current.playbackRate = speed;
    setSpeed(speed);
  };
  return { speed, handleVideoSpeed };
};

export default SpeedButton;
