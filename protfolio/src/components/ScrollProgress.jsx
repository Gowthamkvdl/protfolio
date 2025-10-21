import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      // Get the total height of the document, excluding the visible viewport height
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Get the current vertical scroll position
      const scrollTop = document.documentElement.scrollTop;

      let percentage = 0;

      if (scrollHeight > 0) {
        // Calculate the percentage scrolled
        percentage = (scrollTop / scrollHeight) * 100;
      }

      setScrollPercentage(percentage);
    };

    // Add event listener for scroll changes
    window.addEventListener('scroll', calculateScrollProgress);

    // Initial calculation on mount
    calculateScrollProgress();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px', // Thin bar for subtlety
        zIndex: 1050, // Higher than Bootstrap's Navbar (usually 1030-1040)
        backgroundColor: 'transparent',
      }}
    >
      <div 
        style={{
          height: '100%',
          width: `${scrollPercentage}%`,
          backgroundColor: '#007bff', // Bootstrap Primary Blue
          transition: 'width 0.1s ease-out', // Smooth movement
        }}
        aria-valuenow={scrollPercentage}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default ScrollProgress;
