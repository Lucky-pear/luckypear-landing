import React from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import { ContactForm, ContactType } from '../../form/ContactForm';

export interface ContactProps {
  onRequestSendMail: (data: ContactType) => void,
  isSending?: boolean
}

const Wrapper = styled.section`
  display: flex;
  padding: 4rem 2rem;
  padding-bottom: 8rem;

  ${({ theme }) => theme.media.mobile`
    padding: 4rem 1rem;
    flex-direction: column;
  `};
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

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 3rem;
  `};
`;
const FormWrapper = styled.div`
  flex: 1;
  margin-left: 4rem;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.mobile`
    margin-left: unset;
    margin-top: 3rem;
  `};
`;
const ContentWrapper = styled.div`
  max-width: 50%;
  flex-grow: 1;

  ${({ theme }) => theme.media.mobile`
    max-width: unset;
  `};
`;
const Background = styled.img`
  width: 100%;
  padding-right: 2rem;

  ${({ theme }) => theme.media.mobile`
    padding-right: unset;
  `};
`;

const Contact: React.FC<ContactProps> = ({
  onRequestSendMail,
  isSending
}) => {
  return (
    <Wrapper>
      <ContentWrapper>
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
      </ContentWrapper>
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
