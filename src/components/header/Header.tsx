import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { NavButton } from '../buttons/NavButton';

const HEADER_HEIGHT = 80;

const Wrapper = styled.div`
`;
const HeightManager = styled.div`
  height: ${HEADER_HEIGHT}px !important;
`;
const ContentWrapper = styled.div`
  position: fixed;
  z-index: 100;
  /* box-shadow: ${({ theme }) => theme.shadow.box}; */
  height: ${HEADER_HEIGHT}px !important;
  left: 50%;
  transform: translateX(-50%);
  width: 100% !important;
  background-color: ${({ theme }) => theme.color.white};
`;

const HeaderWrapper = styled.header`
  padding: 1rem 2rem;

  ${({ theme }) => theme.media.mobile`
    padding: 1rem;
  `};
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Title = styled.div`
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 24px;
  color: ${({ theme }) => theme.color.primary};
  margin-left: 0.5rem;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <NavButton to="/">
            <Icon src={images.iconLogo} />
            <Title>
              LUCKY PEAR
            </Title>
          </NavButton>
        </HeaderWrapper>
      </ContentWrapper>
      <HeightManager />
    </Wrapper>
  );
}

export default Header;
