import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelopeArrowUp } from "react-icons/bs";
import MapComponent from './MapComponent';
import './Contact.css';
import axios from "axios";
import { leftSideVariants, textVariants } from '../../Motions/MotionFrame';
import Toaster from '../../toast/Toaster';
const apiBackend = import.meta.env.VITE_BACK_END;
function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef(null);
  const [userEmail, setUserEmail] = useState("");
  const [to, setTo] = useState("");  
  const [subject, setSubject] = useState("Inquiry");
  const [message, setMessage] = useState("");
  const [Lname, setLname] = useState("");
  const [Fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState('');
  const [downloadPromise, setDownloadPromise] = useState(null);

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

const handleSubmit = async (e) => {
   e.preventDefault();
    setError('');
    if (!Fname || !Lname || !userEmail || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    try {
      const userName = `${Fname} ${Lname}`.trim();

       const downloadPromise = axios.post(`${apiBackend}api/send`, {
        userName,
        userEmail,
        to: 'lopezrolandshane@gmail.com',
        subject,
        message,
        phone
      }).then((response) => {
        if (response.status === 200) {
          setFname('');
          setLname('');
          setUserEmail('');
          setPhone('');
          setMessage('');
          setSubject('');
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      });
    
      setDownloadPromise(downloadPromise);
    } catch (err) {
      alert(`Error sending email: ${err.message}`);
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <Toaster
        myPromise={downloadPromise}
        pending="Sending..."
        message="Email sent successfully! 🎉"
        error = 'Failed to send message:'
      />
      <motion.div
        className="contact-content"
        ref={contactRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={leftSideVariants}
      >
        <motion.div className="contact-form" variants={leftSideVariants}>
          <motion.h2 variants={textVariants}>Let's Talk</motion.h2>
          {error && <p className="error-message" style={{ color: 'red', marginBottom: '16px' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <motion.div className="formWrapper" variants={leftSideVariants}>
              <motion.div className="form-row" variants={textVariants}>
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  variants={textVariants}
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                  autoComplete='on'
                />
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  variants={textVariants}
                  value={Fname}
                  onChange={(e) => setFname(e.target.value)}
                  autoComplete='on'
                />
              </motion.div>
              <motion.input
                type="email"
                placeholder="Email"
                className="input-field full-width"
                variants={textVariants}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                autoComplete='on'
              />
              <motion.input
                type="tel"
                placeholder="Phone Number"
                className="input-field full-width"
                variants={textVariants}
                value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 autoComplete='on'
              />
              <motion.textarea
                placeholder="Message"
                className="input-field full-width textarea"
                variants={textVariants}
                value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 autoComplete='on'
              />
              <motion.button
                type="submit"
                className="submit-button"
                variants={textVariants}
                disabled={isLoading}
              >
               {isLoading ? 'Sending...' : 'Send me a message'} <BsEnvelopeArrowUp />
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