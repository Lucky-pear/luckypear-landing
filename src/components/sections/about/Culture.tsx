import React from 'react';
import styled from 'styled-components';
import Profile from '../../profile/Profile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
const InnerWrapper = styled.div`
  width: 80%;
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
`;
const MemberWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 3rem;
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
`;


const Culture: React.FC = () => {
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
          <Profile 
            image={'https://avatars0.githubusercontent.com/u/6838787?s=460&u=b8f7e9bc8b08d78f192abae44dfc95a61377261c&v=4'}
            name="JB Paul Yun"
            position="Founder"
            social={{
              github: "https://github.com/yjb94",
              linkedin: "https://www.linkedin.com/in/jaybe-yun-219448106/"
            }}
          />
        </MemberWrapper>
        <GroupTitle>
          Study Group
        </GroupTitle>
        <AttendeeWrapper>
          <Profile 
            size="small"
            image={'https://avatars3.githubusercontent.com/u/26808056?s=460&u=00bbcb932efe0a39a77a37772c8a8917184f60be&v=4'}
            name="Juno Lee"
            position="Attendee"
            social={{
              github: "https://github.com/juno7803" 
            }}
          />
          <Profile 
            size="small"
            image={'https://avatars3.githubusercontent.com/u/49388937?s=460&u=ea1bc071d0af910354719944d2f3b53ba8e39c7d&v=4'}
            name="Woo Jun Han"
            position="Attendee"
            social={{
              github: "https://github.com/mrMirror21" 
            }}
          />
        </AttendeeWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Culture;
