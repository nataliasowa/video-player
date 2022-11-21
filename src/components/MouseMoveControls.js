import { useEffect, useState } from "react";

const MouseMoveControls = (videoRef) => {
  const [showControls, setShowControls] = useState(false);
  const [timer, setTimer] = useState();

  useEffect(() => {
    videoRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      videoRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        setShowControls(false);
      }, 8000)
    );
  };

  return { showControls };
};

export default MouseMoveControls;
