import React from 'react';
import Works from './Works';
import { WorkType } from '../../@types/typed';

const works: WorkType[] = [
  {
    title: 'Resume',
    description: `<b>Resume</b> helps you generate your resume using github.<br/>By clicking once, we automatically generate your career timelines, tech stacks, most used languages and more!`,
  },
  {
    title: 'React study group',
    description: `Do you have passion to learn React?<br/>That's great! Join us!<br/>We offer some best practices for React starters`,
    link: 'https://github.com/orgs/Lucky-pear/teams/react-study-group'
  },
]

const WorksContainer: React.FC = () => {
  return (
    <Works works={works} />
  );
}

export default WorksContainer;
