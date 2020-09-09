import React from 'react';
import { ProfileType } from '../../profile/Profile';
import Culture from './Culture';

export interface ProfileGroupType {
  members: ProfileType[]
  groups: [{ 
    title: string, 
    attendees: ProfileType[] 
  }]
}

const profileGroup: ProfileGroupType = {
  members: [{
    image: 'https://avatars0.githubusercontent.com/u/6838787?s=460&u=b8f7e9bc8b08d78f192abae44dfc95a61377261c&v=4',
    name: 'JB Paul Yun',
    position: 'Founder',
    social: {
      notion: "https://www.notion.so/Jong-Bae-Paul-Yun-84df22a244e244a0af392858a87f01ef",
      github: "https://github.com/yjb94",
      linkedin: "https://www.linkedin.com/in/jaybe-yun-219448106/",
    }
  }],
  groups: [{
    title: 'Study Group',
    attendees: [{
      image: 'https://avatars3.githubusercontent.com/u/26808056?s=460&u=00bbcb932efe0a39a77a37772c8a8917184f60be&v=4',
      name: 'Juno Lee',
      position: 'Attendee',
      size: 'small',
      social: {
        notion: "https://junoflo.oopy.io/",
        github: "https://github.com/juno7803"
      }
    },{
      image: 'https://avatars3.githubusercontent.com/u/49388937?s=460&u=ea1bc071d0af910354719944d2f3b53ba8e39c7d&v=4',
      name: 'Woo Jun Han',
      position: 'Attendee',
      size: 'small',
      social: {
        github: "https://github.com/mrMirror21"
      }
    }]
  }]
}

const CultureContainer: React.FC = () => {
  return (
    <Culture profileGroup={profileGroup} />
  );
}

export default CultureContainer;
