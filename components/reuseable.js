import styled from "styled-components";
export const neonGreen = '#64FFDA'
export const neonPurple = '#710E71'
export const greyText = '#8892B0'

export const GreenSpan = styled.span`
  color: ${neonGreen};
`;

export const OuterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:760px;
  height: fit-content;
  gap: 45px;
  max-width: 1400px;

  @media screen and (max-width:1410px) {
      //box-sizing: border-box;
      gap: 30px;
      width: 90vw;

  }
`;

export const ThinText = styled.p`
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 150% */
  text-align: ${props => props.textalign ?? 'center'};
  width: 100%;
  margin: 0px;
  margin-top: -15px;
  z-index: 100;
  max-width: ${props => props.width ?? '900px'};
  letter-spacing: 0.5px;
  color: ${greyText};

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: left;
    letter-spacing: 0.4px;
  } 

`;

export const SectionTitle = styled.h2`
    position: relative;
    font-size: 5rem;
    font-weight: 400;
    margin-top: 7rem;
    margin-bottom: 5rem;
    z-index: 9999;
    letter-spacing: 0.6px;
    //font-family: 'Playfair Display', serif;
    margin: 0;

    @media screen and (max-width:1100px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    } 

    @media screen and (max-width:700px) {
        font-size: 3.5rem;
        margin-bottom: 0;
    }

    @media screen and (max-width:600px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        margin: 0;
        padding:0;
    }
`;

export const NumberedHeader = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 10px 0px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  overflow: hidden;
  color: #ccd6f6;

  &::before {
    position: relative;
    bottom: 1px;
    counter-increment: section 1;
    content: "${(props) => `0${props.number}.`}";
    margin-right: 10px;
    color: ${neonGreen};
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #233554;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 10px;
    
    &::before {
      margin-right: 10px;
    }

    &::after {
      content: "";
      display: block;
      position: relative;
      flex:1;
      height: 1px;
      margin-left: 20px; // might need to adjust this based on testing
      background-color: #233554;
      overflow: hidden;
      line-height:130%;
    }

    white-space: normal;  // Allow the text to wrap to the next line if necessary
  }
`;

