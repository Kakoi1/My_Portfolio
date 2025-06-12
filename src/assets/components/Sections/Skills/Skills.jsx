import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { leftSideVariants, textVariants } from '../../Motions/MotionFrame';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'Java', level: 65 },
    { name: 'React Framework', level: 70 },
    { name: 'Laravel Framework', level: 80 },
  ];

  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div className="skills-container" ref={skillsRef}>
      <motion.h2 variants={textVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
        Programming Skills
      </motion.h2>
      <motion.div
        className="skillWrap"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={leftSideVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={textVariants}
          >
            <motion.div className="skill-header" variants={textVariants}>
              <motion.span className="skill-name" variants={textVariants}>
                {skill.name}
              </motion.span>
              <motion.span className="skill-level" variants={textVariants}>
                {skill.level}%
              </motion.span>
            </motion.div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: '0%' }}
                animate={isVisible ? { width: `${skill.level}%` } : { width: '0%' }}
                transition={{ duration: 1, ease: 'easeIn' }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;