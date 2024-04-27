import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/video.mp4";

function VideoPlayer({ isVideoVisible, setVideoVisible }) {
  // const [isVideoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target); // Log event target for debugging
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setVideoVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isVideoVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
          <div ref={videoRef}>
            <video
              className="w-full max-w-screen-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
