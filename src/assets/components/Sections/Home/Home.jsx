import React from 'react'
import { BsDownload } from "react-icons/bs";
import './Home.css'
function Home() {
  return (
    <div className='homeCont'>
    <div className="with-blur-backdrop">
        <div className='leftSide'>
            <h3>Hello I'm</h3>
            <h2>Roland Shane, <span>Lopez</span></h2>
            <h2>And I am a <span>Software Programmer</span></h2>        
            <h3>About me</h3>
            <p className='aboutDesc'>Recent Bachelor of Science in Information Technology graduate seeking a Web Developer position to apply skills in PHP, Laravel, React, and MySQL, honed through hands-on experience, to deliver innovative web solutions.
            </p>
        </div>
        <div className='rightSide'>
            <div className='profilePic'>
                <img src="src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg" alt="" />
            </div>
            <div className='DownCv'>
                <button className='DLCV'><BsDownload/> Download CV</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home