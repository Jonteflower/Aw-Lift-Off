import React from 'react';
import styled, { keyframes } from 'styled-components';
import { neonGreen } from '../reuseable';

const diamondLoader = keyframes`
  0%, 10% {
    transform: translate(-64px, -64px) rotate(-45deg);
  }
  90%, 100% {
    transform: translate(0px, 0px) rotate(-45deg);
  }
`;

const Loader = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  background-color: #11041D;
  transform: rotate(45deg);
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    inset: -15px;
    margin: auto;
    background: ${neonGreen};
    animation: ${diamondLoader} .7s linear;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 8px;
    margin: auto;
    background: #11041D;
  }
`;

const InnerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  z-index: 30; // Add a z-index value here

`;

const DiamondLoader = () => {
  return (
    <>
      <Loader>
        <InnerText>€</InnerText>
      </Loader>
    </>
  );
}

export default DiamondLoader;
