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

  // Adjusting stars speed based on fire scale
  useEffect(() => {
    setStarsDuration(8 / fireScale); // Slower when the scale is lower
    setTopDistance(-12 / Math.sqrt(fireScale) + fireScale * 14)
  }, [fireScale]);

  function round(number) {
    return Math.round(number * 100) / 100
  }

  useEffect(() => {
    const calculateScaleAndCountdown = () => {
      const now = new Date();
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

      // Fire scale and countdown logic
      let newFireScale = 0.15;
      if (days === 0 && hours <= 10) {
        if (hours < 1) {
          const minuteNotNull = Math.max(1, minutes)
          newFireScale = round(1 + 0.5 / minuteNotNull);
        } else {
          newFireScale = 1 / hours;
        }
        if (hours === 0 && minutes === 0 && seconds <= 10) {
          const secondsNotNull = Math.max(1, seconds)
          newFireScale = round(1 + 1 / secondsNotNull);
        }
      }

      setFireScale(newFireScale);
      setStarsDuration(8 / newFireScale); // Slower when the scale is lower
      setTopDistance(-12 / Math.sqrt(newFireScale) + newFireScale * 14);

      // Countdown text update
      let countdownText = "LIFT-OFF";
      if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
        countdownText = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
        if (days > 0) {
          countdownText = `${days} Days`;
        } else if (hours > 0) {
          countdownText = `${hours} Hours`;
        } else if (minutes > 0) {
          countdownText = `${minutes} Minutes`;
        } else if (seconds > 0) {
          countdownText = `${seconds} Seconds`;
        } else {
          let countdownText = "LIFT-OFF"
        }
      }
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
