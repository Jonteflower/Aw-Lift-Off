import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  background: #00000000;
  bottom:0;
  left:0;
  right:0;
  overflow: visible;
  box-sizing: border-box;
  padding:0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  height: 30px;
  gap: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0 1rem 0;
    gap:10px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  height: 40px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 0px auto 0 auto;
  }
`;

export const Divider = styled.div`
  display: block;
  width: 80%;
  border-bottom: 1px solid #ffffff99;
  height: 1px;
`;

export const TitleText = styled.p`
  font-size: 0.9rem;
  color:#f1f1f1;
  margin:0;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const LinkToWebsite = styled.a`
  font-size: 1rem;
  color:#f1f1f1;
  margin:0;
  line-height:130%;

  @media screen and (max-width: 1000px) {
    font-size: 1.1rem;
  }
`;
