import React, { useEffect, useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [scrolledSection, setScrolledSection] = useState('');
  const [color, setColor] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const homeOffset = document.getElementById('home').offsetTop;
    const aboutOffset = document.getElementById('about').offsetTop - 61;
    const frontendOffset = document.getElementById('frontend').offsetTop - 61;
    const backendOffset = document.getElementById('backend').offsetTop - 61;
    const combinationOffset = document.getElementById('combination').offsetTop - 61;
    const contactOffset = document.getElementById('contact').offsetTop - 61;

    const scrollPosition = window.scrollY;

    if (scrollPosition < aboutOffset) {
      setScrolledSection('home');
    } else if (scrollPosition >= aboutOffset && scrollPosition < frontendOffset) {
      setScrolledSection('about');
    } else if (scrollPosition >= frontendOffset && scrollPosition < backendOffset) {
      setScrolledSection('frontend');
    } else if (scrollPosition >= backendOffset && scrollPosition < combinationOffset) {
      setScrolledSection('backend');
    } else if (scrollPosition >= combinationOffset && scrollPosition < contactOffset) {
      setScrolledSection('combination');
    } else {
      setScrolledSection('contact');
    }

    if (scrolledSection === 'frontend' || scrolledSection === 'backend' || scrolledSection === 'contact') {
      setColor(true);
    } else {
      setColor(false);
    }

    if (scrolledSection === 'about' || scrolledSection === 'combination') {
      setWhiteBackground(true);
    } else {
      setWhiteBackground(false);
    }

    const isScrolled = scrollPosition > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolledSection]);

  return (
    <nav className={`navbar ${whiteBackground ? 'white-bg' : ''} ${color ? 'color' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div style={{width: '1150px', display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
        <a href='/'>
          <div className="logo-container">
            <div className={`logo ${scrolled ? 'scrolled' : ''}`}>
                <p className='bigfont' style={{fontSize: '14px', marginLeft: '2px', marginRight: '2px'}}>Łukasz</p>
                <p className='bigfont' style={{fontSize: '14px', marginLeft: '2px', marginRight: '2px'}}>Harkot</p>
            </div>
          </div>
        </a>
        <ul className={`nav-links ${scrolled ? 'scrolled' : ''}`}>
          <li className={scrolledSection === 'home' ? 'active' : ''}>
            <a href='#home'>HOME</a>
          </li>
          <li className={scrolledSection === 'about' ? 'active' : ''}>
            <a href='#about'>ABOUT ME</a>
          </li>
          <li className={scrolledSection === 'frontend' ? 'active' : ''}>
            <a href='#frontend'>FRONTEND</a>
          </li>
          <li className={scrolledSection === 'backend' ? 'active' : ''}>
            <a href='#backend'>BACKEND</a>
          </li>
          <li className={scrolledSection === 'combination' ? 'active' : ''}>
            <a href='#combination'>COMBINATION</a>
          </li>
          <li className={scrolledSection === 'contact' ? 'active' : ''}>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
