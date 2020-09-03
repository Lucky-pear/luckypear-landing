import React from 'react';
import About from '../components/sections/main/About';
import styled from 'styled-components';
import WorksContainer from '../components/sections/main/WorksContainer';
import ContactContainer from '../components/sections/main/ContactContainer';

const Wrapper = styled.main`
`;

const Main: React.FC = () => {
  return (
    <Wrapper>
      <About />
      <WorksContainer />
      <ContactContainer />
    </Wrapper>
  );
}

export default Main;
