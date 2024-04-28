import React, { useState } from "react";

import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Gallery from "./Components/gallery/Gallery";
import About from "./Components/About/About";
import VideoPlayer from "./Components/videoPlayer/videoPlayer";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/testimanials/Testimonial";

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
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
