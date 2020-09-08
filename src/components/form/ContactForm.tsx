
import React, { useState } from 'react';
import styled from 'styled-components'
import { FormInput } from './FormInput';
import { emailRule, fillInputRule } from '../../utils/rules';
import { ColorButton } from '../buttons/ColorButton';

export type ContactType = {
  name: string,
  email: string,
  content: string,
}

export interface ContactFormProps {
  onSubmit: (data: ContactType) => void,
  isSending?: boolean,
}

const Wrapper = styled.form`
  width: 100%;
`;
const ButtonWrapper = styled.div`
  float: right;
  margin-top: 1rem;
`;

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const {
    onSubmit,
    isSending
  } = props;
  const [contactData, setContactData] = useState<ContactType>({
    name: '',
    email: '',
    content: ''
  });

  const _onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const _onSubmit = () => {
    if (onSubmit)
      onSubmit(contactData);
  }

  return (
    <Wrapper {...props} onSubmit={undefined}>
      <FormInput
        id="name"
        placeholder="Name"
        value={contactData.name}
        onChange={_onChange}
        rule={fillInputRule}
      />
      <FormInput
        id="email"
        placeholder="Email"
        value={contactData.email}
        onChange={_onChange}
        rule={emailRule}
      />
      <FormInput
        multiline
        id="content"
        placeholder="Feel free to write anything!"
        value={contactData.content}
        onChange={_onChange}
        rule={fillInputRule}
      />
      <ButtonWrapper>
        <ColorButton
          onClick={_onSubmit}
          loading={isSending}
        >
          Send
        </ColorButton>
      </ButtonWrapper>
    </Wrapper>
  )
}