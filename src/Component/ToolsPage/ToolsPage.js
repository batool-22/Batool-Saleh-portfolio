import React from "react";
import "./tool-page.css";
import { motion } from "framer-motion";
import { technologies, Frontend, Backend, Design } from "../../Constant";
import { fadeIn } from "../../utils/motion";

const ToolsPage = () => {
  return (
    <>
      <section class="service section" id="tools">
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
              <>
                <motion.div
                  id="tech"
                  variants={fadeIn("", "spring", 0.5, 0.75)}
                >
                  <div class="section-t padd-15 ">
                    <h2>Some of My Tools</h2>
                  </div>
                </motion.div>
                <div class="section-t-span padd-15 ">
                  <h2>Frontend</h2>
                </div>
                <div className="row row-style">
                  {Frontend.map((technology) => (
                    <div className="tool" key={technology.name}>
                      {typeof technology.icon === "string" ? (
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        technology.icon
                      )}
                    </div>
                  ))}
                </div>
                <div class="section-t-span padd-15 ">
                  <h2>Backend</h2>
                </div>
                <div className="row row-style">
                  {Backend.map((technology) => (
                    <div className="tool" key={technology.name}>
                      {typeof technology.icon === "string" ? (
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        technology.icon
                      )}
                    </div>
                  ))}
                </div>
                <div class="section-t-span padd-15 ">
                  <h2>Design</h2>
                </div>
                <div className="row row-style">
                  {Design.map((technology) => (
                    <div className="tool" key={technology.name}>
                      {typeof technology.icon === "string" ? (
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        technology.icon
                      )}
                    </div>
                  ))}
                </div>
                <div class="section-t-span padd-15 ">
                  <h2>Others</h2>
                </div>
                <div className="row row-style">
                  {technologies.map((technology) => (
                    <div className="tool" key={technology.name}>
                      {typeof technology.icon === "string" ? (
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        technology.icon
                      )}
                    </div>
                  ))}
                </div>
              </>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ToolsPage;
