import React, { useState, useRef, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import { motion } from 'framer-motion';
import profileImage from '../../../Images/385438962_790771539643042_7852980290333862625_n.jpg';
import './Home.css';
import { leftSideVariants, textVariants, rightSideVariants } from '../../Motions/MotionFrame';
import axios from 'axios';
const apiBackend = import.meta.env.VITE_BACK_END;
import Toaster from '../../toast/Toaster';

function Home() {

const [downloadPromise, setDownloadPromise] = useState(null);

const handleSubmit = async () => {
  
          const downloadPromise = axios.get(`${apiBackend}api/download`, {
              responseType: 'blob',
          })
          .then((response) => {
                  const blob = response.data;
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                  return 'File downloaded successfully!';
          });
    setDownloadPromise(downloadPromise);
  };

  return (
    <motion.div 
      className='homeCont'
      initial="hidden"
      animate="visible"
      variants={rightSideVariants}
    >
      <Toaster
        myPromise={downloadPromise}
        pending="Downloading file..."
        message="File downloaded successfully! 🎉"
        error = 'Failed to Download File: '
      />
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
            <button
            onClick={handleSubmit}
            className='DLCV'>
              <BsDownload /> Download CV
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;