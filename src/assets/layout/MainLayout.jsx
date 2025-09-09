import React, { useEffect } from 'react'
import Navigation from '../components/NavBar/Navigation'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Home from '../components/Sections/Home/Home'
import Services from '../components/Sections/Services/Services'
import Skills from '../components/Sections/Skills/Skills'
import Contact from '../components/Sections/Contact/Contact'
import { ToastContainer } from 'react-toastify';
import './MainLayout.css'
function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
           const elementRect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const offset = elementRect.top + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2);
          window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  }, [hash]);

  return (
    <div className='MainContainer'>
      <Navigation />
      <ToastContainer />
      <div className='main'>
        <section id='About-me'>
          <Home />
        </section>
        <section id='Services'>
          <h1 className='sectionTitle' style={{ textAlign: 'center' }}><span>Services</span></h1>
          <Services />
        </section>
        <section id='Skills'>
          <h1 className='sectionTitle' style={{ textAlign: 'center' }}><span>TechStacks</span></h1>
          <Skills />
        </section>
        <section id='Contact-me'>
          <h1 className='sectionTitle' style={{ textAlign: 'center' }}><span>Contact Me</span></h1>
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default Layout