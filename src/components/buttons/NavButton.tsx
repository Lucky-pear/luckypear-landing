
import React from 'react';
import styled from 'styled-components'
import { ButtonProps, Button } from './Button';
import { Link, LinkProps } from 'react-router-dom';

const Wrapper = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const NavButton: React.FC<ButtonProps & LinkProps> = (props) => {
  const {
    to,
    children
  } = props;

  return (
    <Button {...props}>
      <Wrapper to={to}>
        {children}
      </Wrapper>
    </Button>
  )
}