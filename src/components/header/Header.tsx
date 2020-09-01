import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { FontFamily } from '../../styles/fonts';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Icon />
      <Title>
        LUCKY PEAR
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: absolute;
  height: 80px !important;
  left: 0px !important;
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  background-color: ${Colors.primary};
`;
const Title = styled.div`
  font-family: ${FontFamily.Axis};
  font-size: 24px;
  color: ${Colors.primary};
  margin-left: 0.5rem;
`;

export default Header;
