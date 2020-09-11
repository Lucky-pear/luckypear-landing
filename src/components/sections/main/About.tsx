import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { Text, Button } from 'luckypear-ui'

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
const Title = styled(Text)`
  margin-bottom: 0.5rem;
`;
const Subtitle = styled(Text)`
  margin-bottom: 2rem;
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

const About: React.FC<{
  onSeeMore: () => void
}> = ({
  onSeeMore
}) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Title type="title">
          We support<br />
          lazy devlopers.
        </Title>
        <Subtitle type="subtitle" color="grey">
          We write codes to write less codes.<br />
          Focus on your code, rest will be done by us.
        </Subtitle>
        <Button onClick={onSeeMore}>
          Learn more
        </Button>
      </InfoWrapper>
      <ImageWrapper>
        <Background src={images.mainAboutBG} />
      </ImageWrapper>
    </Wrapper>
  );
}

export default About;
