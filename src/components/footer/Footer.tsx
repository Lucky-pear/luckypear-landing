import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Button } from '../buttons/Button';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
`;
const FooterWrapper = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
    padding: 2rem 1rem;
  `};
`;
const Copyright = styled.div`
`;
const SocialIconsWrapper = styled.div`
`;

const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
      <FooterWrapper>
        <Copyright>
          © 2020 Lucky Pear, Inc. All rights reserved
      </Copyright>
        <SocialIconsWrapper>
          <Button
            link="https://github.com/Lucky-pear"
            style={{
              color: themeContext.color.white
            }}
          >
            GitHub
        </Button>
        </SocialIconsWrapper>
      </FooterWrapper>
    </Wrapper>
  );
}

export default Footer;
