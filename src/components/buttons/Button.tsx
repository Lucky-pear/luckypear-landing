
import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../styles/colors';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: React.MouseEventHandler<Element>
}

const Container = styled.div`
  cursor: pointer;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: 1rem 2rem;
  width: fit-content;
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const _onClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      e.preventDefault();
      e.stopPropagation();
      props.onClick(e);
    }
  }

  return (
    <Container
      {...props}
      onClick={_onClick}
    >
      {props.children}
    </Container>
  )
}