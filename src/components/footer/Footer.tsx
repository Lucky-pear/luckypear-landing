import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Button } from '../buttons/Button';

const Wrapper = styled.footer`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-between;
`;
const Copyright = styled.div`
`;
const SocialIconsWrapper = styled.div`
`;

const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Footer;
