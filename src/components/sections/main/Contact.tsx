import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { ContactForm, ContactType } from '../../form/ContactForm';

export interface ContactProps {
  onRequestSendMail: (data: ContactType) => void,
  isSending?: boolean
}

const Wrapper = styled.div`
  display: flex;
  padding: 4rem 2rem;
  padding-bottom: 8rem;
`;
const Title = styled.div`
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 48px;
  color: ${({ theme }) => theme.color.darkGrey};
  margin-bottom: 1rem;
`;
const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.font.Quicksand};
  font-size: 24px;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.color.grey};
`;
const FormWrapper = styled.div`
  flex: 1;
  margin-left: 4rem;
  display: flex;
  align-items: center;
`;
const LeftWrapper = styled.div`
  max-width: 50%;
  flex-grow: 1;
`;
const Background = styled.img`
  width: 100%;
  padding-right: 2rem;
`;

const Contact: React.FC<ContactProps> = ({
  onRequestSendMail,
  isSending
}) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          Contact us
          </Title>
        <Subtitle>
          Want to be our member?<br />
            Want to offer us a project?<br />
            or... do you want us to walk your dog?<br />
            Feel free for asking everything!
          </Subtitle>
        <Background src={images.mainContactBG} />
      </LeftWrapper>
      <FormWrapper>
        <ContactForm 
          onSubmit={onRequestSendMail}
          isSending={isSending}
        />
      </FormWrapper>
    </Wrapper>
  );
}

export default Contact;
