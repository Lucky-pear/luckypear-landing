
import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../styles/colors';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  link?: string,
  onClick?: React.MouseEventHandler<Element>
}

const Wrapper = styled.div`
  cursor: pointer;
  color: ${Colors.primary};
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const _onClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      e.preventDefault();
      e.stopPropagation();
      props.onClick(e);
    } else if(props.link) {
      window.open(props.link);
    }
  }

  return (
    <Wrapper
      {...props}
      onClick={_onClick}
    >
      {props.children}
    </Wrapper>
  )
}