import React, { useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const heartInterval = setInterval(createHeart, 300);
    return () => clearInterval(heartInterval);
  }, []);

  return null;
};

export default FloatingHearts;
