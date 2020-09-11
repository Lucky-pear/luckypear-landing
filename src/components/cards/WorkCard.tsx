import React from 'react';
import styled from 'styled-components';
import { WorkType } from '../../@types/typed';
import { Button } from 'luckypear-ui';


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding-top: 3rem;
  padding-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: 1rem;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 20px;
  margin-bottom: 3em;
`;
const Description = styled.div`
  color: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.font.Quicksand};
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
  color: ${({ theme }) => theme.color.grey};
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
          <Button type="naked" href={link}>
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
