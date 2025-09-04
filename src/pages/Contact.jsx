import React from "react";
import Header from "./../components/Header";

export default function Contact() {
  return (
    <div className="skip-nav m-0 vh-100 d-flex flex-column align-items-center">
      <div className="container">
        <Header title={"Contact Section"} color={"var(--third-color)"} />
      </div>

      <form>
        <input type="text" placeholder="user name" />
        <input type="text" placeholder="user age" />
        <input type="text" placeholder="user email" />
        <input type="text" placeholder="user password" />
      </form>
    </div>
  );
}
