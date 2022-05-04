import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              logo disini
            </SocialLogo>
            <WebsiteRights>logo © {new Date().getFullYear()} Follow my social media! --></WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.instagram.com/carlosdoan/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/doancarlosembara/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
