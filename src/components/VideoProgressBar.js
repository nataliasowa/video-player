import{ useState } from "react";

const VideoProgressBar = (videoRef) => {
  const [progress, setProgress] = useState(0);

  const handleVideoProgress = (e) => {
    const manualChange = Number(e.target.value);
    const current = (videoRef.current.duration / 100) * manualChange;
    videoRef.current.currentTime = current;
    setProgress((current / videoRef.current.duration) * 100);
  };
  const handleOnTimeUpdate = () => {
    const videoProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(videoProgress);
  };
  return { progress, handleVideoProgress, handleOnTimeUpdate };
};

export default VideoProgressBar;
