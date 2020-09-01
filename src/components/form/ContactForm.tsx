
import React from 'react';
import styled from 'styled-components'
import { FormInput } from './FormInput';
import { emailRules } from '../../utils/rules';
import { ColorButton } from '../buttons/ColorButton';

export interface FormProps {
  onSubmit?: () => void,
}

const Wrapper = styled.form`
  padding: 1rem;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  float: right;
  margin-top: 1rem;
`;

export const ContactForm: React.FC<FormProps> = (props) => {
  const {
    onSubmit
  } = props;

  return (
    <Wrapper
      {...props}
      onSubmit={onSubmit}
    >
      <FormInput placeholder="Name"/>
      <FormInput placeholder="Email" rule={emailRules}/>
      <FormInput placeholder="Feel free to write anything!" multiline/>
      <ButtonWrapper>
        <ColorButton>
          Send
        </ColorButton>
      </ButtonWrapper>
    </Wrapper>
  )
}