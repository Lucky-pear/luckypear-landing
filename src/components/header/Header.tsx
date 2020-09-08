import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { NavButton } from '../buttons/NavButton';
import { useInView } from 'react-intersection-observer';

const HEADER_HEIGHT = 80;

const Wrapper = styled.div`
`;
const HeightManager = styled.div`
  height: ${HEADER_HEIGHT}px !important;
`;
const ContentWrapper = styled.div<{ scrolled:boolean }>`
  position: fixed;
  z-index: 100;
  height: ${HEADER_HEIGHT}px !important;
  left: 50%;
  transform: translateX(-50%);
  width: 100% !important;
  background-color: ${props => props.scrolled ? props.theme.color.white : props.theme.color.transparent};
  box-shadow: ${props => props.scrolled ? props.theme.shadow.box : 'unset'};

  transition: .3s box-shadow;
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
  const { ref, inView, entry } = useInView();

  const isScrolled:boolean = entry !== undefined && !inView;

  return (
    <Wrapper>
      <div ref={ref} />
      <ContentWrapper scrolled={isScrolled}>
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
