import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for spinning animation
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader
const Loader = styled.div`
  position: relative;
  width: 50px;  // Adjust size as needed
  height: 50px; // Adjust size as needed
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #64FFDA;  // Use your preferred color or the imported neonGreen
  animation: ${spin} 1s linear infinite;
`;

// InnerText styles remain mostly the same, just remove the rotation
const InnerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-weight: 500;
  font-size: 1.5rem;  // Adjust size as needed
  z-index: 10;
`;

// CircularLoader component
const CircleLoader = () => {
  return (
    <>
      <Loader>
        <InnerText>
            AW
        </InnerText>
      </Loader>
    </>
  );
}

export default CircleLoader;
