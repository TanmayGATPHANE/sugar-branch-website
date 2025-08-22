import React from 'react';

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={`hamburger ${isOpen ? 'is-opened-navi' : ''}`} id="hamburger" onClick={onToggle}>
      <div className="hamburger__line hamburger__line--01">
        <div className="hamburger__line-in hamburger__line-in--01"></div>
      </div>
      <div className="hamburger__line hamburger__line--02">
        <div className="hamburger__line-in hamburger__line-in--02"></div>
      </div>
      <div className="hamburger__line hamburger__line--03">
        <div className="hamburger__line-in hamburger__line-in--03"></div>
      </div>
      <div className="hamburger__line hamburger__line--cross01">
        <div className="hamburger__line-in hamburger__line-in--cross01"></div>
      </div>
      <div className="hamburger__line hamburger__line--cross02">
        <div className="hamburger__line-in hamburger__line-in--cross02"></div>
      </div>
    </div>
  );
};

export default SidebarToggle;
