import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './routes/About';
import Main from './routes/Main';

const Wrapper = styled.div`
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainWrapper = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Main} />
        </Switch>
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
}
export default App;
