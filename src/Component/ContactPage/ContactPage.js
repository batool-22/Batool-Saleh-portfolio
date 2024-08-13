import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <section class="contact section" id="contact">
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
                <div class="section-t padd-15">
                  <h2>Contact Me</h2>
                </div>
              </div>
              <div class="row">
                <div class="contact-info-item padd-15">
                  <div class="icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <h4>Call Me On</h4>
                  <p>+971563161985</p>
                </div>

                <div class="contact-info-item padd-15">
                  <div class="icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <h4>City</h4>
                  <p>Dubai , UAE</p>
                </div>

                <div class="contact-info-item padd-15">
                  <div class="icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <h4>Email</h4>
                  <p>Batool.saleh288@gmail.com</p>
                </div>
              </div>

              <div class="row">
                <form class="contact-form padd-15">
                  <div class="row">
                    <div class="from-item col-6 padd-15">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name*"
                        />
                      </div>
                    </div>
                    <div class="from-item col-6 padd-15">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email*"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="from-item col-12 padd-15">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject*"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="from-item col-12 padd-15">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder=" Your Message ..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 padd-15">
                      <button type="submit" class="btn">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactPage;
