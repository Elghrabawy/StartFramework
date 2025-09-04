import React, { useEffect } from "react";
import setTitle from "../helpers/setTitle";

export default function NotFound() {
  useEffect(() => {
    setTitle("not found");
  });

  return (
    <div className="bg-first skip-nav m-0 pb-2 d-flex align-items-center">
      <div className="container text-center align-items-center justify-content-center my-5 py-5">
        <h1
          className="text-uppercase fw-bold p-5 m-5"
          style={{ color: "white", fontSize: "50px" }}
        >
          404 - Page Not Found
        </h1>
      </div>
    </div>
  );
}
