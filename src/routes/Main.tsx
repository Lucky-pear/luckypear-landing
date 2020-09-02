import React from 'react';
import About from '../components/sections/About';
import styled from 'styled-components';
import WorksContainer from '../components/sections/WorksContainer';
import Contact from '../components/sections/Contact';

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
