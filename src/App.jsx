import React, { useState } from "react";

import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Gallery from "./Components/gallery/Gallery";
import About from "./Components/About/About";
import VideoPlayer from "./Components/videoPlayer/videoPlayer";

export default function App() {
  const [isVideoVisible, setVideoVisible] = useState(false);
  function toggleVideo() {
    setVideoVisible(true);
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About toggleVideo={toggleVideo} />
      <Gallery />
      <VideoPlayer
        isVideoVisible={isVideoVisible}
        setVideoVisible={setVideoVisible}
      />
    </>
  );
}
