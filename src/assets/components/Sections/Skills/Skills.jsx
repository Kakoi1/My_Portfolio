import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { leftSideVariants, textVariants } from '../../Motions/MotionFrame';
import express from "../../../Images/icons8-express-js-50.png";
import mysql from "../../../Images/icons8-mysql-logo-48.png";
import css from "../../../Images/icons8-css-48.png";
import Html from "../../../Images/icons8-html-5-48.png";
import php from "../../../Images/icons8-php-48.png";
import javasc from "../../../Images/icons8-javascript-48.png";
import java from "../../../Images/icons8-java-64.png";
import react from "../../../Images/icons8-react-64.png";
import laravel from "../../../Images/icons8-laravel-64.png";

function Skills() {
  const techStack = [
    { name: 'ExpressJs', pic: express, tag: 'front', Fw: true },
    { name: 'Laravel', pic: laravel, tag: 'back', Fw: true },
    { name: 'Mysql', pic: mysql, tag: 'database', Fw: false },
    { name: 'CSS', pic: css, tag: 'front', Fw: false },
    { name: 'HTML', pic: Html, tag: 'front', Fw: false },
    { name: 'PHP', pic: php, tag: 'back', Fw: false },
    { name: 'JavaScript', pic: javasc, tag: 'front', Fw: false },
    { name: 'Java', pic: java, tag: 'back', Fw: false },
    { name: 'ReactJS', pic: react, tag: 'front', Fw: true },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('all');
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  const techSorted = techStack.sort((a,b) => a.name.localeCompare(b.name));

  const filteredTechStack = sortBy === 'all'
    ? techSorted
    : sortBy === 'framework'
    ? techSorted.filter(item => item.Fw === true)
    : techSorted.filter(item => item.tag === sortBy);

  return (
    <div className="skills-container" ref={skillsRef}>

      <div className="sort-controls">
        <button
          className={sortBy === 'all' ? 'active' : ''}
          onClick={() => setSortBy('all')}
        >
          All
        </button>
        <button
          className={sortBy === 'front' ? 'active' : ''}
          onClick={() => setSortBy('front')}
        >
          Frontend
        </button>
        <button
          className={sortBy === 'back' ? 'active' : ''}
          onClick={() => setSortBy('back')}
        >
          Backend
        </button>
        <button
          className={sortBy === 'database' ? 'active' : ''}
          onClick={() => setSortBy('database')}
        >
          Database
        </button>
        <button
          className={sortBy === 'framework' ? 'active' : ''}
          onClick={() => setSortBy('framework')}
        >
          Framework
        </button>
      </div>

      <motion.div
        className="tech-stack-grid"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={leftSideVariants}
      >
        {filteredTechStack.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item"
            variants={textVariants}
          >
            <img src={tech.pic} alt={tech.name} className="tech-image" />
            <span className="tech-name">{tech.name}</span>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;