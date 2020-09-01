import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { Colors } from '../../styles/colors';
import { FontFamily } from '../../styles/fonts';
import { ColorButton } from '../buttons/ColorButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
`;
const InfoWrapper = styled.div`
  flex: 1;
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 48px;
  color: ${Colors.darkGrey};
  margin-bottom: 0.5rem;
`;
const Subtitle = styled.div`
  font-family: ${FontFamily.Quicksand};
  font-size: 24px;
  margin-bottom: 2rem;
  color: ${Colors.grey};
`;
const ImageWrapper = styled.div`
  flex: 1;
  width: 50%;
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
        <ColorButton>
          Learn more
        </ColorButton>
      </InfoWrapper>
      <ImageWrapper>
        <Background src={images.aboutBG} />
      </ImageWrapper>
    </Wrapper>
  );
}

export default About;
