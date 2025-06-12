import React from 'react'
import { BsHeadset,BsFillHouseFill, BsPersonFillGear ,BsFillTelephoneFill,BsJustifyRight   } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Navigation.css'
function Navigation() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const [showLinks, setShowLinks] = useState(false);
    const navLink = [
        {name: 'Home', icon: <BsFillHouseFill/>},
        {name: 'Services', icon: <BsHeadset/>},
        {name: 'Skills', icon: <BsPersonFillGear/>},
        {name: 'Contact', icon: <BsFillTelephoneFill/>}
    ]
    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);
        const toggleMenu = () => {
        setShowLinks(!showLinks);
    };
  return (
    <div className='navCont'>
        <nav className='navigationBar'>
            <span className='initialName'>R.S</span>
            <div className='linkWrap'>
                {!isMobile ? (
                <ul>
                    {navLink.map((item , index) => (
                        <li key={index}><div  className='linkItem'><span className='linkIcon'>{item.icon}</span>{item.name}</div></li>
                    ))}
                </ul>
                ) : 
                 <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    onClick={toggleMenu}
                    className="leftChev"
                    >
                        <BsJustifyRight />
                    </motion.div>
                }
            </div>
        </nav>
    </div>
  )
}

export default Navigation