
import React from 'react';
import styled from 'styled-components'
import { ButtonProps, Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem 2rem;
  width: fit-content;
`;

export const ColorButton: React.FC<ButtonProps> = (props) => {
  const {
    loading,
  } = props;
  
  return (
    <Button {...props}>
      <Wrapper>
        {loading ? <FontAwesomeIcon icon={faCircleNotch} spin/> : props.children}
      </Wrapper>
    </Button>
  )
}