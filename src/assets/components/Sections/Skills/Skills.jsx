import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

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
      <h2>Programming Skills</h2>
      <div className="skillWrap">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className={`progress-fill ${isVisible ? 'fill' : 'empty'}`}
                style={{ '--progress-width': `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;