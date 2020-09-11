import React from 'react';
import About from './About';
import { useHistory } from 'react-router-dom';

const AboutContainer: React.FC = () => {
  const history = useHistory();

  const onSeeMore = () => {
    history.push('/about');
  }

  return <About onSeeMore={onSeeMore}/>;
}

export default AboutContainer;
