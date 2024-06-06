import { useEffect, useState } from 'react';

const AnimatedElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector('.element');
    const rect = element.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInView) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`element ${isVisible ? 'show' : ''}`}>
      This is the animated element
    </div>
  );
};

export default AnimatedElement;
