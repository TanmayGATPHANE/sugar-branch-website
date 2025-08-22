import React, { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Handle keyboard navigation (Escape key closes sidebar)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    
    // Smooth scroll to target
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Site Navigation - Exact replica from reference */}
      <nav className={`site-navigation ${isOpen ? 'active' : ''}`}>
        <div className="layer"></div>
        <div className="inner">
          <ul>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
              <ul>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#story'); }}>
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#team'); }}>
                    Meet Our Team
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Our Capabilities</a>
              <ul>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#sugar-comms'); }}>
                    Sugar Comms
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#sugar-xperience'); }}>
                    Sugar Xperience
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#sugar-content'); }}>
                    Sugar Content
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#sugar-retail'); }}>
                    Sugar Retail
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#sugar-digiverse'); }}>
                    Sugar Digiverse
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#clients'); }}>
                Clients
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#work'); }}>
                Our Work
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#careers'); }}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Social Media Panel */}
      <div className="social-media">
        <div className="layer"></div>
        <div className="inner">
          <h5>Social Share</h5>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
