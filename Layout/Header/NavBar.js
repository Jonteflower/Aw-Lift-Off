import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi'; // Import the settings icon
import styled from 'styled-components';
import { neonGreen } from '../../components/reuseable';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  //background: ${props => props.isOpen ? '#1a1a1a' : '#000000'};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column; // Changed to column to stack HeaderInner and SettingsInner
  align-items: center;
  justify-content: center;
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  z-index: 110;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

`;

const HeaderHolder = styled.div`
  width: 90vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1400px;
  @media (max-width: 1000px) {
      display:none;
  }

`;

const ButtonsInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height:100%;
  gap:24px;
  width: 100%;
  padding-right: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding:0;
    gap: 15px; // Adjust gap for a better mobile view
  }
`;

const NameLogo = styled.h2`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  margin: 0px;
  padding-left: 20px;
  white-space:nowrap;
  @media (max-width: 768px) {
    padding:0;
  }
`;

const NumberedHeader = styled.p`
  display: flex;
  align-items: center;
  position: relative;
  font-size: clamp(13px, 3vw, 16px);
  white-space: nowrap;
  overflow: hidden;
  color: #ccd6f6;
  font-weight: 400;
    
  &:hover {
    color: ${neonGreen};
    cursor: pointer;
  }

  &::before {
    position: relative;
    bottom: 0.5px;
    counter-increment: section 1;
    content: "${(props) => `0${props.number}.`}";
    margin-right: 5px;
    color: ${neonGreen};
    font-size: clamp(10.5px, 2.15vw, 12.5px);
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: flex; // Ensure these are displayed on mobile
  }

`;

const StyledIcon = styled(BiChevronDown)`
  color: ${neonGreen};
  font-size: 18px;
  transition: transform 0.3s;
  transform: ${props => `rotate(${props.iconrotation}deg)`};

  @media (max-width: 768px) {
  transform: ${props => `rotate(${Number(props.iconrotation) - 90}deg)`};
  }
`;

const SettingsInner = styled.div`
  width: 100%;
  position: absolute;
  top: ${props => props.isOpen ? '0px' : '-64px'}; // Adjust positioning based on isOpen
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1A1A1A;
  transition: top 0.3s ease-in-out; // Transition for the top property
  z-index: 105; // Lower z-index to let HeaderInner overlay when hidden
  height: 100%;

  @media (max-width: 768px) {
    position: relative; // Change to relative positioning on mobile
  }
`;

export default function NavMenu() {
  const router = useRouter();
  //const [isMenuOpen, setMenuOpen] = useState(false);
  const [settingsTabOpen, setSettingsTabOpen] = useState(false); // State to manage settings tab visibility
  const [iconRotation, setIconRotation] = useState('0')

  // Function to toggle settings tab
  const toggleSettingsTab = () => {
    setSettingsTabOpen(!settingsTabOpen);
  };

  useEffect(() => {
    setIconRotation(settingsTabOpen ? '-180' : '0')
  }, [settingsTabOpen])

  return (
    <HeaderContainer isOpen={settingsTabOpen}>
      <HeaderInner>
        <NameLogo>
          LIFT-OFF
        </NameLogo>
      </HeaderInner>
    </HeaderContainer>
  );
}