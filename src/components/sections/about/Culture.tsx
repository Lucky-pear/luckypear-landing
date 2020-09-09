import React from 'react';
import styled from 'styled-components';
import Profile from '../../profile/Profile';
import { ProfileGroupType } from './CultureContainer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
const InnerWrapper = styled.section`
  width: 80%;
  padding: 8rem 2rem;

  ${({ theme }) => theme.media.mobile`
    padding: 4rem 1rem;
    width: 100%;
  `};
`;
const Title = styled.div`
  font-family: ${({ theme }) => theme.font.Axis};
  font-size: 48px;
  color: ${({ theme }) => theme.color.darkGrey};
  margin-bottom: 1rem;
`;
const Description = styled.div`
  font-family: ${({ theme }) => theme.font.Quicksand};
  font-size: 20px;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.color.grey};
`;
const Heading = styled(Title)`
  font-size: 36px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 3rem;
  `};
`;
const MemberWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
const GroupWrapper = styled.div`
`;
const GroupTitle = styled(Title)`
  font-size: 28px;
  text-align: left;
`;
const AttendeeWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  > * {
   margin-right: 3rem;
  }

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;

    > * {
      margin-right: unset;
      margin-bottom: 2rem;
    }
  `};
`;


const Culture: React.FC<{
  profileGroup: ProfileGroupType
}> = (props) => {
  const {
    profileGroup
  } = props;

  return (
    <Wrapper>
      <InnerWrapper>
        <Title>
          Our Culture
        </Title>
        <Description>
          Culture is a notoriously difficult term to define. But in our values, people, teams, products and codes contains more value than it shows to be.
          We compose simply and contain more because believe that less code has more power.
        </Description>
        <Heading>
          Members
        </Heading>
        <GroupTitle>
          Laboratory
        </GroupTitle>
        <MemberWrapper>
          {profileGroup.members.map((member, idx) =>
            <Profile key={idx} {...member} />
          )}
        </MemberWrapper>
        {profileGroup.groups.map((group, idx) =>
          <GroupWrapper key={idx}>
            <GroupTitle>
              {group.title}
            </GroupTitle>
            <AttendeeWrapper>
              {group.attendees.map((attendee, i) =>
                <Profile key={i} {...attendee} />
              )}
            </AttendeeWrapper>
          </GroupWrapper>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}

export default Culture;
