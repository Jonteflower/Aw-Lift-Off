// Import necessary modules from React and styled-components
import React from 'react';
import styled, { keyframes } from 'styled-components';
import StarryBackground from './stars'; // Adjust the import path as necessary

// Define animations
const fireAnimation = keyframes`
  0% { background: linear-gradient(to bottom, rgba(255,134,28,1) 0%, rgba(239,1,124,1) 50%, rgba(237,3,3,1) 100%); }
  50% { background: linear-gradient(to bottom, rgba(237,3,3,1) 0%, rgba(255,134,28,1) 51%, rgba(239,1,124,1) 100%); }
  100% { background: linear-gradient(to bottom, rgba(239,1,124,1) 0%, rgba(237,3,3,1) 51%, rgba(255,134,28,1) 100%); }
`;

const starsAnimation = keyframes`
  0% { top: -100%; }
  100% { top: 0; }
`;

// Styled components
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

const Stars = styled.div`
  & > div {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const StarsBack = styled.div`
  top: -50%;
  opacity: 0.5;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 300px 300px;
  animation: ${starsAnimation} ${props => props.duration || 20} infinite linear;
`;

const StarsMiddle = styled.div`
  background-image: 
    radial-gradient(3px 3px at 50px 160px, #ddd, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: ${starsAnimation} ${props => props.duration || 10} infinite linear;
`;

const Rocket = styled.div`
  position: relative;
  width: 50px;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
`;

const Fuselage = styled.div`
  width: 50px;
`;

const Nose = styled.div`
  width: 25px;
  margin: 0 auto;
  border-top: 15px solid #353535;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;

const Head = styled.div`
  position: relative;
  display: block;
  border-bottom: 25px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 25px;
  margin: 0 auto;
`;

const Window = styled.span`
  position: absolute;
  top: 16px;
  left: -7px;
  border-bottom: 15px solid #00a0d6;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  height: 0;
  width: 20px;
`;

const Neck = styled.div`
  position: relative;
  width: 45px;
  height: 30px;
  margin: 0 auto;
  background: #f4f4f4;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 22.5px;
    height: 30px;
    background: #e0e0e0;
  }

`;

const Body = styled.div`
  position: relative;
  width: 50px;
  height: 120px;
  background: #f4f4f4;
  border-bottom: 3px solid #a81237;
  border-top: 3px solid #a81237;


  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 115px;
    background: #e0e0e0;
  }

`;

const Reactor = styled.div`
  position: relative;
  border-bottom: 30px solid #4f4f4f;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 30px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 15px;
    opacity: 0.3;
    border-bottom: 30px solid #e0e0e0;
    border-left: 10px solid transparent;
  }

`;

const Fire = styled.div`
  position: relative;
  width: 25px;
  height: 70px;
  margin: 0 auto;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  animation: ${fireAnimation} 0.2s infinite;
  transform: scale(${props => props.scale || 1});
  top:  ${props => `${props.topDistance}px` || 0};

  div {
    position: absolute;
    background: #ED0303;
    animation: ${fireAnimation} infinite;
  }
`;

// Spark animations
const sparkAnimation = (size) => keyframes`
  0% { width: ${size.startWidth}px; height: ${size.startHeight}px; }
  50% { background: #EF017C; }
  100% { width: ${size.endWidth}px; height: ${size.endHeight}px; }
`;

// Define sparks with different sizes
const Spark = styled.div`
  border-radius: 50%;

  &.spark1 { animation: ${sparkAnimation({ startWidth: 10, startHeight: 10, endWidth: 40, endHeight: 40 })} 0.5s infinite; }
  &.spark2 { animation: ${sparkAnimation({ startWidth: 5, startHeight: 5, endWidth: 20, endHeight: 20 })} 0.3s infinite; }
  &.spark3 { animation: ${sparkAnimation({ startWidth: 10, startHeight: 10, endWidth: 50, endHeight: 50 })} 0.4s infinite; }
  &.spark4 { animation: ${sparkAnimation({ startWidth: 8, startHeight: 8, endWidth: 30, endHeight: 30 })} 0.7s infinite; }
  &.spark5 { animation: ${sparkAnimation({ startWidth: 5, startHeight: 5, endWidth: 10, endHeight: 10 })} 0.6s infinite; }
  &.spark6 { animation: ${sparkAnimation({ startWidth: 3, startHeight: 3, endWidth: 10, endHeight: 10 })} 0.2s infinite; }
  transform: scale(${props => props.scale || 1});
  bottom: -${props => props.scale * 70}px; // Adjust the bottom position based on the scale
  //top: ${props => `${props.topDistance}px` || 0};
`;

const Fin = styled.div`
  position: absolute;
  top: 73px;

  &.left-fin {
    right: 50px;
    width: 5px;
    border-bottom: 110px solid white;
    border-left: 60px solid transparent;
  }

  &.left-fin-end {
    top: 113px;
    right: 70px;
    border-bottom: 70px solid white;
    border-left: 70px solid transparent;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 10%;
  }

  &.right-fin {
    left: 50px;
    width: 5px;
    border-bottom: 110px solid white;
    border-right: 60px solid transparent;
  }

  &.right-fin-end {
    top: 113px;
    left: 70px;
    border-bottom: 70px solid white;
    border-right: 70px solid transparent;
    border-bottom-right-radius: 10%;
  }
`;



// Next.js component
export default function RocketBackground({ fireScale, topDistance, starsDuration }) {

  return (
    <Space>
      <Stars>
        <StarsBack duration={`${starsDuration}s`} />
        <StarsMiddle duration={`${starsDuration / 2}s`} />
      </Stars>
      <Rocket>
        <Fuselage>
          <Nose />
          <Head>
            <Window />
          </Head>
          <Neck />
          <Body />
          <Reactor />
          <Fire scale={fireScale} topDistance={topDistance}>
            <Spark className="spark1" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
            <Spark className="spark2" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
            <Spark className="spark3" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
            <Spark className="spark4" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
            <Spark className="spark5" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
            <Spark className="spark6" scale={fireScale} topDistance={topDistance + 40 * fireScale} />
          </Fire>
        </Fuselage>
        <Fin className="left-fin" />
        <Fin className="left-fin-end" />
        <Fin className="right-fin" />
        <Fin className="right-fin-end" />
      </Rocket>
    </Space>
  );
};