import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

const HEADER_HEIGHT = 80;

const Wrapper = styled.div`
`;
const HeightManager = styled.div`
  height: ${HEADER_HEIGHT}px !important;
`;
const ContentWrapper = styled.header`
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.white};
  /* box-shadow: ${({ theme }) => theme.shadow.box}; */
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
      <Link to="/">
        <ContentWrapper>
          <Icon src={images.iconLogo} />
          <Title>
            LUCKY PEAR
          </Title>
        </ContentWrapper>
      </Link>
      <HeightManager />
    </Wrapper>
  );
}

export default Header;
