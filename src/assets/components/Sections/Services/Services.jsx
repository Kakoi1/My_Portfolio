import React from 'react'
import { BsFileEarmarkCode,BsMotherboard, BsFileCode  } from "react-icons/bs";
import './Services.css'
function Services() {
const services = [
  { name: 'Web Development', icon: <BsFileEarmarkCode />, desc: 'I create custom websites and web applications using CSS, JavaScript, PHP, Laravel and React. I ensure responsive designs for mobile and desktop, focusing on both functionality and user experience.' },
  { name: 'Mobile Development', icon: <BsFileCode  />, desc: 'I develop mobile applications for iOS and Android using React Native framework, ensuring seamless performance and user-friendly interfaces across devices.' },
  { name: 'Tech Support', icon: <BsMotherboard />, desc: 'I offer technical support for PCs and laptops, including troubleshooting hardware and software issues, diagnostics, and performance tuning to keep your devices running smoothly.' },
];
  return (
    <div className='serviceCont'>
  
        <div className='serviceWrapper'>
           {services.map((item, index) => 
           <div className='serviceItem' key={index}> 
                <span className='serviceIcon'>{item.icon}</span>
                <div className='serviceDetails'>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                </div>
           </div>)}
        </div>
    </div>
  )
}

export default Services