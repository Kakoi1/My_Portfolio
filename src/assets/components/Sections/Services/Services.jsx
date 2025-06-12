import React, { useState, useRef, useEffect } from 'react';
import { BsFileEarmarkCode, BsMotherboard, BsFileCode } from "react-icons/bs";
import { motion } from 'framer-motion';
import './Services.css';
import { leftSideVariants, textVariants } from '../../Motions/MotionFrame';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

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

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    // Check initial visibility on mount
    const checkInitialVisibility = () => {
      if (serviceRef.current) {
        const rect = serviceRef.current.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        setIsVisible(isInViewport);
      }
    };

    checkInitialVisibility();

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  const services = [
    {
      name: 'Web Development',
      icon: <BsFileEarmarkCode />,
      desc: 'I create custom websites and web applications using CSS, JavaScript, PHP, Laravel and React. I ensure responsive designs for mobile and desktop, focusing on both functionality and user experience.'
    },
    {
      name: 'Mobile Development',
      icon: <BsFileCode />,
      desc: 'I develop mobile applications for iOS and Android using React Native framework, ensuring seamless performance and user-friendly interfaces across devices.'
    },
    {
      name: 'Tech Support',
      icon: <BsMotherboard />,
      desc: 'I offer technical support for PCs and laptops, including troubleshooting hardware and software issues, diagnostics, and performance tuning to keep your devices running smoothly.'
    },
  ];

  return (
    <div className="serviceCont" ref={serviceRef}>
      <motion.div
        className="serviceWrapper"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={leftSideVariants}
      >
        {services.map((item, index) => (
          <motion.div
            className="serviceItem"
            key={index}
            variants={textVariants}
          >
            <motion.span
              className="serviceIcon"
              variants={textVariants}
            >
              {item.icon}
            </motion.span>
            <motion.div
              className="serviceDetails"
              variants={textVariants}
            >
              <motion.h3 variants={textVariants}>{item.name}</motion.h3>
              <motion.p variants={textVariants}>{item.desc}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;