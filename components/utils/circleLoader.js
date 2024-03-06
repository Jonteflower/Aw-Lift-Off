import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define our keyframes for the pulsing rings
const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const pulseDelay = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

// Create a Loader styled component
const Loader = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;

// Create a Ring styled component for the pulsing effect
const Ring = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  border: 2px solid #FFF;
  border-radius: 50%;
  opacity: 0;
  animation: ${pulse} 1.5s cubic-bezier(0.075, 0.820, 0.165, 1.000) infinite;

  // Define a pseudo-element for the delayed pulse
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    border: 2px solid #FFF;
    border-radius: 50%;
    opacity: 0;
    animation: ${pulseDelay} 1.5s cubic-bezier(0.075, 0.820, 0.165, 1.000) 0.25s infinite;
  }
`;

// Loader6 React component
const CircleLoader = () => {
  return (
    <Loader className="loader-6">
      <Ring />
    </Loader>
  );
};

export default CircleLoader;
