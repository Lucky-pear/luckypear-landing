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

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Wrapper>
  );
}
export default App;
