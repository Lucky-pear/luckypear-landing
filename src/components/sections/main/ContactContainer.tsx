import React from 'react';
import Contact from './Contact';
import { ContactType } from '../../form/ContactForm';
import { useMutation } from '@apollo/client';
import { SEND_CONTATCT_MAIL } from '../../../gql/mutation/mail';
import { validChecker, emailRule, fillInputRule } from '../../../utils/rules';

const ContactContainer: React.FC = () => {
  const [sendContactMail, { 
   loading,
  }] = useMutation(SEND_CONTATCT_MAIL, {
    onCompleted(data) {
      const { sendContactMail:result } = data;
      alert(result.success ? 'Successfully sent your message!' : `An error occured, ${result.message}`)
    }
  });

  const onRequestSendMail = (data: ContactType) => {
    if(validChecker([
      fillInputRule(data.name),
      emailRule(data.email),
      fillInputRule(data.content),
    ])) {
      sendContactMail({ variables: { ...data } });
    }
  }

  return (
    <Contact 
      onRequestSendMail={onRequestSendMail}
      isSending={loading}
    />
  );
}

export default ContactContainer;
