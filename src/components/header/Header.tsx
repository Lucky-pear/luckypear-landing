import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { Button } from 'luckypear-ui';

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

// TODO: switch this to logo component
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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

export interface HeaderProps {
  isScrolled: boolean
  onRequestToHome: () => void
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  onRequestToHome
}) => {
  return (
    <Wrapper>
      <ContentWrapper scrolled={isScrolled}>
        <HeaderWrapper>
          <Button type="naked" onClick={onRequestToHome}>
            <LogoContainer>
              <Icon src={images.iconLogo} />
              <Title>
                LUCKY PEAR
              </Title>
            </LogoContainer>
          </Button>
        </HeaderWrapper>
      </ContentWrapper>
      <HeightManager />
    </Wrapper>
  );
}

export default Header;
