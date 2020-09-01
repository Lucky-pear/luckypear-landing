import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Button } from '../buttons/Button';

const Wrapper = styled.footer`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${Colors.darkGrey};
  color: ${Colors.white};
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;
const Copyright = styled.div`
`;
const SocialIconsWrapper = styled.div`
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Copyright>
        © 2020 Lucky Pear, Inc. All rights reserved
      </Copyright>
      <SocialIconsWrapper>
        <Button 
          link="https://github.com/Lucky-pear"
          style={{
            color: Colors.white
          }}
        >
          GitHub
        </Button>
      </SocialIconsWrapper>
    </Wrapper>
  );
}

export default Footer;
