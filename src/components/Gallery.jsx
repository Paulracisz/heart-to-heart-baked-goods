import "../stylesheets/Gallery.css";
import React from "react";

// images
import Macs1 from "../assets/macs1.jpg";
import Macs2 from "../assets/macs2.jpg";
import Macs3 from "../assets/mac3.jpg";
import Pack1 from "../assets/pack1.jpg";
import Pack2 from "../assets/pack2.jpg";
import Destoni1 from "../assets/destoni.jpg";
import Destoni2 from "../assets/deston2.jpg";
import Destoni3 from "../assets/deston3.jpg";

function Gallery() {
  return (
    <div className="big-flex">
      <>
        <h1>Gallery</h1>
        <div className="gallery-box">
          <img src={Macs1} alt="gallery img"></img>
          <img src={Macs2} alt="gallery img"></img>
          <img src={Macs3} alt="gallery img"></img>
          <img src={Pack1} alt="gallery img"></img>
          <img src={Pack2} alt="gallery img"></img>
          <img src={Destoni1} alt="gallery img"></img>
          <img src={Destoni2} alt="gallery img"></img>
          <img src={Destoni3} alt="gallery img"></img>
        </div>
        <a id="button" href={`/`}>
          Back Home
        </a>
      </>
    </div>
  );
}

export default Gallery;
