import { useState, useEffect } from 'react'
import Home from "./sections/Home";
import './styles/sidebar.css';
import Sidebar from './components/Sidebar';
import LeftSide from './components/LeftSide';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('page-loaded');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
      {/* Left Side Bar with Logo and Hamburger */}
      <LeftSide isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      
      {/* Navigation Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
