
import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../styles/colors';
import { ButtonProps, Button } from './Button';

const Wrapper = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: 1rem 2rem;
  width: fit-content;
`;

export const ColorButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </Button>
  )
}