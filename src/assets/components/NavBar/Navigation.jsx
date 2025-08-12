import React from 'react'
import { BsHeadset, BsX,BsFillHouseFill, BsPersonFillGear, BsFillTelephoneFill, BsJustifyRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

function Navigation() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const [showLinks, setShowLinks] = useState(false);
    
  const navLink = [
        { name: 'Home', icon: <BsFillHouseFill />, path: '#About-me' },
        { name: 'Services', icon: <BsHeadset />, path: '#Services' },
        { name: 'Skills', icon: <BsPersonFillGear />, path: '#Skills' },
        { name: 'Contact', icon: <BsFillTelephoneFill />, path: '#Contact-me' }
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
            if (window.innerWidth > 1200) setShowLinks(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    const sidebarVariants = {
        open: {
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        closed: {
            x: "100%",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    return (
        <div className='navCont'>
            <nav className='navigationBar'>
                <span className='initialName'>R.S</span>
                <div className='linkWrap'>
                    {!isMobile ? (
                        <ul>
                            {navLink.map((item, index) => (
                                <li key={index}>
                                   <HashLink 
                                        smooth 
                                        to={item.path} 
                                        className='linkItem'
                                    >
                                        <span className='linkIcon'>{item.icon}</span>
                                        {item.name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            onClick={toggleMenu}
                            className="leftChev"
                        >
                            <BsJustifyRight />
                        </motion.div>
                    )}
                </div>
            </nav>
            <AnimatePresence>
                {isMobile && showLinks && (
                    <>
                    <motion.div 
                        className="sidebar"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            onClick={toggleMenu}
                            className="closeButton"
                        >
                        <BsX />
                        </motion.div>
                        <ul className="sidebarLinks">
                            {navLink.map((item, index) => (
                                <li key={index} onClick={toggleMenu}>
                                     <HashLink 
                                        smooth 
                                        to={item.path} 
                                        className='linkItem'
                                    >
                                        <span className='linkIcon'>{item.icon}</span>
                                        {item.name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="overlay"  onClick={toggleMenu}></div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navigation