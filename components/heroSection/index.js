import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OuterSection } from '../reuseable';
import RocketBackground from './rocketBackground';

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:100%;
  gap:1rem;
  margin-bottom: 22vh;

  @media screen and (max-width:800px) {
    flex-direction: column;
    margin-bottom: 27vh;
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:100vh;
  gap:30px;
  margin-top: 5vh;

  @media screen and (max-width:800px) {
    flex-direction: column;
  }
`;

const HeroTitle = styled.h1`
  width:100%;
  font-size: 5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin:0px;
  color:#f1f1f1;
  z-index: 10;
  text-align: center;

  @media screen and (max-width:600px) {
    font-size: 3.5rem;
    line-height: 3.7rem;
    text-align: center;
    line-height: 130%;
  }
`

function HeroSection({ }) {
  const [fireScale, setFireScale] = useState(0.15);
  const [starsDuration, setStarsDuration] = useState(20);
  const [topDistance, setTopDistance] = useState(0);
  const [countdown, setCountdown] = useState('');

  function round(number) {
    return Math.round(number * 100) / 100
  }

  useEffect(() => {
    const calculateScaleAndCountdown = () => {
      const now = new Date();
      const isThursdayAfternoon = now.getDay() === 4 && now.getHours() >= 16 && now.getHours() < 24;

      // Base state for "LIFT-OFF" scenario
      let newFireScale = 1.1;
      let newStarsDuration = 8 / newFireScale;
      let newTopDistance = -12 / Math.sqrt(newFireScale) + newFireScale * 14;
      let countdownText = "LIFT-OFF";

      if (!isThursdayAfternoon) {
        const nextThursday = new Date(now);
        nextThursday.setHours(16, 0, 0, 0); // Set to 16:00

        // Adjusting for the next occurrence of Thursday at 16:00
        if (now.getDay() > 4 || (now.getDay() === 4 && now.getHours() >= 16)) {
          nextThursday.setDate(now.getDate() + ((11 - now.getDay()) % 7));
        } else if (now.getDay() < 4) {
          nextThursday.setDate(now.getDate() + ((4 - now.getDay()) % 7));
        }

        // Time difference calculation
        const diff = nextThursday.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Adjusting fire scale based on the remaining time
        newFireScale = 0.15;
        if (days === 0 && hours <= 10) {
          if (hours < 1) {
            newFireScale = round(1 + 0.5 / Math.max(1, minutes)); // Prevent division by zero
          } else {
            newFireScale = 1 / Math.max(1, hours);
          }
          if (hours === 0 && minutes === 0 && seconds <= 10) {
            newFireScale = round(1 + 1 / Math.max(1, seconds)); // Prevent division by zero
          }
        }

        // Update countdown text based on the lowest non-zero time unit
        countdownText = `${days} Day${days > 1 ? 's' : ''}, ${hours} Hour${hours > 1 ? 's' : ''}, ${minutes} Minute${minutes > 1 ? 's' : ''}, ${seconds} Second${seconds > 1 ? 's' : ''}`;
        if (days > 0) {
          countdownText = `${days} Day${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
          countdownText = `${hours} Hour${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
          countdownText = `${minutes} Minute${minutes > 1 ? 's' : ''}`;
        } else if (seconds > 0) {
          countdownText = `${seconds} Second${seconds > 1 ? 's' : ''}`;
        }

        newStarsDuration = 8 / newFireScale;
        newTopDistance = -12 / Math.sqrt(newFireScale) + newFireScale * 14;
      }

      // Update states
      setFireScale(newFireScale);
      setStarsDuration(newStarsDuration);
      setTopDistance(newTopDistance);
      setCountdown(countdownText);
    };

    const round = (number) => Math.round(number * 100) / 100;

    calculateScaleAndCountdown();
    const timer = setInterval(calculateScaleAndCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  //console.log(fireScale, starsDuration)
  return (
    <>
      <OuterSection >
        <ColumnWrap>
          <TextWrap>
            <HeroTitle> {countdown} </HeroTitle>
          </TextWrap>
        </ColumnWrap>
      </OuterSection>
      <RocketBackground fireScale={fireScale} starsDuration={starsDuration} topDistance={topDistance} />
    </>

  )
}

export default HeroSection;
