import React from "react";
import Header from "./../components/Header";
import PortfolioItem from "../components/PortfolioItem";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";

export default function Portfolio() {
  const [OverlayImage, setOverlayImage] = React.useState(null);

  return (
    <div className="skip-nav m-0 d-flex flex-column align-items-center">
      <div className="container">
        <Header title={"Portfolio Section"} color={"var(--third-color)"} />
        <div className="row items mb-5 g-3">
          <PortfolioItem img={port1} setOverlayImage={setOverlayImage} />
          <PortfolioItem img={port2} setOverlayImage={setOverlayImage} />
          <PortfolioItem img={port3} setOverlayImage={setOverlayImage} />
          <PortfolioItem img={port3} setOverlayImage={setOverlayImage} />
          <PortfolioItem img={port1} setOverlayImage={setOverlayImage} />
          <PortfolioItem img={port2} setOverlayImage={setOverlayImage} />
        </div>

        {OverlayImage && (
          <div
            className="position-fixed top-0 start-0 d-flex justify-content-center align-items-center vh-100 vw-100 bg-black bg-opacity-50"
            style={{ zIndex: "99999" }}
            onClick={() => setOverlayImage(null)}
          >
            <img src={OverlayImage} className="w-50 rounded-4" />
          </div>
        )}
      </div>
    </div>
  );
}
