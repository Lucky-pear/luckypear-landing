import { gql } from '@apollo/client';

export const SEND_MAIL = gql`
  mutation sendMail($name: String!, $email: String!, $content: String!) {
    sendMail( name: $name, email: $email, content: $content ) {
      success
    }
  }
`;