import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from '../buttons/Button';

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
  linkedin?: string
}

const Wrapper = styled.div<{ size: TSize }>`
  display: flex;
  flex-direction: ${props => props.size === 'big' ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
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
  color: ${Colors.darkGrey};
  font-weight: bold;
`;
const Position = styled.div`
  color: ${Colors.grey};
  margin-top: 0.2rem;
`;
const SocialWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;

  > * {
    margin-right: 0.3rem; 
    color: ${Colors.darkGrey};
  }
`;

const Profile: React.FC<ProfileType> = ({
  image,
  name,
  position,
  size = 'big',
  social = {}
}) => {
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
              default: return null;
            }
            return (
              <Button link={value}>
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