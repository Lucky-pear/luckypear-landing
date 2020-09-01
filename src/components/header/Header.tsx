import React from 'react';
import styled from 'styled-components';
import { Colors, Shadows } from '../../styles/colors';
import { FontFamily } from '../../styles/fonts';

const HEADER_HEIGHT = 80;

const Wrapper = styled.div`
`;
const HeightManager = styled.div`
  height: ${HEADER_HEIGHT}px !important;
`;
const ContentWrapper = styled.header`
  position: fixed;
  z-index: 100;
  background-color: ${Colors.white};
  /* box-shadow: ${Shadows.underShadow}; */
  height: ${HEADER_HEIGHT}px !important;
  left: 0px !important;
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  background-color: ${Colors.primary};
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 24px;
  color: ${Colors.primary};
  margin-left: 0.5rem;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Icon />
        <Title>
          LUCKY PEAR
        </Title>
      </ContentWrapper>
      <HeightManager />
    </Wrapper>
  );
}

export default Header;
