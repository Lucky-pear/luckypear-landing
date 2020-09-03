import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import images from '../../../assets/images';
import { ContactForm, ContactType } from '../../form/ContactForm';

export interface ContactProps {
  onRequestSendMail: (data: ContactType) => void,
}

const Wrapper = styled.div`
  display: flex;
  padding: 4rem 2rem;
  padding-bottom: 8rem;
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 48px;
  color: ${Colors.darkGrey};
  margin-bottom: 1rem;
`;
const Subtitle = styled.div`
  font-family: ${FontFamily.Quicksand};
  font-size: 24px;
  margin-bottom: 5rem;
  color: ${Colors.grey};
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
  onRequestSendMail
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
        <ContactForm onSubmit={onRequestSendMail} />
      </FormWrapper>
    </Wrapper>
  );
}

export default Contact;
