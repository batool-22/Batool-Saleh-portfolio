import React from "react";
import "./projects.css";
import Khotta3 from "../assets/images/Khotta3.JPG";
import Admin9 from "../assets/images/Admin9.png";
import Consumer3 from "../assets/images/Consumer3.png";
import TenderHand from "../assets/images/TenderHand.jpg";
import Project2 from "../assets/images/Project2.jpg";

const ProjectsPage = () => {
  return (
    <>
      <section class="blog section" id="projects">
        <div class="container">
          <div class="row">
            <div class="section-t padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div class="row">
            <div class="blog-item padd-15">
              <div class="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={Khotta3} />
                  <div class="blog-data">4 Feb 2021</div>
                </div>
                <div class="blog-info">
                  <h4 class="blog-title">Khotta App | Axenda</h4>
                  <p class="blog-descrip">Web Designer</p>
                  <p class="blog-tags">
                    Tags : <a href="#">Figma </a>, <a href=""> Jira </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="blog-item padd-15">
              <div class="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={Admin9} />
                  <div class="blog-data">1 Aug 2022</div>
                </div>
                <div class="blog-info">
                  <h4 class="blog-title">Admin Portal | Lendo Financing</h4>
                  <p class="blog-descrip">Web Development</p>
                  <p class="blog-tags">
                    Tags : <a href="#">React JS </a>,
                    <a href=""> Bootstrap css </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="blog-item padd-15">
              <div class="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={Consumer3} />
                  <div class="blog-data">1 Aug 2022</div>
                </div>
                <div class="blog-info">
                  <h4 class="blog-title">Consumer Portal | Lendo Financing</h4>
                  <p class="blog-descrip">Web Development</p>
                  <p class="blog-tags">
                    Tags : <a href="#">React JS </a>,
                    <a href=""> Bootstrap css </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-item padd-15">
              <div class="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={TenderHand} />
                  <div class="blog-data">1 Jun 2021</div>
                </div>
                <div class="blog-info">
                  <h4 class="blog-title">Tender Hands App</h4>
                  <p class="blog-descrip">Web Development</p>
                  <p class="blog-tags">
                    Tags : <a href="#">Flutter</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-item padd-15">
              <div class="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={Project2} />
                  <div class="blog-data">8 Sep 2021</div>
                </div>
                <div class="blog-info">
                  <h4 class="blog-title">Hybird Software Project Management</h4>
                  <p class="blog-descrip">Web Development</p>
                  <p class="blog-tags">
                    Tags : <a href="#">Next JS </a>,
                    <a href=""> Tailwind css </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
