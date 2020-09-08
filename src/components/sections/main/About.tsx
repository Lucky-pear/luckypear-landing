import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { ColorButton } from '../../buttons/ColorButton';
import { NavButton } from '../../buttons/NavButton';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 1rem;
  `};
`;
const InfoWrapper = styled.div`
  flex: 1;
`;
const Title = styled.div`
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 48px;
  color: ${({ theme }) => theme.color.darkGrey};
  margin-bottom: 0.5rem;
`;
const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.font.Quicksand};
  font-size: 24px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.grey};
`;
const ImageWrapper = styled.div`
  flex: 1;
  width: 50%;

  ${({ theme }) => theme.media.mobile`
    margin-top: 2rem;
    width: 100%;
  `};
`;
const Background = styled.img`
  width: 100%;
`;

const About: React.FC = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Title>
          We support<br />
          lazy devlopers.
        </Title>
        <Subtitle>
          We write codes to write less codes.<br />
          Focus on your code, rest will be done by us.
        </Subtitle>
        <NavButton to="/about">
          <ColorButton>
            Learn more
          </ColorButton>
        </NavButton>
      </InfoWrapper>
      <ImageWrapper>
        <Background src={images.mainAboutBG} />
      </ImageWrapper>
    </Wrapper>
  );
}

export default About;
