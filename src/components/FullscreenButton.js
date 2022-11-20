import { useState } from "react";

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const makeFullscreen = () => {
    document.documentElement.requestFullscreen();
    setIsFullscreen(true);
  };
  const closeFullscreen = () => {
    document.exitFullscreen();
    setIsFullscreen(false);
  };
  return { isFullscreen, makeFullscreen, closeFullscreen };
};

export default FullscreenButton;
