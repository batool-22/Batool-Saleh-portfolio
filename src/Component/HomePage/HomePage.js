import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import personalPhoto2 from "../../assets/images/personalPhoto2.jpeg";

const HomePage = () => {
  return (
    <>
      <section class="home section active" id="home">
        <div class="container">
          <div class="intro">
            <img src={personalPhoto2} alt="profile" class="shadow-dark" />
            <h1>Batool Saleh</h1>
            <p>Software Engineer</p>
            <div class="social">
              <a
                target="_blank"
                href="https://linkedin.com/in/batool-saleh-76641b1a2"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/batool-22"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-arrow">
          <a href="#about">
            <div className="arrow-container">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="arrow-icon"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
