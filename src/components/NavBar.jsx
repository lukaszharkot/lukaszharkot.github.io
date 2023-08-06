import React, { useEffect, useState } from 'react';
import '../index.css';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [scrolledSection, setScrolledSection] = useState('');
  const [test, setTest] = useState('');
  const [color, setColor] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  if (scrollPosition - 2 < aboutOffset) {
    setTest('home'); 
  } else if (scrollPosition - 2 >= aboutOffset && scrollPosition - 2 < frontendOffset) {
    setTest('about');
    console.log("about delayed");
  } else if (scrollPosition - 2 >= frontendOffset && scrollPosition - 2 < backendOffset) {
    setTest('frontend');
    console.log("frontend delayed");
  } else if (scrollPosition - 2 >= backendOffset && scrollPosition - 2 < combinationOffset) {
    setTest('backend');
    console.log("backend delayed");
  } else if (scrollPosition - 2 >= combinationOffset && scrollPosition - 2 < contactOffset) {
    setTest('combination');
    console.log("combination delayed");
  } else {
    setTest('contact');
    console.log("contact delayed");
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const updateThemeColor = () => {
      const navbar = document.querySelector('.navbar');
      const navbarBackgroundColor = getComputedStyle(navbar).backgroundColor;
  
      const defaultColor = 'rgba(239, 239, 239, 0.98)'; // Set the default color
      const homeColor = 'rgba(239, 239, 239, 0.98)'; // Set the appropriate color
      const aboutColor = 'rgba(255, 255, 255, 0.98)'; // Set the appropriate color
      const frontendColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color
      const backendColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color
      const combinationColor = 'rgba(255, 255, 255, 0.98)'; // Set the appropriate color
      const contactColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color
  
      let themeColor = defaultColor;
  
      if (test === 'home') {
        themeColor = homeColor;
      } else if (test === 'about') {
        themeColor = aboutColor;
      } else if (test === 'frontend') {
        themeColor = frontendColor;
      } else if (test === 'backend') {
        themeColor = backendColor;
      } else if (test === 'combination') {
        themeColor = combinationColor;
      } else if (test === 'contact') {
        themeColor = contactColor;
      }
  
      const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
      themeColorMetaTag.setAttribute('content', themeColor);
    };
  
    updateThemeColor();
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolledSection]);

  const isMobileView = window.innerWidth < 1024;
  const showDropdown = isMobileView && dropdownOpen;

  return (
    <nav className={`navbar ${whiteBackground ? 'white-bg' : ''} ${color ? 'color' : ''} ${scrolled ? 'scrolled' : ''} ${showDropdown ? 'expanded' : ''}`}>
        {isMobileView ? (
          // Render the dropdown button and menu for mobile view
          <div style={{justifyContent: 'space-between', width:'100%'}}>
            <div className={`mobile-nav ${scrolled ? 'scrolled' : ''} ${showDropdown ? 'clicked' : ''}`}>
              <a href='/'>
                <div className="logo-container">
                  <div className={`logo ${scrolled ? 'scrolled' : ''}`}>
                    <p className='bigfont' style={{fontSize: '13px', marginLeft: '2px', marginRight: '2px'}}>Łukasz</p>
                    <p className='bigfont' style={{fontSize: '13px', marginLeft: '2px', marginRight: '2px'}}>Harkot</p>
                  </div>
                </div>
              </a>
              <BiMenu
                onClick={toggleDropdown}
                className={`menubutton ${dropdownOpen ? 'menubuttonclicked' : ''}`}
              />
            </div>
            <div>
              {showDropdown && (
                <ul className={`mobilenav-links ${scrolled ? 'scrolled' : ''}`}>
                  <li className={scrolledSection === 'home' ? 'active' : ''}>
                    <a href='#home'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>HOME</t></a>
                  </li>
                  <li className={scrolledSection === 'about' ? 'active' : ''}  style={{ marginTop: '13px'}}>
                    <a href='#about'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>ABOUT ME</t></a>
                  </li>
                  <li className={scrolledSection === 'frontend' ? 'active' : ''}  style={{ marginTop: '13px'}}>
                    <a href='#frontend'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>FRONTEND</t></a>
                  </li>
                  <li className={scrolledSection === 'backend' ? 'active' : ''}  style={{ marginTop: '13px'}}>
                    <a href='#backend'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>BACKEND</t></a>
                  </li>
                  <li className={scrolledSection === 'combination' ? 'active' : ''}  style={{ marginTop: '13px'}}>
                    <a href='#combination'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>COMBINATION</t></a>
                  </li>
                  <li className={scrolledSection === 'contact' ? 'active' : ''}  style={{ marginTop: '13px'}}>
                    <a href='#contact'><t className={`navtext ${scrolled ? 'scrolled' : ''}`}>CONTACT</t></a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div style={{width: '1150px', display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <a href='/'>
              <div className="">
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
        )}
    </nav>
  );
};

export default Navbar;
