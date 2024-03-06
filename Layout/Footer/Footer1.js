import React from 'react';
import {
  FooterContainer, TitleText, Divider, SpaceDiv
} from './Footer.elements';
import Link from 'next/link';

function Footer({ scroll }) {

  return (
    <>
      <FooterContainer $position={scroll == 0 ? 'fixed' : 'absolute'}>
       <Divider/>
       <Link href={"https://tallenj.xyz/"}>
       <TitleText>Jonathan Nairn Tallen</TitleText>
       </Link>
      </FooterContainer>
    </>
  );
}

export default Footer;