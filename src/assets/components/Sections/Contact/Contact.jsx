import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelopeArrowUp } from "react-icons/bs";
import MapComponent from './MapComponent';
import './Contact.css';
import { leftSideVariants, textVariants } from '../../Motions/MotionFrame';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    const checkInitialVisibility = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        setIsVisible(isInViewport);
      }
    };

    checkInitialVisibility();

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-container">
      <motion.div
        className="contact-content"
        ref={contactRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={leftSideVariants}
      >
        <motion.div className="contact-form" variants={leftSideVariants}>
          <motion.h2 variants={textVariants}>Let's Talk</motion.h2>
          <form>
            <motion.div className="formWrapper" variants={leftSideVariants}>
              <motion.div className="form-row" variants={textVariants}>
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  variants={textVariants}
                />
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  variants={textVariants}
                />
              </motion.div>
              <motion.input
                type="email"
                placeholder="Email"
                className="input-field full-width"
                variants={textVariants}
              />
              <motion.input
                type="tel"
                placeholder="Phone Number"
                className="input-field full-width"
                variants={textVariants}
              />
              <motion.textarea
                placeholder="Message"
                className="input-field full-width textarea"
                variants={textVariants}
              />
              <motion.button
                type="submit"
                className="submit-button"
                variants={textVariants}
              >
                Send me a message <BsEnvelopeArrowUp />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
        <motion.div className="contact-info" variants={leftSideVariants}>
          <motion.div className="map-placeholder" variants={textVariants}>
            <MapComponent />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;