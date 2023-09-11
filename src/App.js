import "./App.css";
import TopBar from "./components/TopBar.jsx";
import "./stylesheets/TopBar.css";
import Macarons from "./assets/macarons.png";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="App">
      <>
        <TopBar />

        <img className="macaron-img" src={Macarons} alt="macarons" />
        <div className="spinning-back">
          <div className="falling-text-flex">
            <div id="text1" className="falling-text">
              Crafted with Care, Baked at Home.
            </div>
            <div id="text2" className="falling-text">
              From Our Kitchen to Your Heart.
            </div>
            <div id="text3" className="falling-text">
              Genuine Goodness, Handcrafted Delight.
            </div>
            <div id="text4" className="falling-text">
              Nourishing Creations for All to Enjoy.
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
