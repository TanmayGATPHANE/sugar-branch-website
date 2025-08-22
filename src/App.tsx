import { useState, useEffect } from 'react'
import Home from "./sections/Home";
import './styles/sidebar.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('page-loaded');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking on navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    // Smooth scroll to target
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="inner">
          <figure>
            <div className="loader-circle"></div>
          </figure>
          <span>Site Loading</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {/* Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      {/* Navigation Menu */}
      <nav className={`site-navigation ${isMenuOpen ? 'open' : ''}`}>
        <div className="layer" onClick={closeMenu}></div>
        <div className="inner">
          <ul>
            <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
            <li><a href="#sugar-edge" onClick={(e) => handleNavClick(e, 'sugar-edge')}>The Sugar Edge</a></li>
            <li><a href="#story" onClick={(e) => handleNavClick(e, 'story')}>Our Story</a></li>
            <li><a href="#team" onClick={(e) => handleNavClick(e, 'team')}>Our Team</a></li>
            <li><a href="#capabilities" onClick={(e) => handleNavClick(e, 'capabilities')}>Our Capabilities</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Voices of Trust</a></li>
            <li className="divider"></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          </ul>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside className="left-side">
        <div className="logo">
          <div className="logo-icon">
            <img src="https://via.placeholder.com/40x40/866476/ffffff?text=SB" alt="Sugar Branch" />
          </div>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="follow-us">FOLLOW US</div>
      </aside>

      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
