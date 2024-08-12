import React from "react";
import "./home.css";
import personalPhoto from "../assets/images/personalPhoto.jpg";
import ParticleBg from "../Backgroundmotion/ParticleBg";

const HomePage = () => {
  return (
    <>
      <section class="home section active" id="home">
        <div class="container">
          <div class="intro">
            <img src={personalPhoto} alt="profile" class="shadow-dark" />
            <h1>Batool Saleh</h1>
            <p>I'm a Software Engineer</p>
            <div class="social">
              <a href="linkedin.com/in/batool-saleh-76641b1a2">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="github.com/batool-22">
                {" "}
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
