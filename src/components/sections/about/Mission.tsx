import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { Text } from 'luckypear-ui';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const InfoWrapper = styled.div`
  width: 80%;
  padding: 4rem 2rem;
  padding-bottom: 0rem;

  ${({ theme }) => theme.media.mobile`
    width: 100%;
    padding: 4rem 1rem;
    padding-bottom: 0rem;
  `};
`;
const Title = styled(Text)`
  margin-bottom: 1rem;
`;
const Description = styled(Text)`
  margin-bottom: 4rem;
`;
const Heading = styled(Title)`
  font-size: 36px;
`;
const Background = styled.img`
  width: 60%;

  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `};
`;

const Misson: React.FC = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Title type="title">
          OUR MISSION:<br />Stay lazy and be wealthy
        </Title>
        <Description type="subtitle" color="grey" size="medium">
          In current development industry, it is hard for developers to focus only on their codes.
          Due to complexity increase of develop environments, developer's jobs are divided and developers had to think much more even they didn't write their codes down.
          <br />
          <br />
          So we aim for the society that developers can focus on their codes.
          Developers can only focus on writing their beautiful logics and the rest will be done by us!
          We provide development studying group, template projects and also resume made just for you.
        </Description>
        <Heading type="title">
          What is Lazy developer?
        </Heading>
        <Description type="subtitle" color="grey" size="medium">
          Lazy here is not just the literal meaning of laziness. We mean it as developers who tries hard to write less codes.
          People who focuses on writing SOLID codes to increases code reusability. People who has this kind of personality are what we call Lazy developer.
        </Description>
      </InfoWrapper>
      <Background src={images.aboutBG} />
    </Wrapper>
  );
}

export default Misson;
