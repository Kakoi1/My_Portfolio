import React from 'react'
import Navigation from '../components/NavBar/Navigation'
import Footer from '../components/Footer/Footer'
import Home from '../components/Sections/Home/Home'
import Services from '../components/Sections/Services/Services'
import Skills from '../components/Sections/Skills/Skills'
import Contact from '../components/Sections/Contact/Contact'
import './MainLayout.css'
function Layout() {
  return (
    <div className='MainContainer'>
        <Navigation/>
        <section>
            <Home/>
        </section>
         <section>
          <h1 className='sectionTitle' style={{textAlign:'center'}}><span>Services</span></h1>
            <Services/>
        </section>
        <section>
          <h1 className='sectionTitle' style={{textAlign:'center'}}><span>Skills</span></h1>
            <Skills/>
        </section>
        <section>
          <h1 className='sectionTitle' style={{textAlign:'center'}}><span>Contact Me</span></h1>
            <Contact/>
        </section>
          <Footer/>
    </div>
  )
}
export default Layout