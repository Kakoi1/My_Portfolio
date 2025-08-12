import React, { useEffect } from 'react';
import Navigation from '../components/NavBar/Navigation';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Home from '../components/Sections/Home/Home';
import Services from '../components/Sections/Services/Services';
import Skills from '../components/Sections/Skills/Skills';
import Contact from '../components/Sections/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import MySeo from '../components/SEO/SeoComponents';
import './MainLayout.css';

function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const navHeight = 80; // Adjust based on your nav height
        const offset = elementRect.top + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2) - navHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  const ogData = {
    '#About-me': {
      title: 'R.S - About Me',
      description: 'Learn about R.S, a web developer.',
       image: `${window.location.origin}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`,
    },
    '#Services': {
      title: 'R.S - Services',
      description: 'Web development services by R.S.',
        image: `${window.location.origin}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`,
    },
    '#Skills': {
      title: 'R.S - Skills',
      description: 'Technical skills of R.S.',
       image: `${window.location.origin}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`,
    },
    '#Contact-me': {
      title: 'R.S - Contact',
      description: 'Contact R.S for projects.',
        image: `${window.location.origin}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`,
    },
    'default': {
      title: 'R.S - Portfolio',
      description: 'Portfolio of R.S, showcasing web development.',
      image: `${window.location.origin}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`,
    },
  };

  const currentOgData = ogData[hash] || ogData['default'];

  useEffect(() => {
    // Remove existing OG tags
    const existingTags = document.querySelectorAll(
      'title, meta[property="og:title"], meta[property="og:description"], meta[property="og:url"]'
    );
    existingTags.forEach(tag => tag.remove());

    // Add title
    const title = document.createElement('title');
    title.textContent = currentOgData.title;
    document.head.appendChild(title);

    // Add OG tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', currentOgData.title);
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', currentOgData.description);
    document.head.appendChild(ogDescription);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.origin); // No hash
    document.head.appendChild(ogUrl);

    return () => {
      existingTags.forEach(tag => tag.remove());
    };
  }, [currentOgData]);

  return (
    <div className="MainContainer">
      <MySeo customImage={currentOgData.image} />
      <Navigation />
      <ToastContainer />
      <div className="main">
        <section id="About-me">
          <Home />
        </section>
        <section id="Services">
          <h1 className="sectionTitle" style={{ textAlign: 'center' }}>
            <span>Services</span>
          </h1>
          <Services />
        </section>
        <section id="Skills">
          <h1 className="sectionTitle" style={{ textAlign: 'center' }}>
            <span>Skills</span>
          </h1>
          <Skills />
        </section>
        <section id="Contact-me">
          <h1 className="sectionTitle" style={{ textAlign: 'center' }}>
            <span>Contact Me</span>
          </h1>
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;