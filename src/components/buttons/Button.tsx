
import React from 'react';
import styled from 'styled-components'

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  link?: string,
  loading?: boolean,
  onClick?: React.MouseEventHandler<Element>
}

const Wrapper = styled.div<{ loading: 1 | 0 }>`
  width: fit-content;
  cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
  color: ${({ theme }) => theme.color.primary};
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    loading,
    link,
    onClick
  } = props;

  const _onClick = (e: React.MouseEvent) => {
    if (loading)
      return;

    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    } else if (link) {
      window.open(link);
    }
  }

  return (
    <Wrapper
      {...props}
      loading={loading ? 1 : 0}   // writed this code cuz of type bug in styled-componentes https://github.com/styled-components/styled-components/issues/1198
      onClick={_onClick}
    >
      {children}
    </Wrapper>
  )
}