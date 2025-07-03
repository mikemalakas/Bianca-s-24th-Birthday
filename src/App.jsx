import "./App.css";
import React, { useState } from "react";
import Main from "./components/main.jsx";
import Navbar from "./components/Navbar.jsx";
import Calendar from "./components/pages/Letter.jsx";
import Greetings from "./components/pages/Greetings.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import "aos/dist/aos.css";
import Aos from "aos";
import BackgroundImage from "./assets/hearts-bg.jpg";
import Cake from "./components/Cake.jsx";
import ConfettiExplosion from "react-confetti-explosion";
import Letter from "./components/pages/Letter.jsx";

function App() {
  const [isMainVisible, setMainVisible] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const confettiConfig = {
    height: "120vh",
    particleCount: 200,
  };

  const handleCandleClick = () => {
    setConfettiVisible(true);
    setTimeout(() => {
      setMainVisible(true);
    }, 800); // Delay the alert by 1 second
  };
  Aos.init();
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full">
          <div
            className="absolute bottom-0 left-0 right-0 top-0"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
        </div>
      </div>
      {/* <Navbar /> */}
      {confettiVisible && (
        <div className="w-full flex justify-center items-center">
          <ConfettiExplosion {...confettiConfig} />
        </div>
      )}
      {!isMainVisible && <Cake candleClick={handleCandleClick} />}
      {/* main will appear when candleclicked */}
      {isMainVisible && (
        // <div data-aos="fade-up">
        <Main />
        // </div>
      )}
    </>
  );
}

export default App;
