import React from "react";

export default function Header({title}) {
  const lineStyle = {
    width: "100px",
    height: "4px",
    backgroundColor: "#000",
    display: "inline-block",
    marginTop: "10px",
    borderRadius: "5px",
  };

  return (
    <div className="header mt-4" style={{ color: "red" }}>
      <h1 className="text-uppercase fw-bold fs-1">{title}</h1>
      <div className="star d-flex align-items-center justify-content-center my-3">
        <span className="bg-light my-auto" style={lineStyle}></span>
        <i className="fa-solid fa-star fa-2x text-main fs-6 mx-2"></i>
        <span className="bg-light x my-auto" style={lineStyle}></span>
      </div>
    </div>
  );
}
