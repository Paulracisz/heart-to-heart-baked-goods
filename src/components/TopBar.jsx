import "../stylesheets/TopBar.css";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TopBar() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".TopBar", {
      scrollTrigger: {
        trigger: ".TopBar",
        start: 0,
        end: 400,
        scrub: true,
      },
      borderBottomLeftRadius: "30%",
      borderBottomRightRadius: "30%",
    });
    gsap.to(".TopBar", {
      scrollTrigger: {
        trigger: ".macaron-img",
        start: 0,
        end: 400,
        scrub: true,
      },
      marginBottom: "200px",
    });
  }, []);

  return (
    <div className="TopBar">
      <>
        <h1 className="title">Heart To Heart Baked Goods</h1>
        <div className="center-intro-flex">
          <h2 className="motto">
            Delicious delectables,
            <br /> from our heart to yours
          </h2>
        </div>
      </>
    </div>
  );
}

export default TopBar;
