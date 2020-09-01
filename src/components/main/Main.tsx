import React from 'react';
import About from '../sections/About';
import styled from 'styled-components';
import WorksContainer from '../sections/WorksContainer';

const Wrapper = styled.main`
`;

const Main: React.FC = () => {
  return (
    <Wrapper>
      <About />
      <WorksContainer />
    </Wrapper>
  );
}

export default Main;
