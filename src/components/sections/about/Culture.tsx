import React from 'react';
import styled from 'styled-components';
import Profile from '../../profile/Profile';
import { ProfileGroupType } from './CultureContainer';
import { Text } from 'luckypear-ui';

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
const Title = styled(Text)`
  margin-bottom: 1rem;
`;
const Description = styled(Text)`
  margin-bottom: 4rem;
`;
const Heading = styled(Text)`
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
const GroupTitle = styled(Text)`
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
        <Title type="title">
          Our Culture
        </Title>
        <Description type="subtitle" color="grey" size="medium">
          Culture is a notoriously difficult term to define. But in our values, people, teams, products and codes contains more value than it shows to be.
          We compose simply and contain more because believe that less code has more power.
        </Description>
        <Heading type="title">
          Members
        </Heading>
        <GroupTitle type="title">
          Laboratory
        </GroupTitle>
        <MemberWrapper>
          {profileGroup.members.map((member, idx) =>
            <Profile key={idx} {...member} />
          )}
        </MemberWrapper>
        {profileGroup.groups.map((group, idx) =>
          <GroupWrapper key={idx}>
            <GroupTitle type="title" size="big">
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
