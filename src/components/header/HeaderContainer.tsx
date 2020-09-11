import React from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './Header';
import { useHistory } from 'react-router-dom';

const HeaderContainer: React.FC = () => {
  const history = useHistory();
  const { ref, inView, entry } = useInView();

  const isScrolled:boolean = entry !== undefined && !inView;

  const onRequestToHome = () => {
    history.push('/');
  }

  return (
    <>
      <div ref={ref} />
      <Header 
        isScrolled={isScrolled}
        onRequestToHome={onRequestToHome}
      />
    </>
  );
}

export default HeaderContainer;
