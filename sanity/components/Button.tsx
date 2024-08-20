import React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';

const Button = ({
  children,
  to,
  className,
  style,
  href,
  target,
  rel,
  el,
  type,
  value,
}) => {
  return <StyledBlank>{children}</StyledBlank>;
};

const ButtonStyle = css`
  background: #ff914d;
  color: white;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
`;
const StyledBlank = styled.div`
  ${ButtonStyle}
`;
const StyledA = styled.a`
  ${ButtonStyle}
  text-decoration: none;
`;
const StyledInput = styled.input`
  ${ButtonStyle}
  border: 0;
`;
export { ButtonStyle };
export default Button;
