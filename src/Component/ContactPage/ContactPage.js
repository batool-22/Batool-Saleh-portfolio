import React, { useRef } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = (props) => {
  const { theme } = props;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hs21ezi", "template_3yalrt5", form.current, {
        publicKey: "oPOAeM_k5eQSXSw6O",
      })
      .then(
        () => {
          toast.success(`Successfully Sent!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          console.log("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <ToastContainer />

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
                <form class="contact-form padd-15" ref={form}>
                  <div class="row">
                    <div class="from-item col-6 padd-15">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name*"
                          name="user_name"
                        />
                      </div>
                    </div>
                    <div class="from-item col-6 padd-15">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email*"
                          name="user_email"
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
                          name="user_subject"
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
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 padd-15">
                      <button type="submit" class="btn" onClick={sendEmail}>
                        Send Message
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
