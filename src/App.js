// stylesheets
import "./App.css";
import "./stylesheets/TopBar.css";

// libraries
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import TopBar from "./components/TopBar.jsx";
import { Contact } from "./components/Contact";

// images
import Macarons from "./assets/macarons.png";
import SugarCookie from "./assets/sugarcookie.jpg";
import Macarons2 from "./assets/macarons2.jpg";
import HeartMacarons from "./assets/heartmacarons3.jpg";
import Cake from "./assets/cake.jpg";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import Menu from "./assets/menu.jpg";
import MacaronsBatch from "./assets/macaronsbatch.jpg";
import MacaronsBatch2 from "./assets/macaronsbatch2.jpg";
import CupCakes from "./assets/cupcakes.jpg";
import BusinessCard from "./assets/businesscard.jpg";

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
        <div className="spinning-back">
          <div className="falling-text-flex-img first-flex">
            <img
              id="img1"
              src={SugarCookie}
              alt="baked goods"
              className="falling-img"
            ></img>
            <img
              src={Macarons2}
              id="img2"
              alt="baked goods"
              className="falling-img"
            ></img>
          </div>
          <h2 className="middle">Check out our hand-baked treats!</h2>
          <div className="falling-text-flex-img">
            <img
              src={HeartMacarons}
              id="img3"
              alt="baked goods"
              className="falling-img"
            ></img>
            <img
              src={Cake}
              id="img4"
              alt="baked goods"
              className="falling-img"
            ></img>
          </div>
        </div>
        <div className="spinning-back">
          <h2 className="tag-line" id="strike-through">
            Our last batch was good...
          </h2>
          <h2 className="tag-line">This one is even better.</h2>
          <div className="falling-text-flex-img new">
            <img
              src={MacaronsBatch}
              id="img3"
              alt="baked goods"
              className="falling-img"
            ></img>
            <img
              src={MacaronsBatch2}
              id="img4"
              alt="baked goods"
              className="falling-img"
            ></img>
          </div>
          <div className="falling-text-flex-img new"></div>
          <img
            src={CupCakes}
            id="img3"
            alt="baked goods"
            className="falling-img center"
          ></img>
        </div>
        <div className="falling-text-flex-menu">
          <h2 className="menu-header">Our Menu</h2>
          <div className="flex-menu">
            <img src={Menu} alt="baked goods"></img>
            <img src={BusinessCard} alt="baked goods"></img>
          </div>
        </div>
        <div className="spinning-back-contact">
          <h2>Contact Us!</h2>
          <Contact />
        </div>
        <div className="footer">
          © 2023 Heart To Heart Baked Goods <br />
          Follow us on social media:
          <a
            href="https://www.facebook.com/profile.php?id=100095348257521&mibextid=avESrC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="socials" src={Facebook} />
          </a>
          <a
            href="https://www.instagram.com/hearttoheartbaked/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="socials" src={Instagram} />
          </a>
        </div>
      </>
    </div>
  );
}

export default App;
