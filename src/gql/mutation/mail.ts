import { gql } from '@apollo/client';

export const SEND_CONTATCT_MAIL = gql`
  mutation sendContactMail($name: String!, $email: String!, $content: String!) {
    sendContactMail( name: $name, email: $email, content: $content ) {
      success
      message
    }
  }
`;