import React from 'react';
import About from '../sections/About';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
}

const Wrapper = styled.main`
`;

export default Main;
