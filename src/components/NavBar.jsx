import React, { useEffect, useState } from 'react';
import '../index.css';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [scrolledSection, setScrolledSection] = useState('');
  const [color, setColor] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('');

  const defaultColor = 'rgba(239, 239, 239, 0.98)'; // Set the default color
  const homeColor = 'rgba(239, 239, 239, 0.98)'; // Set the appropriate color
  const aboutColor = 'rgba(255, 255, 255, 0.98)'; // Set the appropriate color
  const frontendColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color
  const backendColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color
  const combinationColor = 'rgba(255, 255, 255, 0.98)'; // Set the appropriate color
  const contactColor = 'rgba(217, 217, 211, 0.98)'; // Set the appropriate color

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
      setThemeColor(homeColor);
      setWhiteBackground(false);
      setColor(false);
    } else if (scrollPosition >= aboutOffset && scrollPosition < frontendOffset) {
      setScrolledSection('about');
      setThemeColor(aboutColor);
      setWhiteBackground(true);
      setColor(false);
    } else if (scrollPosition >= frontendOffset && scrollPosition < backendOffset) {
      setScrolledSection('frontend');
      setThemeColor(frontendColor);
      setWhiteBackground(false);
      setColor(true);
    } else if (scrollPosition >= backendOffset && scrollPosition < combinationOffset) {
      setScrolledSection('backend');
      setThemeColor(backendColor);
      setWhiteBackground(false);
      setColor(true);
    } else if (scrollPosition >= combinationOffset && scrollPosition < contactOffset) {
      setScrolledSection('combination');
      setThemeColor(combinationColor);
      setWhiteBackground(true);
      setColor(false);
    } else {
      setScrolledSection('contact');
      setThemeColor(contactColor);
      setWhiteBackground(false);
      setColor(true);
    }

    const isScrolled = scrollPosition > 0;
    setScrolled(isScrolled);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const updateThemeColor = () => {
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
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const navClassName = isiOS
    ? `navbarmobile ${whiteBackground ? 'white-bg' : ''} ${color ? 'color' : ''} ${scrolled ? 'scrolled' : ''} ${showDropdown ? 'expanded' : ''}`
    : `navbar ${whiteBackground ? 'white-bg' : ''} ${color ? 'color' : ''} ${scrolled ? 'scrolled' : ''} ${showDropdown ? 'expanded' : ''}`;

  return (
    <nav className={navClassName}>
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
