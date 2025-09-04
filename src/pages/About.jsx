import React from "react";
import Header from "../Components/Header";

export default function About() {
  return (
    <div className="bg-first skip-nav m-0 vh-100 d-flex align-items-center">
      <div className="container text-center align-items-center justify-content-center">
        <Header title={"About Componenet"} color={"white"} />
        <div className="row justify-content-around">
          <p className="col-6 text-start fw-normal">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-6 text-start fw-normal">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
