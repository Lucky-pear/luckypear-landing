import React from 'react';
import About from '../sections/About';
import styled from 'styled-components';
import WorksContainer from '../sections/WorksContainer';
import Contact from '../sections/Contact';

const Wrapper = styled.main`
`;

const Main: React.FC = () => {
  return (
    <Wrapper>
      <About />
      <WorksContainer />
      <Contact />
    </Wrapper>
  );
}

export default Main;
