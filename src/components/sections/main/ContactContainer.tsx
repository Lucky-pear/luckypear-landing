import React from 'react';
import Contact from './Contact';
import { ContactType } from '../../form/ContactForm';
import { useMutation } from '@apollo/client';
import { SEND_MAIL } from '../../../gql/mutation/mail';
import { validChecker, emailRule, fillInputRule } from '../../../utils/rules';
const ContactContainer: React.FC = () => {
  const [sendMail] = useMutation(SEND_MAIL);

  const onRequestSendMail = (data: ContactType) => {
    if(validChecker([
      fillInputRule(data.name),
      emailRule(data.email),
      fillInputRule(data.content),
    ])) {
      sendMail({ variables: { ...data } });
    }
    // TODO: error handing
  }

  return (
    <Contact onRequestSendMail={onRequestSendMail} />
  );
}

export default ContactContainer;
