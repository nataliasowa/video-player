import { useEffect, useState } from "react";

const PlayerButton = (videoRef) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    videoRef.current.addEventListener("play", startedPlaying);
    videoRef.current.addEventListener("pause", stopedPlaying);
    return () => {
      videoRef.current.removeEventListener("play", startedPlaying);
      videoRef.current.removeEventListener("pause", stopedPlaying);
    };
  }, []);

  const startedPlaying = () => setIsPlaying(true);
  const stopedPlaying = () => setIsPlaying(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return { isPlaying, togglePlay };
};

export default PlayerButton;
