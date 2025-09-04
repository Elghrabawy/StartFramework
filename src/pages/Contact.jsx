import React from "react";
import Header from "./../components/Header";

export default function Contact() {
  return (
    <div className="skip-nav m-0 pb-2 vh-100">
      <div className="container text-center py-3 d-flex flex-column justify-content-center align-items-center">
        <Header title={"Contact Me"} color={"var(--third-color)"} />
        <div style={{ 
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <form
            className="contact-form d-flex flex-column align-items-start"
              style={{ 
              color: "black"
            }}
          >
            <div class="form-floating mb-3 w-100 contact-input mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
              />
              <label for="floatingInputEmail">Email address</label>
            </div>

             <div class="form-floating mb-3 w-100 contact-input mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingInputUsername"
                placeholder="Username"
              />
              <label for="floatingInputUsername">Username</label>
            </div>
            
             <div class="form-floating mb-3 w-100 contact-input mb-4">
              <input
                type="number"
                class="form-control"
                id="floatingInputAge"
                placeholder="Age"
              />
              <label for="floatingInputAge">Age</label>
            </div>
             <div class="form-floating mb-3 w-100 contact-input mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingInputPassword"
                placeholder="Password"
              />
              <label for="floatingInputPassword">Password</label>
            </div>

            <button type="submit" className="bg-first btn" style={{color: "white", width: "100px", maxWidth: "100%"}}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
