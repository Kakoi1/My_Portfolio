import React from 'react';
import { BsDownload } from "react-icons/bs";
import { motion } from 'framer-motion';
import profileImage from '../../../Images/385438962_790771539643042_7852980290333862625_n.jpg';
import './Home.css';
import { leftSideVariants, textVariants, rightSideVariants } from '../../Motions/MotionFrame';

function Home() {
  return (
    <motion.div 
      className='homeCont'
      initial="hidden"
      animate="visible"
      variants={rightSideVariants}
    >
      <motion.div 
        className="with-blur-backdrop"
        initial="hidden"
        animate="visible"
        variants={rightSideVariants}
      >
        <motion.div className='leftSide' variants={leftSideVariants}>
          <motion.h3 variants={textVariants}>Hello I'm</motion.h3>
          <motion.h2 variants={textVariants}>
            Roland Shane, <span>Lopez</span>
          </motion.h2>
          <motion.h2 variants={textVariants}>
            And I am a <span>Software Programmer</span>
          </motion.h2>
          <motion.h3 variants={textVariants}>About me</motion.h3>
          <motion.p className='aboutDesc' variants={textVariants}>
            Recent Bachelor of Science in Information Technology graduate seeking a Web Developer position to apply skills in PHP, Laravel, React, and MySQL, honed through hands-on experience, to deliver innovative web solutions.
          </motion.p>
        </motion.div>
        <motion.div 
          className='rightSide'
          initial="hidden"
          animate="visible"
          variants={rightSideVariants}
        >
          <div className='profilePic'>
            <img src={profileImage} alt="Profile picture" />
          </div>
          <div className='DownCv'>
            <button className='DLCV'>
              <BsDownload /> Download CV
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;