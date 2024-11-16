import React, { useEffect } from 'react';
import './FloatingHearts.css';

const FloatingElements = () => {
  useEffect(() => {
    const floatingElements = document.querySelector('.floating-elements');
    const colors = ['#FF6B6B', '#FF8E72', '#FFD93D', '#C0CA33'];

    function createFloatingElement(type) {
      const element = document.createElement('div');
      element.className = type;
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${Math.random() * 5 + 3}s`;
      element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      floatingElements.appendChild(element);
    }

    for (let i = 0; i < 10; i++) {
      createFloatingElement('heart');
      createFloatingElement('star');
    }
  }, []);

  return (
    <div className="floating-elements">
      <div className="heart"></div>
      <div className="star"></div>
      <div className="heart"></div>
      <div className="star"></div>
      <div className="heart"></div>
      <div className="star"></div>
    </div>
  );
};

export default FloatingElements;
