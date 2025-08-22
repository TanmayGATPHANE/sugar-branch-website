import React from 'react';
import SidebarToggle from './SidebarToggle';
import logoImg from '../assets/icons/logo.png';

interface LeftSideProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const LeftSide: React.FC<LeftSideProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <aside className="left-side">
      <div className="logo">
        <a href="#">
          <img src={logoImg} alt="Sugar Branch Logo" />
        </a>
      </div>
      <SidebarToggle isOpen={isSidebarOpen} onToggle={onToggleSidebar} />
      <div className="follow-us">FOLLOW US</div>
    </aside>
  );
};

export default LeftSide;
