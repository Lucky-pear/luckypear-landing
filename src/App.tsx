import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import styled from 'styled-components';
import Footer from './components/footer/Footer';

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
      <Footer />
    </Wrapper>
  );
}
export default App;
