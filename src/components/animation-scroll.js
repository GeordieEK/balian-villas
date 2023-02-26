import { useState, useEffect, useRef } from 'react';

const AnimationScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = window.pageYOffset + window.innerHeight;
      const isVisible = top > ref.current.offsetTop + 100;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`animated ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimationScroll;
