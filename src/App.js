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
import Destoni from "./assets/destoni.jpg";

function App() {
  function toggleHamburgerMenu() {
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let hamburger = document.getElementById("hamburger");
    let hamburgerStick = document.getElementsByClassName("hamburger-stick");
    hamburgerMenu.hidden = !hamburgerMenu.hidden;
    if (hamburgerMenu.hidden) {
      for (let i = 0; i < hamburgerStick.length; i++) {
        hamburgerStick[i].style.width = "100%";
        hamburger.style.flexDirection = "column";
        hamburger.style.justifyContent = "space-between";
        hamburgerStick[i].style.height = "5px";
      }
      // create animation for when the hamburger menu is closed or open
    } else if (!hamburgerMenu.hidden) {
      for (let i = 0; i < hamburgerStick.length; i++) {
        hamburgerStick[i].style.width = "5px";
        hamburger.style.flexDirection = "row";
        hamburger.style.justifyContent = "space-around";
        hamburgerStick[i].style.height = "100%";
      }
    }
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="App">
      <>
        <div onClick={toggleHamburgerMenu} id="sticky-hamburger">
          <div id="hamburger">
            <div className="hamburger-stick"></div>
            <div className="hamburger-stick"></div>
            <div className="hamburger-stick"></div>
            <div id="hamburger-menu" hidden={true}>
              <a className="hamburger-anchor" href="#top">
                <div className="hamburger-label">Top</div>
              </a>
              <a className="hamburger-anchor" href="#showcase">
                <div className="hamburger-label">Baked Goods Showcase</div>
              </a>
              <a className="hamburger-anchor" href="#meet">
                <div className="hamburger-label">Meet The Baker</div>
              </a>
              <a className="hamburger-anchor" href="#menu">
                <div className="hamburger-label">Menu</div>
              </a>
              <a className="hamburger-anchor" href="#contact">
                <div className="hamburger-label">Contact</div>
              </a>
            </div>
          </div>
        </div>
        <h2 id="top"></h2>
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
          <h2 className="middle" id="showcase">
            Check out our hand-baked treats!
          </h2>
          <div className="falling-text-flex-img">
            <img
              src={HeartMacarons}
              id="img3"
              alt="baked goods"
              className="falling-img"
            ></img>{" "}
            <a id="button" href={`/gallery`}>
              View Gallery
            </a>
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
        <div className="meet-flex">
          <h2 className="menu-header" id="meet">
            Meet The Baker
          </h2>
          <img src={Destoni} alt="picture of the baker" className="baker-pic" />
          <h2 id="baker">Destoni</h2>
        </div>
        <div className="falling-text-flex-menu">
          <h2 className="menu-header" id="menu">
            Our Menu
          </h2>
          <div className="price-list-flex">
            <div className="price-list-column-flex column-title">
              <p>Items</p>
              <p>Pricing</p>
            </div>
            <div className="price-list-column-flex">
              <p>
                Basic Cookies (Choc. Chip, Red Velvet, Sugar, Lemon, Carrot)
              </p>
              <p>
                8/$12 <br />
                *PRICES CAN CHANGE BASED UPON COOKIES WITH FONDANT BASED ON
                STYLE AND AMOUNT
              </p>
            </div>
            <div className="price-list-column-flex">
              <p>
                Basic Cupcakes ( Choc. Chip, Red Velvet, Sugar, Lemon, Carrot)
              </p>
              <p>
                12/$15 24/$32 <br />
                *PRICES CAN CHANGE BASED UPON CUSTOMIZED CUPCAKES BASED ON STYLE
                AND AMOUNT
              </p>
            </div>
            <div className="price-list-column-flex">
              <p>Macarons</p>
              <p>
                6/$12
                <br /> 12/$20
              </p>
            </div>
            <div className="price-list-column-flex">
              <p>Cakes </p>
              <p>* Message for pricing</p>
            </div>
            <div className="price-list-column-flex">
              <p>Mini Cheesecake</p>
              <p>
                12/$15 <br /> 24/$32
              </p>
            </div>
            <div className="price-list-column-flex">
              <p>Strawberries</p>
              <p>
                6/$12 <br /> 12/$20 **PRICES CAN CHANGE BASED UPON CUSTOMIZED
                STYLE AND AMOUNT
              </p>
            </div>
            <h2> Treat Table </h2>
            <hr />
            <p className="treat-p">
              {" "}
              Treat Tables, Party Favors, Wedding Desserts and Etc. Are
              available. Price starts at $30
            </p>
            <p className="treat-p">
              UPS Shipping : $12.50 or less based upon pacakge weight.
            </p>
            <hr />
            <h2>Contact Info:</h2>
            <p className="treat-p">Cell: +1(586) - 241 - 2016</p>
            <p className="treat-p">Email: destonivaughn@gmail.com</p>
            <p className="treat-p">
              Socials: <br /> Instagram:
              <a
                href="https://www.instagram.com/HearttoHeartBaked"
                rel="noopener norefferer"
                target="_blank"
              >
                HearttoHeartBaked
              </a>
              <br /> Facebook:
              <a
                href="https://www.Facebook.com/HearttoHeartBakedGoodies"
                rel="noopener norefferer"
                target="_blank"
              >
                HearttoHeartBakedGoodies
              </a>
            </p>
            <hr />
          </div>
          <div className="flex-menu">
            <img src={BusinessCard} alt="baked goods" id="bus-card"></img>
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
