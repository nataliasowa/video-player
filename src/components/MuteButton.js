import { useEffect, useState } from "react";

const MuteButton = (videoRef) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  //mute video
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    isMuted
      ? (videoRef.current.muted = true)
      : (videoRef.current.muted = false);
  }, [toggleMute]);

  //change video volume
  const changeVideoVolume = (e) => {
    videoRef.current.volume = e.target.value;
    setVolume(e.target.value);
  };
  return { isMuted, toggleMute, volume, changeVideoVolume };
};

export default MuteButton;
