import React from 'react';
import About from '../components/sections/main/About';
import styled from 'styled-components';
import WorksContainer from '../components/sections/main/WorksContainer';
import Contact from '../components/sections/main/Contact';

const Wrapper = styled.main`
  width: 100%;
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
