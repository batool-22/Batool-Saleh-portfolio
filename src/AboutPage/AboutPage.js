import React from "react";
import "./about.css";
import { motion } from "framer-motion";
export const AboutPage = () => {
  return (
    <>
      <section class="about section" id="about">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="intro"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div class="container">
              <div class="row">
                <div class="section-t padd-15 ">
                  <h2>About Me</h2>
                </div>
              </div>
              <div class="row">
                <div class="about-content padd-15">
                  <div class="row">
                    <div class="about-text padd-15">
                      <h3>
                        I'm Batool Saleh and <span> Software Engineer</span>
                      </h3>
                      <p>
                        I have a Bachelor's degree in Software Engineering with
                        experience in many areas of technology, web programming
                        , UI development , UI designer and I hope for more.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="personal padd-15">
                      <div class="">
                        <h3 class="title">Education</h3>
                        <div class="row">
                          <div class="timeline-box padd-15">
                            <div class="timeline shadow-dark">
                              <div class="timeline-item">
                                <div class="circle-dot"></div>
                                <h6 class="timeline-date">
                                  <i class="fa fa-calendar"></i> 2018-2022
                                </h6>
                                <h4 class="timeline-title">
                                  Bachelor Degree, Software Engineering
                                </h4>
                                <p class="timeline-text">
                                  Prince Sattam bin Abdulaziz University
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="button padd-15">
                          <a
                            href="image/Batool Ab Saleh's Resume .pdf"
                            class="btn"
                            download
                          >
                            Download CV
                          </a>
                          <a
                            href="#contact"
                            data-section-index="1"
                            class="btn hire-me"
                          >
                            Here Me
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="exp padd-15">
                      <h3 class="title align-left">Experience</h3>
                      <div class="row">
                        <div class="timeline-box padd-15">
                          <div class="timeline shadow-dark">
                            <div class="timeline-item">
                              <div class="circle-dot"></div>
                              <h6 class="timeline-date">
                                <i class="fa fa-calendar align-left"></i>{" "}
                                2021-2022
                              </h6>
                              <h4 class="timeline-title align-left">
                                Frontend Developer
                              </h4>
                              <p class="timeline-text align-left">
                                Deanship of IT and Distance Learning
                              </p>
                            </div>

                            <div class="timeline-item">
                              <div class="circle-dot"></div>
                              <h6 class="timeline-date">
                                <i class="fa fa-calendar align-left"></i>{" "}
                                2021-2022
                              </h6>
                              <h4 class="timeline-title align-left">
                                Software Engineer
                              </h4>
                              <p class="timeline-text align-left">Axenda</p>
                            </div>

                            <div class="timeline-item">
                              <div class="circle-dot"></div>
                              <h6 class="timeline-date">
                                <i class="fa fa-calendar align-left"></i>{" "}
                                2022-Present
                              </h6>
                              <h4 class="timeline-title align-left">
                                Fullstack Engineer
                              </h4>
                              <p class="timeline-text align-left">Lendo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
