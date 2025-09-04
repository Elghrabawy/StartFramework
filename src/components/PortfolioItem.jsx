import React from "react";

export default function PortfolioItem({ img, setOverlayImage }) {

  return (
    <div className="portfolio-item col col-md-6 col-lg-4" onClick={ () => setOverlayImage(img) }>
      <div className="position-relative rounded-3 overflow-hidden">
        <div className="transition overlay w-100 h-100 position-absolute top-0 start-0 d-flex align-items-center rounded-3 justify-content-center bg-first">
          <i className="fa-solid fa-plus" style={{ fontSize: "90px" }}></i>
        </div>
        <img src={img} className="rounded-3" style={{ width: "100%" }} />
      </div>
     
    </div>
  );
}
