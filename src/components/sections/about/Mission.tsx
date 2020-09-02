import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { Colors } from '../../../styles/colors';
import { FontFamily } from '../../../styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  padding-bottom: 0rem;
  text-align: center;
`;
const InfoWrapper = styled.div`
  width: 80%;
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 48px;
  color: ${Colors.darkGrey};
  margin-bottom: 1rem;
`;
const Description = styled.div`
  font-family: ${FontFamily.Quicksand};
  font-size: 20px;
  margin-bottom: 4rem;
  color: ${Colors.grey};
`;
const Heading = styled(Title)`
  font-size: 36px;
`;
const Background = styled.img`
  width: 60%;
`;

const Misson: React.FC = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Title>
          OUR MISSION:<br />Stay lazy and be wealthy
        </Title>
        <Description>
          In current development industry, it is hard for developers to focus only on their codes.
          Due to complexity increase of develop environments, developer's jobs are divided and developers had to think much more even they didn't write their codes down.
          <br />
          <br />
          So we aim for the society that developers can focus on their codes.
          Developers can only focus on writing their beautiful logics and the rest will be done by us!
          We provide development studying group, template projects and also resume made just for you.
        </Description>
        <Heading>
          What is Lazy developer?
        </Heading>
        <Description>
          Lazy here is not just the literal meaning of laziness. We mean it as developers who tries hard to write less codes.
          People who focuses on writing SOLID codes to increases code reusability. People who has this kind of personality are what we call Lazy developer.
        </Description>
      </InfoWrapper>
      <Background src={images.aboutBG} />
    </Wrapper>
  );
}

export default Misson;
