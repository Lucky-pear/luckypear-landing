import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'luckypear-ui';

type TSize = 'big' | 'small'
export interface ProfileType {
  image: string,
  name: string,
  position: string,
  size?: TSize,
  social?: ISocial
}
export interface ISocial {
  github?: string,
  linkedin?: string,
  blog?: string,
}

const Wrapper = styled.div<{ size: TSize }>`
  display: flex;
  flex-direction: ${props => props.size === 'big' ? 'column' : 'row'};
  align-items: center;
`;
const Image = styled.img<{ size: TSize }>`
  width: ${props => props.size === 'big' ? 144 : 92}px;
  border-radius: 50%;
`;
const InfoWrapper = styled.div<{ size: TSize }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.size === 'big' ? 'center' : 'flex-start'};
  margin-top: ${props => props.size === 'big' ? 1 : 0}rem;
  margin-left: ${props => props.size === 'small' ? 1 : 0}rem;
`;
const Name = styled.div`
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: bold;
`;
const Position = styled.div`
  color: ${({ theme }) => theme.color.grey};
  margin-top: 0.2rem;
`;
const SocialWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;

  > * {
    margin-right: 0.3rem;
    width: 1.2rem;
  }
`;

const Profile: React.FC<ProfileType> = (props) => {
  const {
    image,
    name,
    position,
    size = 'big',
    social = {}
  } = props;

  return (
    <Wrapper size={size}>
      <Image size={size} src={image} />
      <InfoWrapper size={size}>
        <Name>
          {name}
        </Name>
        <Position>
          {position}
        </Position>
        <SocialWrapper>
          {Object.entries(social).map(([key, value]) => {
            let icon;
            switch (key) {
              case 'github': icon = faGithub; break;
              case 'linkedin': icon = faLinkedin; break;
              case 'blog': icon = faHome; break;
              default: return null;
            }
            return (
              <Button key={key} href={value} type="naked" color="darkGrey">
                <FontAwesomeIcon icon={icon} />
              </Button>
            )
          })}
        </SocialWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Profile;
