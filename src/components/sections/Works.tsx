import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import WorkCard from '../cards/WorkCard';
import { WorkType } from '../../@types/typed';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0rem;
  background-color: ${Colors.lightGrey};
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 32px;
`;
const Subtitle = styled.div`
  font-family: ${FontFamily.Quicksand};
  color: ${Colors.darkGrey};
  font-size: 18px;
  text-align: center;
  margin-top: 1rem;
`;
const WorkCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 4rem;
`;

const Works: React.FC<{ works:WorkType[] }> = ({
  works
}) => {
  return (
    <Wrapper>
      <Title>
        Works
      </Title>
      <Subtitle>
        These are the works we are focusing now.<br/>
        LUCKY PEAR aims to make a better place for developers.
      </Subtitle>
      <WorkCardWrapper>
        {works.map(work => <WorkCard key={work.title} {...work}/>)}
      </WorkCardWrapper>
    </Wrapper>
  );
}

export default Works;
