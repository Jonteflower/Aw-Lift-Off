import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;

const scaleAndFade = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const moveAndShrink = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-16px, 0, 0) scale(.5); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`;

const LoaderElement = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  bottom: 0; 
  right: 0;
  margin: auto;
  width: 12px;
  height: 12px;
  background: #FFF;
  border-radius: 50%;
  animation: ${scaleAndFade} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
`;

const LoaderRing = styled.span`
  display: block;
  position: absolute;
  top: 0; 
  left: 0;
  bottom: 0; 
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  animation: ${rotate} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0; 
    right: 0;
    margin: auto;
    height: 12px;
    width: 12px;
    background: #FFF;
    border-radius: 50%;
    animation: ${moveAndShrink} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0; 
    right: 0;
    margin: auto;
    height: 12px;
    width: 12px;
    background: #FFF;
    border-radius: 50%;
    animation: ${moveAndShrink} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite reverse;
  }
`;

const CircleLoader = () => {
  return (
    <LoaderWrapper>
      <LoaderElement />
      <LoaderRing />
    </LoaderWrapper>
  );
};

export default CircleLoader;
