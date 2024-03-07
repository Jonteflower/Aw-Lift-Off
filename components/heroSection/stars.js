import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Space = styled.section`
  position: absolute;
  display: block;
  height: calc(100vh + 70px);
  width: 100%;
  background-color: #1B2735;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  color: white;
  padding-top: 30vh;
  z-index: -1;
`;

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Assumes stars are simple divs, adjust as necessary
const Star = styled.div`
  position: absolute;
  background-color: #fff;
  width: 2px;
  height: 2px;
`;

const generateStars = (count, width, height) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    stars.push({ x, y });
  }
  return stars;
};

export default function StarryBackground() {
  const starsRef = useRef();

  useEffect(() => {
    const stars = generateStars(100, window.innerWidth, window.innerHeight);
    const ctx = starsRef.current;

    stars.forEach(star => {
      const div = document.createElement('div');
      div.style.left = `${star.x}px`;
      div.style.top = `${star.y}px`;
      ctx.appendChild(div);
    });

    // Animation logic
    let lastTime = 0;
    const moveStars = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      stars.forEach(star => {
        star.y += deltaTime * 0.05; // Adjust speed as necessary
        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
        }
      });

      ctx.innerHTML = ''; // Clear the container for simplicity, consider more efficient updates for production
      stars.forEach(star => {
        const div = document.createElement('div');
        div.style.left = `${star.x}px`;
        div.style.top = `${star.y}px`;
        ctx.appendChild(div);
      });

      lastTime = time;
      requestAnimationFrame(moveStars);
    };

    requestAnimationFrame(moveStars);
  }, []);

  return (
    <Space>
      <StarsContainer ref={starsRef} />
    </Space>
  );
}
