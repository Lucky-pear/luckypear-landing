import React from 'react';
import styled from 'styled-components';
import WorkCard from '../../cards/WorkCard';
import { WorkType } from '../../../@types/typed';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0rem;

  ${({ theme }) => theme.media.mobile`
    padding: 4rem 1rem;
  `};
`
const Title = styled.div`
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 36px;
`;
const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.font.Quicksand};
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: 18px;
  text-align: center;
  margin-top: 1rem;
`;
const WorkCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 4rem;

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;

    > * {
      margin-top: 1.5rem; 
    }
  `};
`;

const Works: React.FC<{ works: WorkType[] }> = ({
  works
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>
          Works
      </Title>
        <Subtitle>
          These are the works we are focusing now.<br />
        LUCKY PEAR aims to make a better place for developers.
      </Subtitle>
        <WorkCardWrapper>
          {works.map(work => <WorkCard key={work.title} {...work} />)}
        </WorkCardWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Works;
