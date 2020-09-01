import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
export default App;
