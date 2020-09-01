import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../styles/fonts';
import { Colors, Shadows } from '../../styles/colors';
import { WorkType } from '../../@types/typed';
import { Button } from '../buttons/Button';

const Wrapper = styled.div`
  background-color: ${Colors.white};
  padding-top: 3rem;
  padding-bottom: 2rem;
  box-shadow: ${Shadows.underShadow};
  border-radius: 1rem;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: ${Colors.primary};
  font-family: ${FontFamily.Axis};
  font-size: 20px;
  margin-bottom: 3em;
`;
const Description = styled.div`
  color: ${Colors.darkGrey};
  font-family: ${FontFamily.Quicksand};
  margin-bottom: 3em;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const Footer = styled.div`
  flex: 1;
  align-items: flex-end;
  display: flex;
`;
const CommingSoon = styled.div`
  color: ${Colors.grey};
`;

const WorkCard: React.FC<WorkType> = ({
  title,
  description,
  link
}) => {
  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      {description && <Description dangerouslySetInnerHTML={{ __html: description }} />}
      <Footer>
        {link ?
          <Button link={link}>
            See more
          </Button>
          :
          <CommingSoon>
            Comming soon!
          </CommingSoon>
        }
      </Footer>
    </Wrapper>
  );
}

export default WorkCard;
