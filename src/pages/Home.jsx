import React, { useEffect } from "react";
import img1 from "../assets/images/avataaars.svg";
import Header from "../components/Header";
import setTitle from "../helpers/setTitle";

export default function Home() {
  useEffect(() => {
    setTitle("home");
  });

  return (
    <div className="bg-first skip-nav m-0 pb-2">
      <div className="container text-center align-items-center justify-content-center my-5 py-5">
        <div className="w-25 mx-auto">
          <img src={img1} />
        </div>

        <Header title={"Start Framework"} color={"white"} />
        <p className=" fw-normal">Graphic Artist - Web Designer- Illustrator</p>
      </div>
    </div>
  );
}
