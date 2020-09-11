import React from 'react';
import styled from 'styled-components';
import WorksContainer from '../components/sections/main/WorksContainer';
import ContactContainer from '../components/sections/main/ContactContainer';
import AboutContainer from '../components/sections/main/AboutContainer';

const Wrapper = styled.main`
`;

const Main: React.FC = () => {
  return (
    <Wrapper>
      <AboutContainer />
      <WorksContainer />
      <ContactContainer />
    </Wrapper>
  );
}

export default Main;
